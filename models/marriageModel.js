const mongooese = require("mongoose");

const Schema = mongooese.Schema;

const marriageSchema = new Schema(
  {
    nameOfBride: {type: String, required: true},
    nameOfGroom: {type: String, required: true},
    dateOfMarriage: {type: Date, required: true},
    timeOfMass: {type: String, required: true},
    shortenedCoupleName: {type: String, required: true},
    massType: {
      type: String,
      required: true,
      enum: ["Full", "Half"],
      default: "",
    },
    needChurchChoir: {
      type: String,
      required: true,
      enum: ["Yes", "No"],
      default: "",
    },
    useChurchDecos: {
      type: String,
      required: true,
      enum: ["Yes", "No"],
      default: "",
    },
  },
  {timestamps: true}
);

module.exports = mongooese.model("Marriage", marriageSchema);
