// src/routes/projectRoutes.js
import express from "express";
import {
  getAllProjects,
  getProjectBySlug,
  createProject,
  updateProject,
  deleteProject,
  getVideoProjects, // ⬅️ Import the new controller
} from "../controllers/projectController.js";

const router = express.Router();

// Get all projects
router.get("/", getAllProjects);

// ✅ Get video-based projects only
router.get("/video", getVideoProjects); // <-- Added route

// Get a single project by slug
router.get("/:slug", getProjectBySlug);

// Create new project
router.post("/", createProject);

// Update project by ID
router.put("/:id", updateProject);

// Delete project by ID
router.delete("/:id", deleteProject);

export default router;
