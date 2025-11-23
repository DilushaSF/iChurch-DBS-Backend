const express = require("express");
const {
  createMemberRegistration,
  getMemberRegistrations,
  getMemberRegistration,
  deleteMemberRegistration,
  editMemberRegistration,
} = require("../controllers/memberRegistrationController");

const router = express.Router();

// get all member
router.get("/", getMemberRegistrations);

// get a single member
router.get("/:id", getMemberRegistration);

// add a new member
router.post("/", createMemberRegistration);

// delete a member
router.delete("/:id", deleteMemberRegistration);

// edit a member
router.patch("/:id", editMemberRegistration);

module.exports = router;
