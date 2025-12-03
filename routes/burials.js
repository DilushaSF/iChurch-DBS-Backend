const express = require("express");
const authMiddleware = require("../middleware/auth");
const {
  createBurial,
  getBurials,
  getBurial,
  deleteBurial,
  editBurial,
} = require("../controllers/burialController");

const router = express.Router();

//Get all burial records
router.get("/", authMiddleware, getBurials);

// Adding a new burial record
router.post("/", authMiddleware, createBurial);

// Get a single burial record
router.get("/:id", authMiddleware, getBurial);

// Edit a single burial record
router.patch("/:id", authMiddleware, editBurial);

// Delete a single burial record
router.delete("/:id", authMiddleware, deleteBurial);

module.exports = router;
