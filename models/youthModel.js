const mongooese = require("mongoose");

const Schema = mongooese.Schema;

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
  },
  {timestamps: true}
);

module.exports = mongooese.model("Youth", youthSchema);
