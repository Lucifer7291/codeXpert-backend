import express from "express";
import { subscribeUser, getAllSubscribers } from "../controllers/subscribeController.js";

const router = express.Router();

// Route to subscribe a user
router.post("/subscribe", subscribeUser);

// Route to fetch all subscribers (admin use)
router.get("/subscribers", getAllSubscribers);

export default router;
