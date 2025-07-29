// src/controllers/queryController.js
import UserQuery from "../models/queryModel.js";

// Submit a query
export const submitQuery = async (req, res) => {
  try {
    const query = await UserQuery.create(req.body);
    res.status(201).json(query);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all queries
export const getAllQueries = async (req, res) => {
  try {
    const queries = await UserQuery.find().sort({ createdAt: -1 });
    res.json(queries);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete a query
export const deleteQuery = async (req, res) => {
  try {
    await UserQuery.findByIdAndDelete(req.params.id);
    res.json({ message: "Query deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
