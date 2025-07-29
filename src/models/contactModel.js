import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone1: String,
  phone2: String,
  youtube: String,
  instagram: String,
  facebook: String,
  twitter: String,
  linkedin: String,
  address: String
}, { timestamps: true });

export default mongoose.model("ContactInfo", contactSchema);
