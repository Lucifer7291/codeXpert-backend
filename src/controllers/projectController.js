// src/controllers/projectController.js
import { Project } from "../models/projectModel.js";
import slugify from "slugify";

// Create new project
export const createProject = async (req, res) => {
  try {
    let {
      title,
      slug,
      desc,
      techStack = [],
      githubLink = "",
      liveLink = "",
      logo = "",
      videoLink = "",
      preview = "",
      files = [],
    } = req.body;

    if (!title || !desc) {
      return res.status(400).json({ message: "Title and description are required" });
    }

    slug = slug ? slugify(slug, { lower: true, strict: true }) : slugify(title, { lower: true, strict: true });

    const existing = await Project.findOne({ slug });
    if (existing) {
      return res.status(400).json({ message: "Project with this slug already exists" });
    }

    const newProject = new Project({
      title,
      slug,
      desc,
      techStack,
      githubLink,
      liveLink,
      logo,
      videoLink,
      preview,
      files,
    });

    await newProject.save();
    res.status(201).json({ message: "Project created successfully", project: newProject });
  } catch (error) {
    res.status(500).json({ message: "Failed to create project", error: error.message });
  }
};

// Get all projects
export const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.status(200).json({ projects });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch projects", error: error.message });
  }
};

// Get project by slug
export const getProjectBySlug = async (req, res) => {
  try {
    const { slug } = req.params;
    const project = await Project.findOne({ slug });
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }
    res.status(200).json({ project });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch project", error: error.message });
  }
};

// Update project
export const updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = { ...req.body };

    if (updateData.slug) {
      updateData.slug = slugify(updateData.slug, { lower: true, strict: true });

      const slugExists = await Project.findOne({ slug: updateData.slug, _id: { $ne: id } });
      if (slugExists) {
        return res.status(400).json({ message: "Another project with this slug already exists" });
      }
    }

    const updatedProject = await Project.findByIdAndUpdate(id, updateData, { new: true });

    if (!updatedProject) {
      return res.status(404).json({ message: "Project not found" });
    }

    res.status(200).json({ message: "Project updated successfully", project: updatedProject });
  } catch (error) {
    res.status(500).json({ message: "Failed to update project", error: error.message });
  }
};

// Delete project
export const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await Project.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ message: "Project not found" });
    }

    res.status(200).json({ message: "Project deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete project", error: error.message });
  }
};

// ✅ NEW: Get projects with non-empty video link
export const getVideoProjects = async (req, res) => {
  try {
    const projects = await Project.find({ videoLink: { $exists: true, $ne: "" } });
    res.status(200).json(projects); // ✅ Make sure it's an array
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch video projects", error });
  }
};
