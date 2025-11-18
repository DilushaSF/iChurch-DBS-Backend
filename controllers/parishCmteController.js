const ParishCommittee = require("../models/parishCmteModel");
const mongoose = require("mongoose");

// get all committee records
const getCommitteeMembers = async (req, res) => {
  try {
    const committeeMembers = await ParishCommittee.find({}).sort({
      createdAt: -1,
    });
    res.status(200).json(committeeMembers);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};

// get a single parish committee member by ID
const getCommitteeMember = async (req, res) => {
  const {id} = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: "No such parish committee member ID"});
  }
  const committeeMember = await ParishCommittee.findById(id);
  if (!committeeMember) {
    return res.status(404).json({error: "Parish committee member not found"});
  }

  res.status(200).json(committeeMember);
};

// Adding a new committee member
const addCommitteeMember = async (req, res) => {
  const {
    firstName,
    lastName,
    address,
    phoneNumber,
    unitNumber,
    zonalNumber,
    position,
    joinedDate,
    representingCommittee,
  } = req.body;
  try {
    const newCommitteeMember = await ParishCommittee.create({
      firstName,
      lastName,
      address,
      phoneNumber,
      zonalNumber,
      unitNumber,
      position,
      joinedDate,
      representingCommittee,
    });
    res.status(200).json(newCommitteeMember);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};

//delete a parish committee member
const deleteCommitteeMember = async (req, res) => {
  const {id} = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: "No such parish committee member ID"});
  }
  const committeeMember = await ParishCommittee.findOneAndDelete({_id: id});
  if (!committeeMember) {
    return res.status(404).json({error: "Parish committee member not found"});
  }

  res.status(200).json(committeeMember);
};

//edit a committee member
const editCommitteeMember = async (req, res) => {
  const {id} = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: "No such committee member ID"});
  }

  const committeeMember = await ParishCommittee.findOneAndUpdate(
    {_id: id},
    {
      ...req.body,
    }
  );

  if (!committeeMember) {
    return res.status(400).json({error: "Committee member not found"});
  }

  res.status(200).json(committeeMember);
};

module.exports = {
  getCommitteeMembers,
  getCommitteeMember,
  addCommitteeMember,
  deleteCommitteeMember,
  editCommitteeMember,
};
