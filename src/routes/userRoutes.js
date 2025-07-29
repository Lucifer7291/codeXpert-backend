// Get all notifications
router.get("/:id/notifications", getUserNotifications);

// Mark all as read
router.put("/:id/notifications/read", markAllNotificationsRead);
