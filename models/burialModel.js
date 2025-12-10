const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const burialSchema = new Schema(
  {
    nameOfDeceased: {type: String, required: true},
    dateOfDeath: {type: Date, required: true},
    dateOfBirth: {type: Date, required: true},
    dateWillBurry: {type: Date, required: true},
    baptized: {type: Boolean, required: true},
    caouseOfDeath: {type: String, required: true},
    custodian: {type: String, required: false},
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {timestamps: true}
);

module.exports = mongoose.model("Burial", burialSchema);
