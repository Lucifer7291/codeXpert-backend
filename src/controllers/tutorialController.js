import Tutorial from "../models/tutorialModel.js";

export const addTutorial = async (req, res) => {
  try {
    const tutorial = await Tutorial.create(req.body);
    res.status(201).json(tutorial);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getAllTutorials = async (req, res) => {
  try {
    const tutorials = await Tutorial.find();
    res.json(tutorials);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateTutorial = async (req, res) => {
  try {
    const updated = await Tutorial.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteTutorial = async (req, res) => {
  try {
    await Tutorial.findByIdAndDelete(req.params.id);
    res.json({ message: "Tutorial deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
