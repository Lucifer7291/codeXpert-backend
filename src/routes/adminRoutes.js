import express from "express";
import { authenticate } from "../middlewares/authMiddleware.js";
import { authorizeRoles } from "../middlewares/authorizeRoles.js";

const router = express.Router();

router.get(
  "/dashboard",
  authenticate,
  authorizeRoles("admin", "staff"), // allow both
  (req, res) => {
    res.status(200).json({
      message: `Welcome ${req.user.role} to the Admin Dashboard`,
      user: req.user,
    });
  }
);

// ✅ Example admin-only route
router.get(
  "/all-users",
  authenticate,
  authorizeRoles("admin"),
  (req, res) => {
    // In future: return list of all users
    res.json({ message: "List of all users - [Coming Soon]" });
  }
);

export default router;
