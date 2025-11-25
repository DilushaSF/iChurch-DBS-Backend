const express = require("express");
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
router.get("/range", getEventsByDateRange);

// Get all events
router.get("/", getAllEvents);

// Create event
router.post("/", createEvent);

// Get single event
router.get("/:id", getEventById);

// Update event
router.patch("/:id", updateEvent);

// Delete event
router.delete("/:id", deleteEvent);

module.exports = router;
