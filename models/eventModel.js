const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const eventSchema = new Schema(
  {
    title: {type: String, required: true},
    description: {type: String, required: false},
    startDate: {type: Date, required: true},
    endDate: {type: Date, required: true},
    allDay: {type: Boolean, required: false, default: false},
    location: {type: String, required: false},
    category: {type: String, required: false},
    color: {type: String, required: false},
    recurring: {type: Boolean, required: false, default: false},
    recurrence: {type: String, required: false},
    createdBy: {type: String, required: false},
    reminder: {type: Boolean, required: false, default: false},
    reminderTime: {type: Date, required: false},
  },
  {
    timestamps: true,
    collection: "events",
  }
);

module.exports = mongoose.model("Event", eventSchema);
