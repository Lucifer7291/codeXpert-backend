import express from "express";
import { getContactInfo, updateContactInfo } from "../controllers/contactController.js";
// You can add protection here later:
// import { isAuthenticated, authorizeRoles } from "../middlewares/authMiddleware.js";

const router = express.Router();

// @route   GET /api/contact
// @desc    Fetch contact info (email, phone, social links, location)
// @access  Public
router.get("/", getContactInfo);

// @route   PUT /api/contact
// @desc    Update or create contact info
// @access  Admin
// router.put("/", isAuthenticated, authorizeRoles("admin"), updateContactInfo);
router.put("/", updateContactInfo);

export default router;
