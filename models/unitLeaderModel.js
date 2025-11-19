const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const unitLeaderSchema = new Schema(
  {
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    dateOfBirth: {type: Date, required: false},
    address: {type: String, required: true},
    contactNumber: {type: String, required: true},
    appointedDate: {type: String, required: false},
    zonalNumber: {
      type: String,
      required: true,
      enum: ["1", "2", "3", "4", "5", "6", "7", "8"],
      default: "",
    },
    unitNumber: {type: String, required: true},
    zonalLeader: {type: String, required: false},
  },
  {timestamps: true}
);

module.exports = mongoose.model("UnitLeader", unitLeaderSchema);
