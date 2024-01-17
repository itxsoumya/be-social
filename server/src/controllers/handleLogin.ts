import { Request, Response } from "express";
import { UserModel } from "../model/User";
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET


const handleLogin = async (req: Request, res: Response) => {


  try {
    const user = await UserModel.findOne({ email: req.body.email, password: req.body.password });
    if (!user) res.status(401).json({ err: "user doesn't exist" });

    const payload = {
      username: user?.username,
      email: user?.email,
      name: user?.name
    }
    // console.log('jwt pass: ',JWT_SECRET)
    const token = jwt.sign(payload, JWT_SECRET!);


    return res.json({ token })


  } catch (err) {
    console.log(err);
    return res.status(500).json({ err: 'Internal Server Error' })
  }

}

export default handleLogin;
