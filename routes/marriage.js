const express = require("express");

const {
  addMarriage,
  getMarriages,
  getMarriage,
  deleteMarriage,
  editMarriage,
} = require("../controllers/marriageController");

const router = express.Router();

//Get all marriage records
router.get("/", getMarriages);

// Adding a new marriage record
router.post("/", addMarriage);

// Get a single marriage record
router.get("/:id", getMarriage);

// Edit a single marriage record
router.patch("/:id", editMarriage);

// Delete a single marriage record
router.delete("/:id", deleteMarriage);

module.exports = router;
