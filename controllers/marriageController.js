const Marriage = require("../models/marriageModel");
const mongoose = require("mongoose");

// get all marriage records
const getMarriages = async (req, res) => {
  try {
    const marriages = await Marriage.find({}).sort({createdAt: -1});
    res.status(200).json(marriages);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};

// get a single marriage record by ID
const getMarriage = async (req, res) => {
  const {id} = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: "No such marriage record ID"});
  }
  const marriage = await Marriage.findById(id);
  if (!marriage) {
    return res.status(404).json({error: "Marriage record not found"});
  }

  res.status(200).json(marriage);
};

// adding a new marriage record

const addMarriage = async (req, res) => {
  const {
    nameOfBride,
    nameOfGroom,
    dateOfMarriage,
    timeOfMass,
    shortenedCoupleName,
    massType,
    needChurchChoir,
    useChurchDecos,
  } = req.body;
  try {
    const newMarriage = await Marriage.create({
      nameOfBride,
      nameOfGroom,
      dateOfMarriage,
      timeOfMass,
      shortenedCoupleName,
      massType,
      needChurchChoir,
      useChurchDecos,
    });
    res.status(200).json(newMarriage);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};

//delete a marriage record
const deleteMarriage = async (req, res) => {
  const {id} = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: "No such marriage record ID"});
  }
  const marriage = await Marriage.findOneAndDelete({_id: id});
  if (!marriage) {
    return res.status(404).json({error: "Marriage record not found"});
  }

  res.status(200).json(marriage);
};

//edit a marriage record
const editMarriage = async (req, res) => {
  const {id} = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: "No such marriage record ID"});
  }

  const marriage = await Marriage.findOneAndUpdate({_id: id}, {...req.body});

  if (!marriage) {
    return res.status(400).json({error: "Marriage record not found"});
  }
  res.status(200).json(marriage);
};

module.exports = {
  getMarriages,
  getMarriage,
  addMarriage,
  editMarriage,
  deleteMarriage,
};
