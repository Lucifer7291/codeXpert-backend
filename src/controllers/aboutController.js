// GET /api/about
export const getAboutInfo = async (req, res) => {
  try {
    const data = {
      title: "About CodeXpert",
      description:
        "CodeXpert is your gateway to mastering coding and ethical hacking. We’re committed to making learning practical, affordable, and accessible to all learners globally.",
      updatedOn: "10 July 2025",
      stats: [
        { icon: "Rocket", value: "20+", label: "Premium Courses" },
        { icon: "Users", value: "5000+", label: "Active Learners" },
        { icon: "Star", value: "4.9/5", label: "Avg Rating" },
      ],
      features: [
        {
          title: "Project-Based Learning",
          desc: "Build real-world projects while learning core concepts.",
        },
        {
          title: "Top-Rated Content",
          desc: "Curated & updated content that students love.",
        },
        {
          title: "Community Support",
          desc: "Ask questions and get help anytime from our support.",
        },
        {
          title: "Affordable Learning",
          desc: "Low-cost, high-quality education accessible to all.",
        },
      ],
    };
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};
