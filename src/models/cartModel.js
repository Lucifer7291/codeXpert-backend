import mongoose from "mongoose";

const cartSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    thumbnail: { type: String, required: true },
    price: { type: Number, required: true },
    userId: { type: String, default: "guest" }, // optional: for multi-user setup
  },
  { timestamps: true }
);

export default mongoose.model("Cart", cartSchema);
