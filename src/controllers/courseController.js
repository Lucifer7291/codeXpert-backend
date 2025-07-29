// src/controllers/courseController.js
import Course from "../models/courseModel.js";
import User from "../models/userModel.js"; // ✅ Import User model

// ✅ Function to notify all users
export const notifyAllUsers = async (message) => {
  try {
    const users = await User.find({});
    for (const user of users) {
      user.notifications.push({ message, date: new Date(), read: false });
      await user.save();
    }
    console.log("✅ Notified all users:", message);
  } catch (err) {
    console.error("❌ Error notifying users:", err.message);
  }
};

// ✅ Create Course + Notify
export const createCourse = async (req, res) => {
  try {
    const course = await Course.create(req.body);

    // 🔔 Notify users about the new course
    await notifyAllUsers(`📢 New course published: ${course.title}`);

    res.status(201).json(course);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// ✅ Get All Courses
export const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ Get Course By Slug
export const getCourseBySlug = async (req, res) => {
  try {
    const course = await Course.findOne({ slug: req.params.slug });
    if (!course) return res.status(404).json({ message: "Course not found" });
    res.json(course);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ Update Course
export const updateCourse = async (req, res) => {
  try {
    const updated = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// ✅ Delete Course
export const deleteCourse = async (req, res) => {
  try {
    await Course.findByIdAndDelete(req.params.id);
    res.json({ message: "Course deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
