import express from "express";
import {
  addTutorial,
  getAllTutorials,
  updateTutorial,
  deleteTutorial
} from "../controllers/tutorialController.js";

const router = express.Router();

router.get("/", getAllTutorials);
router.post("/", addTutorial);
router.put("/:id", updateTutorial);
router.delete("/:id", deleteTutorial);

export default router;
