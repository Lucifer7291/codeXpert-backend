import express from "express";
import { downloadProjectAsZip } from "../controllers/downloadController.js";

const router = express.Router();

router.post("/zip", downloadProjectAsZip);

export default router;
