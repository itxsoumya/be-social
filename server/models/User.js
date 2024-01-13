import mongoose from "mongoose";


const userSchema = mongoose.Schema({
  username: { type: String, required: true, unique: true },
  name: { type: String, requires: true },
  email: { type: String, requires: true, unique: true },
  password: { type: String, requires: true }
})

const User = mongoose.model('user', userSchema);

export default User;
