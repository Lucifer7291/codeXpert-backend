// src/seed/createAdmin.js
import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDB from "../config/dbConnect.js"; // ✅ FIXED
import User from "../models/userModel.js";

dotenv.config();

const createAdmin = async () => {
    try {
        await connectDB(); // ✅ connect to DB

        const existingAdmin = await User.findOne({ role: "admin" });

        if (existingAdmin) {
            console.log("⚠️ Admin already exists.");
        } else {
            const admin = new User({
                username: "admin",           // ✅ Add this line
                name: "CodeXpert Admin",     // Optional, if your model includes it
                email: "admin@codexpert.com",
                password: "admin123",        // Will be hashed by the model
                role: "admin",
            });

            await admin.save();
            console.log("✅ Admin created successfully!");
        }

        mongoose.connection.close();
    } catch (error) {
        console.error("❌ Failed to create admin:", error);
        mongoose.connection.close();
    }
};

createAdmin();
