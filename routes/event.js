const express = require("express");
const authMiddleware = require("../middleware/auth");
const {
  getAllEvents,
  createEvent,
  getEventById,
  updateEvent,
  deleteEvent,
  getEventsByDateRange,
} = require("../controllers/eventController");

const router = express.Router();

// Get events by date range
router.get("/range", authMiddleware, getEventsByDateRange);

// Get all events
router.get("/", authMiddleware, getAllEvents);

// Create event
router.post("/", authMiddleware, createEvent);

// Get single event
router.get("/:id", authMiddleware, getEventById);

// Update event
router.patch("/:id", authMiddleware, updateEvent);

// Delete event
router.delete("/:id", authMiddleware, deleteEvent);

module.exports = router;
