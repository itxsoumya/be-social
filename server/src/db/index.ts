import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()



const DB_URI = process.env.DB_URI;

const connectDB = async () => {
  if (!DB_URI) {
    console.log('DB_URI is not defined');
  } else {
    mongoose.connect(DB_URI).then(() => console.log('[+] db connectedd....'))
  }

}

export default connectDB;
