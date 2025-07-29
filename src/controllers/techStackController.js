import TechStack from "../models/techStackModel.js";

// GET all tech stacks
export const getAllTechStacks = async (req, res) => {
  try {
    const techStacks = await TechStack.find();
    res.status(200).json(techStacks);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch tech stacks" });
  }
};

// POST a new tech stack
export const addTechStack = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) return res.status(400).json({ error: "Name is required" });

    const newTech = new TechStack({ name });
    await newTech.save();
    res.status(201).json(newTech);
  } catch (error) {
    res.status(500).json({ error: "Failed to add tech stack" });
  }
};

// DELETE a tech stack
export const deleteTechStack = async (req, res) => {
  try {
    const { id } = req.params;
    await TechStack.findByIdAndDelete(id);
    res.status(200).json({ message: "Tech stack deleted" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete tech stack" });
  }
};
