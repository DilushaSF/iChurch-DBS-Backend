const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const sundaySchoolSchema = new Schema(
  {
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    dateOfBirth: {type: Date, required: true},
    appointedDate: {type: Date, required: true},
    address: {type: String, required: true},
    contactNumber: {type: String, required: true},
    className: {type: String, required: true},
    remarks: {type: String, required: false},
    isActive: {type: Boolean, required: false, default: true},
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {timestamps: true}
);

module.exports = mongoose.model("SundaySchool", sundaySchoolSchema);
