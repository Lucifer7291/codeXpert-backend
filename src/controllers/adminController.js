// src/controllers/adminController.js

import User from "../models/userModel.js"; // Adjust path based on your structure

// Admin dashboard overview
export const getAdminDashboard = (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to Admin Dashboard",
    admin: req.user, // Contains authenticated admin info
  });
};

// Fetch all users (for admin panel)
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({ role: "user" }).select("-password");
    res.status(200).json({ success: true, users });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to fetch users" });
  }
};

// Delete a user by ID
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await User.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ success: false, message: "User not found" });
    }
    res.status(200).json({ success: true, message: "User deleted" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error deleting user" });
  }
};

// Update a user's role
export const updateUserRole = async (req, res) => {
  try {
    const { id } = req.params;
    const { role } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      id,
      { role },
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    res.status(200).json({ success: true, message: "User role updated", user: updatedUser });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error updating user role" });
  }
};
