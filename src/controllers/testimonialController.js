import Testimonial from "../models/testimonialModel.js";

// GET all testimonials
export const getAllTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find().sort({ createdAt: -1 });
    res.status(200).json(testimonials);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch testimonials", error: err.message });
  }
};

// POST create testimonial
export const createTestimonial = async (req, res) => {
  try {
    const { name, feedback, rating, image } = req.body;
    const newTestimonial = new Testimonial({ name, feedback, rating, image });
    await newTestimonial.save();
    res.status(201).json({ message: "Testimonial added", testimonial: newTestimonial });
  } catch (err) {
    res.status(500).json({ message: "Failed to create testimonial", error: err.message });
  }
};

