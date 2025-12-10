const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const choirSchema = new Schema(
  {
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    dateOfBirth: {type: Date, required: false},
    address: {type: String, required: true},
    contactNumber: {type: String, required: true},
    joinedDate: {type: Date, required: false},
    voicePart: {type: String, required: true}, // e.g., Soprano, Alto, Tenor, Bass
    isActiveMember: {type: Boolean, required: true},
    instrumentsPlayed: {type: [String], required: false},
    choirType: {
      type: String,
      required: true,
      enum: ["Senior", "Junior", "English"],
      default: "",
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {timestamps: true}
);

module.exports = mongoose.model("Choir", choirSchema);
