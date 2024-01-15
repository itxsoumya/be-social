import mongoose from "mongoose";


interface User {
  username: string,
  email: string,
  password: string,
  name: string
}

const userSchema = new mongoose.Schema<User>({
  username: { type: String, unique: true, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
})


const UserModel = mongoose.model<User>('User', userSchema);

export { UserModel, User }

