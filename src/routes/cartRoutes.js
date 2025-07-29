import express from "express";
import {
  addToCart,
  getCartItems,
  removeCartItem,
  buyAllCourses,
} from "../controllers/cartController.js";

const router = express.Router();

router.get("/", getCartItems);
router.post("/", addToCart);
router.delete("/:id", removeCartItem);
router.post("/buy", buyAllCourses);

export default router;
