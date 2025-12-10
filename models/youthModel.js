const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const youthSchema = new Schema(
  {
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    dateOfBirth: {type: Date, required: true},
    joinedDate: {type: Date, required: true},
    address: {type: String, required: true},
    contactNumber: {type: String, required: true},
    position: {type: String, required: false},
    isActiveMember: {type: Boolean, required: false},
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {timestamps: true}
);

module.exports = mongoose.model("Youth", youthSchema);
