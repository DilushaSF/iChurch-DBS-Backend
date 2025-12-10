const express = require("express");
const authMiddleware = require("../middleware/auth");
const {
  addYouthMember,
  getYouthMembers,
  getYouthMember,
  deleteYouthMember,
  editYouthMember,
} = require("../controllers/youthController");

const router = express.Router();

//Get all youth members
router.get("/", authMiddleware, getYouthMembers);

// Adding a new youth member
router.post("/", authMiddleware, addYouthMember);

// Get a single youth member
router.get("/:id", authMiddleware, getYouthMember);

// Edit a single youth member
router.patch("/:id", authMiddleware, editYouthMember);

// Delete a member
router.delete("/:id", authMiddleware, deleteYouthMember);

module.exports = router;
