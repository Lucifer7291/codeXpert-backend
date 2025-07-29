import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

// Prevent OverwriteModelError on hot reload
const Category = mongoose.models.Category || mongoose.model("Category", categorySchema);
export default Category;
