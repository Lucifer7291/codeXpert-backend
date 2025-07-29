import mongoose from "mongoose";
import dotenv from "dotenv";
import Category from "../models/categoryModel.js";

dotenv.config();

const categories = [
  { name: "HTML", slug: "html" },
  { name: "CSS", slug: "css" },
  { name: "JavaScript", slug: "javascript" },
  { name: "React JS", slug: "react-js" },
  { name: "Python", slug: "python" },
  { name: "C++", slug: "cpp" },
  { name: "Ethical Hacking", slug: "hacking" },
  { name: "MongoDB", slug: "mongodb" },
  { name: "Node.js", slug: "node-js" },
  { name: "Express.js", slug: "express-js" },
];

const seed = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    for (const category of categories) {
      const exists = await Category.findOne({ slug: category.slug });
      if (!exists) {
        await Category.create(category);
        console.log(`✅ Inserted: ${category.name}`);
      } else {
        console.log(`⚠️ Already exists: ${category.name}`);
      }
    }

    console.log("🎉 Category seeding complete.");
    process.exit();
  } catch (err) {
    console.error("❌ Seeding failed:", err);
    process.exit(1);
  }
};

seed();
