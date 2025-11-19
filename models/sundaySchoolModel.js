const mongooese = require("mongoose");

const Schema = mongooese.Schema;

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
  },
  {timestamps: true}
);

module.exports = mongooese.model("SundaySchool", sundaySchoolSchema);
