const mongooese = require("mongoose");

const Schema = mongooese.Schema;

const baptismSchema = new Schema(
  {
    childName: {type: String, required: true},
    dateOfBirth: {type: Date, required: true},
    placeOfBirth: {type: String, required: true},
    dateOfBaptism: {type: Date, required: true},
    nameOfMother: {type: String, required: true},
    nameOfFather: {type: String, required: true},
    nameOfGodFather: {type: String, required: true},
    nameOfGodMother: {type: String, required: true},
    currentAddress: {type: String, required: true},
    contactNumber: {type: String, required: true},
    timeOfBaptism: {type: String, required: true},
    areParentsMarried: {type: Boolean, required: false},
    isFatherCatholic: {type: Boolean, required: false},
  },
  {timestamps: true}
);

module.exports = mongooese.model("Baptism", baptismSchema);
