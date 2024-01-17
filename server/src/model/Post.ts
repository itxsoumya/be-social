import { Types } from "mongoose";
import mongoose from "mongoose";


interface Post {
  content: string,
  author: Types.ObjectId,
  createdAt: Date,
}

const postSchema = new mongoose.Schema<Post>({
  content: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, required: true },
  createdAt: { type: Date, default: Date.now }
}, { timestamps: true });

const PostModel = mongoose.model('Post', postSchema);

export { PostModel, Post };
