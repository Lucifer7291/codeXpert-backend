// src/seed/createUser.js
import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "../config/dbConnect.js";
import User from "../models/userModel.js";

dotenv.config();

const createUser = async () => {
  try {
    await connectDB();
    console.log("✅ MongoDB connected");

    const existingUser = await User.findOne({ email: "user@codexpert.com" });
    if (existingUser) {
      console.log("⚠️  User already exists");
      return;
    }

    const user = new User({
      username: "TestUser",
      email: "user@codexpert.com",
      password: "user1234",
      role: "user",
    });

    await user.save();
    console.log("✅ Test user created successfully!");
  } catch (error) {
    console.error("❌ Failed to create user:", error);
  } finally {
    mongoose.disconnect();
  }
};

createUser();
