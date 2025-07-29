import express from "express";
import {
  getAllTestimonials,
  createTestimonial,
} from "../controllers/testimonialController.js";

const router = express.Router();

// Public
router.get("/", getAllTestimonials);

// Public post (was admin-only before)
router.post("/", createTestimonial);

export default router;
