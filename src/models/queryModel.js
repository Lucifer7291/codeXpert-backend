// src/models/queryModel.js
import mongoose from "mongoose";

const querySchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  message: String
}, { timestamps: true });

export default mongoose.model("UserQuery", querySchema);
