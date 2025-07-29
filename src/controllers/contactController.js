import ContactInfo from "../models/contactModel.js";

// @desc    Get contact info
// @route   GET /api/contact
// @access  Public
export const getContactInfo = async (req, res) => {
  try {
    const info = await ContactInfo.findOne().lean();
    if (!info) {
      return res.status(404).json({ message: "Contact information not found" });
    }

    // Only return the needed fields for frontend use
    const {
      name,
      email,
      phone1,
      phone2,
      youtube,
      instagram,
      telegram,
      facebook,
      twitter,
      linkedin,
      address,
    } = info;

    res.json({
      name,
      email,
      phone1,
      phone2,
      youtube,
      instagram,
      telegram,
      facebook,
      twitter,
      linkedin,
      address
    });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// @desc    Update or create contact info
// @route   PUT /api/contact
// @access  Admin (add protection middleware later)
export const updateContactInfo = async (req, res) => {
  try {
    const existing = await ContactInfo.findOne();
    const updated = existing
      ? await ContactInfo.findByIdAndUpdate(existing._id, req.body, { new: true })
      : await ContactInfo.create(req.body);
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: "Update failed", error: err.message });
  }
};
