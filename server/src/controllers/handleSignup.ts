import { UserModel } from "../model/User"
import { Request, Response } from "express";



const handleSignup = async (req: Request, res: Response) => {

  try {
    const userbyusername = await UserModel.findOne({ username: req.body.validatedData.username })

    if (userbyusername) {
      return res.status(409).json({ err: 'user already exist' })
    }

    const userbyemail = await UserModel.findOne({ email: req.body.validatedData.email });
    if (userbyemail) {
      return res.status(409).json({ err: 'email already exist' })
    }


  } catch (err) {
    console.log(err);
    return res.status(500).json({ err: 'internal server error' })
  }

  try {


    const newUser = new UserModel(req.body.validatedData);
    const user = await newUser.save();

    console.log(user)

    return res.json(user);


  } catch (err) {
    console.log(err);
    return res.status(500).json({ err: 'internal server error' })
  }

}

export default handleSignup;
