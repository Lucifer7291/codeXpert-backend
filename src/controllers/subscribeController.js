import Subscribe from "../models/subscribeModel.js";

// Subscribe a user
export const subscribeUser = async (req, res) => {
  try {
    let { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required." });
    }

    email = email.trim().toLowerCase();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email format." });
    }

    const existing = await Subscribe.findOne({ email });
    if (existing) {
      return res.status(409).json({ message: "This email is already subscribed." });
    }

    const newSub = new Subscribe({ email });
    await newSub.save();

    res.status(200).json({ message: "Subscribed successfully!" });
  } catch (err) {
    res.status(500).json({
      message: "Server error. Please try again later.",
      error: err.message,
    });
  }
};

// Get all subscribers (Admin use)
export const getAllSubscribers = async (req, res) => {
  try {
    const subscribers = await Subscribe.find().sort({ createdAt: -1 }); // Latest first
    res.status(200).json(subscribers);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch subscribers", error: err.message });
  }
};
