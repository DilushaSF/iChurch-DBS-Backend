const mongooese = require("mongoose");

const Schema = mongooese.Schema;

const burialSchema = new Schema(
  {
    nameOfDeceased: {type: String, required: true},
    dateOfDeath: {type: Date, required: true},
    dateOfBirth: {type: Date, required: true},
    dateWillBurry: {type: Date, required: true},
    baptized: {type: Boolean, required: true},
    caouseOfDeath: {type: String, required: true},
    custodian: {type: String, required: false},
  },
  {timestamps: true}
);

module.exports = mongooese.model("Burial", burialSchema);
