import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  description: String,
  level: String,
  duration: String,
  createdBy: String,
  syllabus: [String],
  content: [
    {
      title: String,
      duration: String,
      lectures: [
        {
          title: String,
          duration: String,
          preview: Boolean,
        },
      ],
    },
  ],
  image: String,
  price: Number,
  originalPrice: Number,
  instructor: {
    name: String,
    photo: String,
  },
  rating: Number,
  type: {
    type: String,
    enum: ["free", "premium"],
    default: "free",
  },
});

// ✅ Fix OverwriteModelError here:
const Course = mongoose.models.Course || mongoose.model("Course", courseSchema);
export default Course;
