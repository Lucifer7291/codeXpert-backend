import mongoose from "mongoose";

const tutorialSchema = new mongoose.Schema({
  title: { type: String, required: true },
  topic: { type: String, required: true },
  description: String,
  videoUrl: { type: String, required: true },
  thumbnail: String,
  createdBy: { type: String, default: "CodeXpert Team" }
}, { timestamps: true });

export default mongoose.model("Tutorial", tutorialSchema);
