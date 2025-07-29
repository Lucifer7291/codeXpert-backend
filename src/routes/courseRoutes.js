// src/routes/courseRoutes.js
import express from "express";
import {
  createCourse,
  getAllCourses,
  getCourseBySlug,
  updateCourse,
  deleteCourse,
} from "../controllers/courseController.js";

const router = express.Router();

// Public Routes
router.get("/", getAllCourses);
router.get("/:slug", getCourseBySlug);

// Admin Routes
router.post("/", createCourse); // Later protect with admin auth
router.put("/:id", updateCourse);
router.delete("/:id", deleteCourse);

export default router;
