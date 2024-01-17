import { Request, Response } from "express";
import { PostModel } from "../model/Post";
import { UserModel } from "../model/User";


const createPost = async (req: Request, res: Response) => {
  const content = req.body.content;

  // this should be converted to zod
  if (!content) {
    return res.status(400).json({ err: 'please provide content' })
  }
  try {
    const user = await UserModel.findOne({ email: req.body.zwtDecodedData.email });

    if (!user) {
      return res.status(400).json({ err: 'User not present' })
    }

    const newPost = new PostModel({
      content: req.body.content,
      author: user._id
    });

    const post = await newPost.save();
    return res.json(post)

  } catch (err) {
    console.log(err);
    res.status(501).json({ err: 'Internal Server Error' })
  }
}

const getAllPosts = async (_req: Request, res: Response) => {
  try {
    const posts = await PostModel.find();
    res.json(posts.reverse());
  } catch (err) {
    console.log(err)
    res.status(501).json({ err: 'insernal server error' })
  }
}


export { createPost, getAllPosts }
