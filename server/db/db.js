import dotenv from 'dotenv'
import mongoose from 'mongoose';
import { defaultErrorMap } from 'zod';

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('[+] connected to database...')
  } catch (err) {
    console.error('[-] db connection failed: ', err.message);

  }
}

export default connectDB;
