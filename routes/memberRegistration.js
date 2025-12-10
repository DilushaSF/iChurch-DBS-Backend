const express = require("express");
const authMiddleware = require("../middleware/auth");
const {
  createMemberRegistration,
  getMemberRegistrations,
  getMemberRegistration,
  deleteMemberRegistration,
  editMemberRegistration,
} = require("../controllers/memberRegistrationController");

const router = express.Router();

// get all member
router.get("/", authMiddleware, getMemberRegistrations);

// get a single member
router.get("/:id", authMiddleware, getMemberRegistration);

// add a new member
router.post("/", authMiddleware, createMemberRegistration);

// delete a member
router.delete("/:id", authMiddleware, deleteMemberRegistration);

// edit a member
router.patch("/:id", authMiddleware, editMemberRegistration);

module.exports = router;
