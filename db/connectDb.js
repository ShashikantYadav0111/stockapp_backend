import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config()

const MONGO_URL = process.env.MONGO_URL;

const connectDb = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("✅ Connected to MongoDB successfully");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
    throw new Error(error.message);
  }
};

export default connectDb;