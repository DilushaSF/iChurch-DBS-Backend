const express = require("express");
const authMiddleware = require("../middleware/auth");
const {
  addBaptism,
  getBaptisms,
  getBaptism,
  deleteBaptism,
  editBaptism,
} = require("../controllers/baptismController");

const router = express.Router();

//Get all baptism records
router.get("/", authMiddleware, getBaptisms);

// Adding a new baptism record
router.post("/", authMiddleware, addBaptism);

// Get a single baptism record
router.get("/:id", authMiddleware, getBaptism);

// Edit a single baptism record
router.patch("/:id", authMiddleware, editBaptism);

// Delete a single baptism record
router.delete("/:id", authMiddleware, deleteBaptism);

module.exports = router;
