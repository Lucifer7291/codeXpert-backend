import Roadmap from "../models/roadmapModel.js";

export const addRoadmap = async (req, res) => {
  try {
    const roadmap = await Roadmap.create(req.body);
    res.status(201).json(roadmap);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getAllRoadmaps = async (req, res) => {
  try {
    const roadmaps = await Roadmap.find();
    res.json(roadmaps);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateRoadmap = async (req, res) => {
  try {
    const updated = await Roadmap.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteRoadmap = async (req, res) => {
  try {
    await Roadmap.findByIdAndDelete(req.params.id);
    res.json({ message: "Roadmap deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
