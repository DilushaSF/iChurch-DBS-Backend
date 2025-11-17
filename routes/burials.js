const express = require("express");
const {
  createBurial,
  getBurials,
  getBurial,
  deleteBurial,
  editBurial,
} = require("../controllers/burialController");

const router = express.Router();

//Get all burial records
router.get("/", getBurials);

// Adding a new burial record
router.post("/", createBurial);

// Get a single burial record
router.get("/:id", getBurial);

// Edit a single burial record
router.patch("/:id", editBurial);

// Delete a single burial record
router.delete("/:id", deleteBurial);

module.exports = router;
