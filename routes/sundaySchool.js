const express = require("express");
const authMiddleware = require("../middleware/auth");
const {
  addSundaySchoolTeacher,
  getSundaySchoolTeachers,
  getSundaySchoolTeacher,
  deleteSundaySchoolTeacher,
  editSundaySchoolTeacher,
} = require("../controllers/sundaySchoolController");

const router = express.Router();

//Get all sunday school teachers
router.get("/", authMiddleware, getSundaySchoolTeachers);

// Adding a new sunday school teacher
router.post("/", authMiddleware, addSundaySchoolTeacher);

// Get a single sunday school teacher
router.get("/:id", authMiddleware, getSundaySchoolTeacher);

// Edit a single sunday school teacher
router.patch("/:id", authMiddleware, editSundaySchoolTeacher);

// Delete a sunday school teacher
router.delete("/:id", authMiddleware, deleteSundaySchoolTeacher);

module.exports = router;
