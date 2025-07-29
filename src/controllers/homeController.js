import Home from "../models/homeModel.js";

// @desc    Get Home Page Data
// @route   GET /api/home
// @access  Public
export const getHomeData = async (req, res) => {
  try {
    let home = await Home.findOne();

    // If no data exists, create default one
    if (!home) {
      home = await Home.create({
        heading: "Welcome to CodeXpert",
        subheading: "Choose from a wide range of programming courses...",
        ctaText: "Get Started",
        ctaLink: "/join",
        backgroundImage: "",
      });
    }

    // Default stats (you can later add dynamic ones from DB)
    const stats = {
      courses: "50+",
      students: "10K+",
      rating: "5.0",
    };

    res.status(200).json({
      title: home.heading,
      description: home.subheading,
      ctaText: home.ctaText,
      ctaLink: home.ctaLink,
      backgroundImage: home.backgroundImage,
      stats,
    });
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch home data", error: err.message });
  }
};
