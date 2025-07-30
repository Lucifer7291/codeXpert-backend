import path from "path";
import fs from "fs"; // No longer used on Vercel, only kept locally
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import mongoose from "mongoose";

dotenv.config();
const app = express();

// ✅ Block server if essential env variables are missing
if (!process.env.MONGO_URI || !process.env.JWT_SECRET) {
  throw new Error("❌ Missing required environment variables in .env");
}

// ✅ Connect to MongoDB
import dbConnect from "./config/dbConnect.js";
dbConnect();

// ✅ Middleware Setup
app.use(cors({ origin: true, credentials: true }));
app.use(helmet());
app.use(express.json());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: "⚠ Too many requests. Try again later.",
});
app.use(limiter);

// ✅ Load Models
import "./models/categoryModel.js";
import "./models/testimonialModel.js";
import "./models/homeModel.js";
import "./models/userModel.js";

// ✅ Import Routes
import authRoutes from "./routes/authRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";
import courseRoutes from "./routes/courseRoutes.js";
import noteRoutes from "./routes/noteRoutes.js";
import projectRoutes from "./routes/projectRoutes.js";
import tutorialRoutes from "./routes/tutorialRoutes.js";
import roadmapRoutes from "./routes/roadmapRoutes.js";
import aboutRoutes from "./routes/aboutRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import queryRoutes from "./routes/queryRoutes.js";
import homeRoutes from "./routes/homeRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import testimonialRoutes from "./routes/testimonialRoutes.js";
import techStackRoutes from "./routes/techStackRoutes.js";
import downloadRoutes from "./routes/downloadRoutes.js";
import subscribeRoutes from "./routes/subscribeRoutes.js";

// ✅ Use Routes
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/notes", noteRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/tutorials", tutorialRoutes);
app.use("/api/roadmaps", roadmapRoutes);
app.use("/api/about", aboutRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/queries", queryRoutes);
app.use("/api/home", homeRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/testimonials", testimonialRoutes);
app.use("/api/techstack", techStackRoutes);
app.use("/api/download", downloadRoutes);
app.use("/api", subscribeRoutes); // subscribe: POST /api/subscribe

// ✅ Test API
app.get("/api", (req, res) => {
  res.send("🚀 CodeXpert Backend API is Live on Vercel!");
});

// ✅ 404 Handler
app.use((req, res) => {
  res.status(404).json({ message: "API Route Not Found" });
});

// ✅ Error Handler
app.use((err, req, res, next) => {
  console.error("❌ Server Error:", err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

// ✅ Local dev: Run server only when NOT in Vercel
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`✅ Local HTTP Server running at http://localhost:${PORT}`);
  });
}

export default app;
