const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const childSchema = new Schema(
  {
    nameOfChild: {type: String, required: true},
    dateOfBirthChild: {type: Date, required: true},
    baptisedDateOfChild: {type: Date, required: false},
    baptisedChurchOfChild: {type: String, required: false},
  },
  {_id: true}
);

const memberRegistrationSchema = new Schema(
  {
    church: {type: String, required: true},

    nameOfFather: {type: String, required: true},
    occupationOfFather: {type: String, required: false},
    dateOfBirthFather: {type: Date, required: false},
    baptisedDateOfFather: {type: Date, required: false},
    baptisedChurchOfFather: {type: String, required: false},

    nameOfMother: {type: String, required: true},
    occupationOfMother: {type: String, required: false},
    dateOfBirthOfMother: {type: Date, required: false},
    baptisedDateOfMother: {type: Date, required: false},
    baptisedChurchOfMother: {type: String, required: false},

    address: {type: String, required: true},
    contactNo: {type: String, required: true},

    marriedDate: {type: Date, required: false},
    marriedChurch: {type: String, required: false},

    capableDonationPerMonth: {type: Number, required: false},

    children: [childSchema],
  },
  {timestamps: true}
);

module.exports = mongoose.model("MemberRegistration", memberRegistrationSchema);
