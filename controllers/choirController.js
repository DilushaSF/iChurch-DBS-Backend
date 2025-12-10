const Choir = require("../models/choirModel");
const mongoose = require("mongoose");

// get all choiristor's records
const getChoiristors = async (req, res) => {
  try {
    const choiristors = await Choir.find({createdBy: req.user._id}).sort({
      createdAt: -1,
    });
    res.status(200).json(choiristors);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};

// get a single choiristor's record by ID
const getChoiristor = async (req, res) => {
  const {id} = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: "No such choiristor record ID"});
  }
  const choiristor = await Choir.findOne({
    _id: id,
    createdBy: req.user._id,
  });
  if (!choiristor) {
    return res.status(404).json({error: "Choiristor record not found"});
  }

  res.status(200).json(choiristor);
};

// Adding a new choiristor
const addChoiristor = async (req, res) => {
  const {
    firstName,
    lastName,
    dateOfBirth,
    address,
    contactNumber,
    joinedDate,
    voicePart,
    isActiveMember,
    instrumentsPlayed,
    choirType,
  } = req.body;
  try {
    const createdBy = req.user._id;

    if (!createdBy) {
      return res.status(401).json({error: "User not authenticated"});
    }

    const newChoiristor = await Choir.create({
      firstName,
      lastName,
      dateOfBirth,
      address,
      contactNumber,
      joinedDate,
      voicePart,
      isActiveMember,
      instrumentsPlayed,
      choirType,
      createdBy,
    });
    res.status(200).json(newChoiristor);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};

//delete a choiristor record
const deleteChoiristor = async (req, res) => {
  const {id} = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: "No such choiristor record ID"});
  }
  const choiristor = await Choir.findOneAndDelete({
    _id: id,
    createdBy: req.user._id,
  });
  if (!choiristor) {
    return res.status(404).json({error: "Choiristor record not found"});
  }

  res.status(200).json(choiristor);
};

//update a choiristor record
const editChoiristor = async (req, res) => {
  const {id} = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: "No such choiristor record ID"});
  }

  const choiristor = await Choir.findOneAndUpdate(
    {_id: id, createdBy: req.user._id},
    {...req.body}
  );

  if (!choiristor) {
    return res.status(400).json({error: "Choiristor record not found"});
  }

  res.status(200).json(choiristor);
};

module.exports = {
  getChoiristors,
  getChoiristor,
  addChoiristor,
  deleteChoiristor,
  editChoiristor,
};
