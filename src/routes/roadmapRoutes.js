import express from "express";
import {
  addRoadmap,
  getAllRoadmaps,
  updateRoadmap,
  deleteRoadmap
} from "../controllers/roadmapController.js";

const router = express.Router();

router.get("/", getAllRoadmaps);
router.post("/", addRoadmap);
router.put("/:id", updateRoadmap);
router.delete("/:id", deleteRoadmap);

export default router;
