import mongoose from "mongoose";

const aboutSchema = new mongoose.Schema({
  introText: { type: String, required: true },
  stats: [
    {
      label: String,
      value: Number,
    }
  ],
  reasons: [String], // Why choose CodeXpert?
  timeline: [
    {
      year: String,
      milestone: String,
    }
  ],
  founder: {
    name: String,
    photo: String,
    message: String,
  },
  testimonials: [
    {
      name: String,
      comment: String,
      avatar: String,
    }
  ]
}, { timestamps: true });

export default mongoose.model("About", aboutSchema);
