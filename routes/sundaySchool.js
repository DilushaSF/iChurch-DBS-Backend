const express = require("express");
const {
  addSundaySchoolTeacher,
  getSundaySchoolTeachers,
  getSundaySchoolTeacher,
  deleteSundaySchoolTeacher,
  editSundaySchoolTeacher,
} = require("../controllers/sundaySchoolController");

const router = express.Router();

//Get all sunday school teachers
router.get("/", getSundaySchoolTeachers);

// Adding a new sunday school teacher
router.post("/", addSundaySchoolTeacher);

// Get a single sunday school teacher
router.get("/:id", getSundaySchoolTeacher);

// Edit a single sunday school teacher
router.patch("/:id", editSundaySchoolTeacher);

// Delete a sunday school teacher
router.delete("/:id", deleteSundaySchoolTeacher);

module.exports = router;
