const express = require("express");

const {
  addCommitteeMember,
  getCommitteeMembers,
  getCommitteeMember,
  deleteCommitteeMember,
  editCommitteeMember,
} = require("../controllers/parishCmteController");

const router = express.Router();

//Get all parish committee members
router.get("/", getCommitteeMembers);

// Adding a new committee member
router.post("/", addCommitteeMember);

// Get a single committee member
router.get("/:id", getCommitteeMember);

// Edit a single committee member
router.patch("/:id", editCommitteeMember);

// Delete a single committee member
router.delete("/:id", deleteCommitteeMember);

module.exports = router;
