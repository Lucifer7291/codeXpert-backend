import mongoose from "mongoose";

const techStackSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const TechStack = mongoose.model("TechStack", techStackSchema);
export default TechStack;
