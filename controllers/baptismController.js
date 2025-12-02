const Baptism = require("../models/baptismModel");
const mongoose = require("mongoose");

// get all baptism records
const getBaptisms = async (req, res) => {
  try {
    const baptisms = await Baptism.find({}).sort({createdAt: -1});
    res.status(200).json(baptisms);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};

// get a single baptism record by ID
const getBaptism = async (req, res) => {
  const {id} = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: "No such baptism record ID"});
  }
  const baptism = await Baptism.findById(id);
  if (!baptism) {
    return res.status(404).json({error: "Baptism record not found"});
  }

  res.status(200).json(baptism);
};

// Adding a new baptism record
const addBaptism = async (req, res) => {
  const {
    childName,
    dateOfBirth,
    placeOfBirth,
    dateOfBaptism,
    nameOfMother,
    nameOfFather,
    nameOfGodFather,
    nameOfGodMother,
    currentAddress,
    contactNumber,
    timeOfBaptism,
    areParentsMarried,
    isFatherCatholic,
  } = req.body;
  try {
    const newBaptism = await Baptism.create({
      childName,
      dateOfBirth,
      placeOfBirth,
      dateOfBaptism,
      nameOfMother,
      nameOfFather,
      nameOfGodFather,
      nameOfGodMother,
      currentAddress,
      contactNumber,
      timeOfBaptism,
      areParentsMarried,
      isFatherCatholic,
    });
    res.status(200).json(newBaptism);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};

//delete a baptism record
const deleteBaptism = async (req, res) => {
  const {id} = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: "No such baptism record ID"});
  }
  const baptism = await Baptism.findOneAndDelete({_id: id});
  if (!baptism) {
    return res.status(404).json({error: "Baptism record not found"});
  }

  res.status(200).json(baptism);
};

//edit a baptism record
const editBaptism = async (req, res) => {
  const {id} = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: "No such baptism record ID"});
  }

  const baptism = await Baptism.findOneAndUpdate({_id: id}, {...req.body});

  if (!baptism) {
    return res.status(400).json({error: "Baptism record not found"});
  }

  res.status(200).json(baptism);
};

module.exports = {
  addBaptism,
  getBaptisms,
  getBaptism,
  deleteBaptism,
  editBaptism,
};
