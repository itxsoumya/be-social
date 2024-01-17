import { Request, Response, NextFunction } from "express";
import { z, ZodError } from "zod";
import jwt from 'jsonwebtoken'


const JWT_SECRET = process.env.JWT_SECRET;

const SignUpSchema = z.object({
  username: z.string().min(3).max(50),
  email: z.string().email(),
  name: z.string().max(60),
  password: z.string()
})

const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string()
})

const JwtTokenSchema = z.object({
  token: z.string()
})



const isAuthorizedMiddleware = (req: Request, res: Response, next: NextFunction) => {
  try {
    // console.log(req.headers)
    const validatedToken = JwtTokenSchema.parse(req.headers);
    const validatedData = jwt.verify(validatedToken.token, JWT_SECRET!);
    req.body.zwtDecodedData = validatedData;
    next();
  } catch (err) {
    console.log(err);
    return res.status(400).json({ err: 'you are not logged in' })
  }
}




const validateSignupDataMiddleware = (req: Request, res: Response, next: NextFunction) => {

  try {
    const validatedData = SignUpSchema.parse(req.body);
    req.body.validatedData = validatedData;
    next();
  } catch (err) {
    if (err instanceof ZodError) {
      res.status(400).json({ err: err.errors })
    } else {
      res.status(500).json({ err: 'Internal Server Error' })
    }
  }

}


const validateLoginDataMiddleware = (req: Request, res: Response, next: NextFunction) => {
  try {
    const validatedData = LoginSchema.parse(req.body);
    req.body.validatedData = validatedData;
    next();
  } catch (err) {
    if (err instanceof ZodError) {
      res.status(400).json({ err: err.errors });
    } else {
      res.status(500).json({ err: 'Internal Server Error' })
    }
  }
}


export { validateSignupDataMiddleware, validateLoginDataMiddleware, isAuthorizedMiddleware };
