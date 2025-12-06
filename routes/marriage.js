const express = require("express");
const authMiddleware = require("../middleware/auth");

const {
  addMarriage,
  getMarriages,
  getMarriage,
  deleteMarriage,
  editMarriage,
} = require("../controllers/marriageController");

const router = express.Router();

//Get all marriage records
router.get("/", authMiddleware, getMarriages);

// Adding a new marriage record
router.post("/", authMiddleware, addMarriage);

// Get a single marriage record
router.get("/:id", authMiddleware, getMarriage);

// Edit a single marriage record
router.patch("/:id", authMiddleware, editMarriage);

// Delete a single marriage record
router.delete("/:id", authMiddleware, deleteMarriage);

module.exports = router;
