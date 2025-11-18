const mongooese = require("mongoose");

const Schema = mongooese.Schema;

const zonalLeaderSchema = new Schema(
  {
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    dateOfBirth: {type: Date, required: false},
    address: {type: String, required: true},
    contactNumber: {type: String, required: true},
    appointedDate: {type: String, required: false},
    zoneNumber: {type: String, required: true},
  },
  {timestamps: true}
);

module.exports = mongooese.model("ZonalLeader", zonalLeaderSchema);
