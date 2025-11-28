const Event = require("../models/eventModel");
const mongoose = require("mongoose");

// Get All Events
const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find({}).sort({startDate: 1});
    res.status(200).json(events);
  } catch (error) {
    console.error("Error fetching events:", error);
    res.status(500).json({error: "Failed to fetch events"});
  }
};

// Add Event
const createEvent = async (req, res) => {
  const {
    title,
    description,
    startDate,
    endDate,
    location,
    category,
    color,
    recurring,
    recurrence,
    createdBy,
    allDay,
    reminder,
    reminderTime,
  } = req.body;

  try {
    const newEvent = await Event.create({
      title,
      description,
      startDate: new Date(startDate),
      endDate: new Date(endDate),
      location,
      category,
      color,
      recurring,
      recurrence,
      createdBy,
      allDay,
      reminder,
      reminderTime,
    });

    res.status(201).json(newEvent);
  } catch (error) {
    console.error("Error creating event:", error);
    res.status(400).json({error: error.message});
  }
};

// Get Events by Date Range (Calendar View)
const getEventsByDateRange = async (req, res) => {
  try {
    const {startDate, endDate} = req.query;

    if (!startDate || !endDate) {
      return res
        .status(400)
        .json({error: "Start date and end date are required"});
    }

    const start = new Date(startDate);
    const end = new Date(endDate);

    // Query with Mongoose
    const events = await Event.find({
      startDate: {$gte: start, $lte: end},
    }).sort({startDate: 1});

    res.status(200).json(events);
  } catch (error) {
    console.error("Error fetching events by date range:", error);
    res.status(500).json({error: "Failed to fetch events"});
  }
};

// Get Event by ID
const getEventById = async (req, res) => {
  try {
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({error: "No event ID"});
    }

    const event = await Event.findById(id);

    if (!event) {
      return res.status(404).json({error: "Event not found"});
    }
    res.status(200).json(event);
  } catch (error) {
    console.error("Error fetching event:", error);
    res.status(500).json({error: "Failed to fetch event"});
  }
};

// Update Event
const updateEvent = async (req, res) => {
  try {
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({error: "No such event record ID"});
    }

    const updatedEvent = await Event.findByIdAndUpdate(
      {_id: id},
      {
        ...req.body,
      },
      {new: true}
    );

    if (!updatedEvent) {
      return res.status(400).json({error: "Event not found"});
    }

    res.status(200).json(updatedEvent);
  } catch (error) {
    console.error("Error updating event:", error);
    res.status(500).json({error: "Failed to update event"});
  }
};

// Delete Event
const deleteEvent = async (req, res) => {
  try {
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({error: "No such event ID"});
    }
    const deletedEvent = await Event.findByIdAndDelete(id);

    if (!deletedEvent) {
      return res.status(404).json({error: "Event not found"});
    }
    res.status(200).json({message: "Event deleted successfully"});
  } catch (error) {
    console.error("Error deleting event:", error);
    res.status(500).json({error: "Failed to delete event"});
  }
};

module.exports = {
  getAllEvents,
  createEvent,
  getEventsByDateRange,
  getEventById,
  updateEvent,
  deleteEvent,
};
