const ZonalLeader = require("../models/zonalLeaderModel");
const mongoose = require("mongoose");

// get all zonal leaders
const getZonalLeaders = async (req, res) => {
  try {
    const zonalLeaders = await ZonalLeader.find({createdBy: req.user._id}).sort(
      {createdAt: -1}
    );
    res.status(200).json(zonalLeaders);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};

// get a single zonal leader by ID
const getZonalLeader = async (req, res) => {
  const {id} = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: "No such zonal leader ID"});
  }
  const zonalLeader = await ZonalLeader.findOne({
    _id: id,
    createdBy: req.user._id,
  });
  if (!zonalLeader) {
    return res.status(404).json({error: "Zonal leader not found"});
  }

  res.status(200).json(zonalLeader);
};

// Adding a new zonal leader
const addZonalLeader = async (req, res) => {
  const {
    firstName,
    lastName,
    address,
    contactNumber,
    appointedDate,
    zoneNumber,
    dateOfBirth,
  } = req.body;
  try {
    const createdBy = req.user._id;

    if (!createdBy) {
      return res.status(401).json({error: "User not authenticated"});
    }

    const newZonalLeader = await ZonalLeader.create({
      firstName,
      lastName,
      address,
      contactNumber,
      appointedDate,
      zoneNumber,
      dateOfBirth,
      createdBy,
    });
    res.status(200).json(newZonalLeader);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};

//delete a zonal leader
const deleteZonalLeader = async (req, res) => {
  const {id} = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: "No such zonal leader ID"});
  }
  const zonalLeader = await ZonalLeader.findOneAndDelete({
    _id: id,
    createdBy: req.user._id,
  });

  if (!zonalLeader) {
    return res.status(404).json({error: "Zonal leader not found"});
  }

  res.status(200).json(zonalLeader);
};

//edit a zonal leader
const editZonalLeader = async (req, res) => {
  const {id} = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: "No such zonal leader ID"});
  }

  const zonalLeader = await ZonalLeader.findOneAndUpdate(
    {_id: id, createdBy: req.user._id},
    {...req.body}
  );

  if (!zonalLeader) {
    return res.status(400).json({error: "Zonal leader not found"});
  }

  res.status(200).json(zonalLeader);
};

module.exports = {
  addZonalLeader,
  getZonalLeaders,
  getZonalLeader,
  deleteZonalLeader,
  editZonalLeader,
};
