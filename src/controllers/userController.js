// Get user notifications
export const getUserNotifications = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user.notifications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Mark all as read
export const markAllNotificationsRead = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    user.notifications.forEach((n) => (n.read = true));
    await user.save();
    res.json({ message: "Notifications marked as read" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
