import mongoose from "mongoose";

const testimonialSchema = new mongoose.Schema({
  name: { type: String, required: true },
  feedback: { type: String, required: true },
  rating: { type: Number, min: 1, max: 5, default: 5 },
  image: { type: String, default: "" },  // URL or path to profile image
}, { timestamps: true });

export default mongoose.model("Testimonial", testimonialSchema);
