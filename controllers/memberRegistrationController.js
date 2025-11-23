const MemberRegistration = require("../models/memberRegistrationModel");
const mongoose = require("mongoose");

// get all member registration records
const getMemberRegistrations = async (req, res) => {
  try {
    const memberRegistrations = await MemberRegistration.find({}).sort({
      createdAt: -1,
    });
    res.status(200).json(memberRegistrations);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};

// get a single member registration
const getMemberRegistration = async (req, res) => {
  const {id} = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({error: "No such member registration record ID"});
  }
  const memberRegistration = await MemberRegistration.findById(id);
  if (!memberRegistration) {
    return res
      .status(404)
      .json({error: "Member registration record not found"});
  }

  res.status(200).json(memberRegistration);
};

// Adding a new member registration record
const createMemberRegistration = async (req, res) => {
  const {
    church,
    nameOfFather,
    occupationOfFather,
    dateOfBirthFather,
    baptisedDateOfFather,
    baptisedChurch,
    nameOfMother,
    occupationOfMother,
    dateOfBirthOfMother,
    baptisedDateOfMother,
    address,
    contactNo,
    marriedDate,
    marriedChurch,
    capableDonationPerMonth,
    children,
  } = req.body;
  try {
    const newMemberRegistration = await MemberRegistration.create({
      church,
      nameOfFather,
      occupationOfFather,
      dateOfBirthFather,
      baptisedDateOfFather,
      baptisedChurch,
      nameOfMother,
      occupationOfMother,
      dateOfBirthOfMother,
      baptisedDateOfMother,
      address,
      contactNo,
      marriedDate,
      marriedChurch,
      capableDonationPerMonth,
      children,
    });
    res.status(200).json(newMemberRegistration);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};

// delete a member registration record
const deleteMemberRegistration = async (req, res) => {
  const {id} = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({error: "No such member registration record ID"});
  }
  const memberRegistration = await MemberRegistration.findOneAndDelete({
    _id: id,
  });
  if (!memberRegistration) {
    return res
      .status(404)
      .json({error: "Member registration record not found"});
  }

  res.status(200).json(memberRegistration);
};

// edit a member registration record
const editMemberRegistration = async (req, res) => {
  const {id} = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({error: "No such member registration record ID"});
  }

  const memberRegistration = await MemberRegistration.findOneAndUpdate(
    {_id: id},
    {...req.body},
    {new: true}
  );

  if (!memberRegistration) {
    return res
      .status(400)
      .json({error: "Member registration record not found"});
  }

  res.status(200).json(memberRegistration);
};

module.exports = {
  createMemberRegistration,
  getMemberRegistrations,
  getMemberRegistration,
  deleteMemberRegistration,
  editMemberRegistration,
};
