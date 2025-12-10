const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const parishCmteSchema = new Schema(
  {
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    address: {type: String, required: true},
    phoneNumber: {type: String, required: false},
    zonalNumber: {
      type: String,
      required: true,
      enum: ["1", "2", "3", "4", "5", "6", "7", "8"],
      default: "",
    },
    unitNumber: {
      type: String,
      required: true,
      enum: ["1", "2", "3", "4", "5", "6"],
      default: "",
    },
    position: {type: String, required: false},
    joinedDate: {type: Date, required: true},
    representingCommittee: {type: String, required: true},
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {timestamps: true}
);

module.exports = mongoose.model("parishCmte", parishCmteSchema);
