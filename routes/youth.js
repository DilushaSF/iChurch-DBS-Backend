const express = require("express");
const {
  addYouthMember,
  getYouthMembers,
  getYouthMember,
  deleteYouthMember,
  editYouthMember,
} = require("../controllers/youthController");

const router = express.Router();

//Get all youth members
router.get("/", getYouthMembers);

// Adding a new youth member
router.post("/", addYouthMember);

// Get a single youth member
router.get("/:id", getYouthMember);

// Edit a single youth member
router.patch("/:id", editYouthMember);

// Delete a member
router.delete("/:id", deleteYouthMember);

module.exports = router;
