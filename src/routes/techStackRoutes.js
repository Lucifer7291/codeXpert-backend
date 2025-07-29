// routes/techStackRoutes.js
import express from "express";
import TechStack from "../models/techStackModel.js"; // Adjust path if placed elsewhere

const router = express.Router();

// @desc    Get all tech stacks
// @route   GET /api/techstacks
// @access  Public
router.get("/", async (req, res) => {
  try {
    const stacks = await TechStack.find();
    res.status(200).json(stacks);
  } catch (err) {
    console.error("Failed to fetch tech stacks:", err);
    res.status(500).json({ message: "Failed to fetch tech stacks" });
  }
});

// @desc    Add a new tech stack (optional)
// @route   POST /api/techstacks
// @access  Public or Protected (your choice)
router.post("/", async (req, res) => {
  const { name, logo, description } = req.body;

  if (!name || !logo) {
    return res.status(400).json({ message: "Name and logo are required" });
  }

  try {
    const newStack = new TechStack({ name, logo, description });
    await newStack.save();
    res.status(201).json(newStack);
  } catch (err) {
    console.error("Failed to add tech stack:", err);
    res.status(500).json({ message: "Failed to add tech stack" });
  }
});

export default router;
