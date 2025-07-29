import Category from "../models/categoryModel.js";

// GET all categories
export const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find().sort({ createdAt: -1 });
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch categories", error: err.message });
  }
};

// POST create category
export const createCategory = async (req, res) => {
  try {
    const { name, slug } = req.body;
    const newCategory = new Category({ name, slug });
    await newCategory.save();
    res.status(201).json({ message: "Category created", category: newCategory });
  } catch (err) {
    res.status(500).json({ message: "Failed to create category", error: err.message });
  }
};
