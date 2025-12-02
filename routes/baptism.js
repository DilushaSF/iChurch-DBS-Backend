const express = require("express");
const {
  addBaptism,
  getBaptisms,
  getBaptism,
  deleteBaptism,
  editBaptism,
} = require("../controllers/baptismController");

const router = express.Router();

//Get all baptism records
router.get("/", getBaptisms);

// Adding a new baptism record
router.post("/", addBaptism);

// Get a single baptism record
router.get("/:id", getBaptism);

// Edit a single baptism record
router.patch("/:id", editBaptism);

// Delete a single baptism record
router.delete("/:id", deleteBaptism);

module.exports = router;
