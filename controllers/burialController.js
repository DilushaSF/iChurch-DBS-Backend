const Burial = require("../models/burialModel");
const mongoose = require("mongoose");

// get all burial records
const getBurials = async (req, res) => {
  try {
    const burials = await Burial.find({
      createdBy: req.user._id,
    }).sort({createdAt: -1});
    res.status(200).json(burials);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};

// get a single burial record by ID
const getBurial = async (req, res) => {
  const {id} = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: "No such burial record ID"});
  }
  const burial = await Burial.findOne({
    _id: id,
    createdBy: req.user._id,
  });
  if (!burial) {
    return res.status(404).json({error: "Burial record not found"});
  }

  res.status(200).json(burial);
};

// Adding a new burial record
const createBurial = async (req, res) => {
  const {
    nameOfDeceased,
    dateOfDeath,
    dateOfBirth,
    dateWillBurry,
    baptized,
    caouseOfDeath,
    custodian,
  } = req.body;
  try {
    const createdBy = req.user._id;

    if (!createdBy) {
      return res.status(401).json({error: "User not authenticated"});
    }
    const newBurial = await Burial.create({
      nameOfDeceased,
      dateOfDeath,
      dateOfBirth,
      dateWillBurry,
      baptized,
      caouseOfDeath,
      custodian,
      createdBy,
    });
    res.status(200).json(newBurial);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};

//delete a burial record
const deleteBurial = async (req, res) => {
  const {id} = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: "No such burial record ID"});
  }
  const burial = await Burial.findOneAndDelete({
    _id: id,
    createdBy: req.user._id,
  });
  if (!burial) {
    return res.status(404).json({error: "Burial record not found"});
  }

  res.status(200).json(burial);
};

//edit a burial record
const editBurial = async (req, res) => {
  const {id} = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: "No such burial record ID"});
  }

  const burial = await Burial.findOneAndUpdate(
    {_id: id, createdBy: req.user._id},
    {
      ...req.body,
    },
    {new: true}
  );

  if (!burial) {
    return res.status(400).json({error: "Burial record not found"});
  }

  res.status(200).json(burial);
};

module.exports = {
  createBurial,
  getBurials,
  getBurial,
  deleteBurial,
  editBurial,
};
