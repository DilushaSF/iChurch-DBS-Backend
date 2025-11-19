const SundaySchool = require("../models/sundaySchoolModel");
const mongoose = require("mongoose");

// get all suunday school teachers
const getSundaySchoolTeachers = async (req, res) => {
  try {
    const sundaySchoolTeachers = await SundaySchool.find({}).sort({
      createdAt: -1,
    });
    res.status(200).json(sundaySchoolTeachers);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};

// get a single sunday school teacher by ID
const getSundaySchoolTeacher = async (req, res) => {
  const {id} = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: "No such sunday school teacher ID"});
  }
  const sundaySchoolTeacher = await SundaySchool.findById(id);
  if (!sundaySchoolTeacher) {
    return res.status(404).json({error: "Sunday school teacher not found"});
  }

  res.status(200).json(sundaySchoolTeacher);
};

// Adding a new teacher
const addSundaySchoolTeacher = async (req, res) => {
  const {
    firstName,
    lastName,
    dateOfBirth,
    appointedDate,
    address,
    contactNumber,
    className,
    remarks,
    isActive,
  } = req.body;
  try {
    const newSundaySchoolTeacher = await SundaySchool.create({
      firstName,
      lastName,
      dateOfBirth,
      appointedDate,
      address,
      contactNumber,
      className,
      remarks,
      isActive,
    });
    res.status(200).json(newSundaySchoolTeacher);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};

//delete a sunday school teacher
const deleteSundaySchoolTeacher = async (req, res) => {
  const {id} = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: "No such sunday school teacher ID"});
  }
  const sundaySchoolTeacher = await SundaySchool.findOneAndDelete({_id: id});
  if (!sundaySchoolTeacher) {
    return res.status(404).json({error: "Sunday school teacher not found"});
  }

  res.status(200).json(sundaySchoolTeacher);
};

//edit a sunday school teacher
const editSundaySchoolTeacher = async (req, res) => {
  const {id} = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: "No such sunday school teacher ID"});
  }

  const sundaySchoolTeacher = await SundaySchool.findOneAndUpdate(
    {_id: id},
    {...req.body}
  );

  if (!sundaySchoolTeacher) {
    return res.status(400).json({error: "Sunday school teacher not found"});
  }

  res.status(200).json(sundaySchoolTeacher);
};

module.exports = {
  getSundaySchoolTeachers,
  getSundaySchoolTeacher,
  addSundaySchoolTeacher,
  deleteSundaySchoolTeacher,
  editSundaySchoolTeacher,
};
