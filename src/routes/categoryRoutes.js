import express from "express";
import { getAllCategories, createCategory } from "../controllers/categoryController.js";

const router = express.Router();

// Public
router.get("/", getAllCategories);

// Admin Only
// router.post("/", authenticate, authorizeRoles("admin"), createCategory);
router.post("/", createCategory); // 🔓 No auth just for seeding


export default router;
