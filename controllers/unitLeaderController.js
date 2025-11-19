const UnitLeader = require("../models/unitLeaderModel");
const mongoose = require("mongoose");

// get all unit leaders
const getUnitLeaders = async (req, res) => {
  try {
    const unitLeaders = await UnitLeader.find({}).sort({createdAt: -1});
    res.status(200).json(unitLeaders);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};

// get a single unit leader by ID
const getUnitLeader = async (req, res) => {
  const {id} = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: "No such unit leader ID"});
  }
  const unitLeader = await UnitLeader.findById(id);
  if (!unitLeader) {
    return res.status(404).json({error: "Unit leader not found"});
  }

  res.status(200).json(unitLeader);
};

// Adding a new unit leader
const addUnitLeader = async (req, res) => {
  const {
    firstName,
    lastName,
    address,
    contactNumber,
    appointedDate,
    zonalNumber,
    unitNumber,
    dateOfBirth,
    zonalLeader,
  } = req.body;
  try {
    const newUnitLeader = await UnitLeader.create({
      firstName,
      lastName,
      address,
      contactNumber,
      appointedDate,
      zonalNumber,
      unitNumber,
      dateOfBirth,
      zonalLeader,
    });
    res.status(200).json(newUnitLeader);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};

//delete a unit leader
const deleteUnitLeader = async (req, res) => {
  const {id} = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: "No such unit leader ID"});
  }
  const unitLeader = await UnitLeader.findOneAndDelete({_id: id});

  if (!unitLeader) {
    return res.status(404).json({error: "Unit leader not found"});
  }

  res.status(200).json(unitLeader);
};

//edit a unit leader
const editUnitLeader = async (req, res) => {
  const {id} = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: "No such unit leader ID"});
  }

  const unitLeader = await UnitLeader.findOneAndUpdate(
    {_id: id},
    {...req.body}
  );

  if (!unitLeader) {
    return res.status(400).json({error: "Unit leader not found"});
  }

  res.status(200).json(unitLeader);
};

module.exports = {
  addUnitLeader,
  getUnitLeaders,
  getUnitLeader,
  deleteUnitLeader,
  editUnitLeader,
};
