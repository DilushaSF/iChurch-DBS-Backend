const Youth = require("../models/youthModel");
const mongoose = require("mongoose");

// get all youth members
const getYouthMembers = async (req, res) => {
  try {
    const youthMembers = await Youth.find({}).sort({createdAt: -1});
    res.status(200).json(youthMembers);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};

// get a single member
const getYouthMember = async (req, res) => {
  const {id} = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: "No such youth member ID"});
  }
  const youthMember = await Youth.findById(id);
  if (!youthMember) {
    return res.status(404).json({error: "Youth member not found"});
  }

  res.status(200).json(youthMember);
};

// Adding a new youth member
const addYouthMember = async (req, res) => {
  const {
    firstName,
    lastName,
    dateOfBirth,
    joinedDate,
    address,
    contactNumber,
    position,
    isActiveMember,
  } = req.body;
  try {
    const newYouthMember = await Youth.create({
      firstName,
      lastName,
      dateOfBirth,
      joinedDate,
      address,
      contactNumber,
      position,
      isActiveMember,
    });
    res.status(200).json(newYouthMember);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};

//delete a youth member
const deleteYouthMember = async (req, res) => {
  const {id} = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: "No such youth member ID"});
  }
  const youthMember = await Youth.findOneAndDelete({_id: id});
  if (!youthMember) {
    return res.status(404).json({error: "Youth member not found"});
  }

  res.status(200).json(youthMember);
};

//edit a youth member
const editYouthMember = async (req, res) => {
  const {id} = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: "No such youth member ID"});
  }

  const youthMember = await Youth.findOneAndUpdate({_id: id}, {...req.body});

  if (!youthMember) {
    return res.status(400).json({error: "Youth member not found"});
  }

  res.status(200).json(youthMember);
};

module.exports = {
  getYouthMembers,
  getYouthMember,
  addYouthMember,
  deleteYouthMember,
  editYouthMember,
};
