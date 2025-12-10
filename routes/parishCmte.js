const express = require("express");
const authMiddleware = require("../middleware/auth");
const {
  addCommitteeMember,
  getCommitteeMembers,
  getCommitteeMember,
  deleteCommitteeMember,
  editCommitteeMember,
} = require("../controllers/parishCmteController");

const router = express.Router();

//Get all parish committee members
router.get("/", authMiddleware, getCommitteeMembers);

// Adding a new committee member
router.post("/", authMiddleware, addCommitteeMember);

// Get a single committee member
router.get("/:id", authMiddleware, getCommitteeMember);

// Edit a single committee member
router.patch("/:id", authMiddleware, editCommitteeMember);

// Delete a single committee member
router.delete("/:id", authMiddleware, deleteCommitteeMember);

module.exports = router;
