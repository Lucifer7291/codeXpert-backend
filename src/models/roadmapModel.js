import mongoose from "mongoose";

// Define schema for each step
const stepSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    resources: [{ type: String }] // optional resources like links/videos
  },
  { _id: false }
);

// Main roadmap schema
const roadmapSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    field: { type: String, required: true },
    description: String,
    image: String,
    steps: [stepSchema], // structured steps
    createdBy: { type: String, default: "CodeXpert Team" }
  },
  { timestamps: true }
);

export default mongoose.model("Roadmap", roadmapSchema);
