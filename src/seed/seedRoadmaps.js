import mongoose from "mongoose";
import dotenv from "dotenv";
import Roadmap from "../models/roadmapModel.js";

dotenv.config();

// Replace with your actual MongoDB URI
const MONGO_URI = process.env.MONGO_URI;

const sampleRoadmaps = [
  {
    title: "Frontend Development",
    field: "Web Development",
    description: "Start your journey into HTML, CSS, JavaScript and frameworks like React.",
    image: "",
    steps: ["Learn HTML & CSS", "Master JavaScript", "Practice with Projects", "Learn React", "Build Portfolio"],
  },
  {
    title: "Backend Development",
    field: "Web Development",
    description: "Explore server-side technologies like Node.js, Express, and databases.",
    image: "",
    steps: ["Learn Node.js", "Understand Express", "Work with MongoDB", "Authentication & APIs"],
  },
  {
    title: "Data Science",
    field: "AI & Analytics",
    description: "Start from Python and move into Machine Learning, Pandas, and real-world data projects.",
    image: "",
    steps: ["Learn Python", "Use Pandas & NumPy", "Visualize Data", "Explore ML Models"],
  },
];

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    await Roadmap.deleteMany({});
    await Roadmap.insertMany(sampleRoadmaps);
    console.log("✅ Roadmaps seeded successfully!");
    mongoose.disconnect();
  })
  .catch((err) => {
    console.error("❌ Error seeding roadmaps:", err);
    mongoose.disconnect();
  });
