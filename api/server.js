const serverless = require("serverless-http");
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("../src/config/db");

// Load env vars
dotenv.config();

// Initialize app
const app = express();
connectDB();

app.use(express.json());

// All your routes
app.use("/api/auth", require("../src/routes/authRoutes"));
// ... other routes

module.exports.handler = serverless(app);  // 👈 required by Vercel
