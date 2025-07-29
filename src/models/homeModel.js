// src/models/homeModel.js
import mongoose from "mongoose";

const homeSchema = new mongoose.Schema({
  heading: { type: String, required: true },
  subheading: { type: String },
  ctaText: { type: String },
  ctaLink: { type: String },
  backgroundImage: { type: String }, // optional
});

export default mongoose.model("Home", homeSchema);
