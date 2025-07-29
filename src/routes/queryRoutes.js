// src/routes/queryRoutes.js
import express from "express";
import { submitQuery, getAllQueries, deleteQuery } from "../controllers/queryController.js";

const router = express.Router();

router.post("/", submitQuery);
router.get("/", getAllQueries); // Admin only in future
router.delete("/:id", deleteQuery);

export default router;
