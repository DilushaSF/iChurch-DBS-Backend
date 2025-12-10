const express = require("express");
const authMiddleware = require("../middleware/auth");
const {
  addChoiristor,
  getChoiristors,
  getChoiristor,
  deleteChoiristor,
  editChoiristor,
} = require("../controllers/choirController");

const router = express.Router();

//Get all choiristors
router.get("/", authMiddleware, getChoiristors);

// Adding a new choiristor
router.post("/", authMiddleware, addChoiristor);

// Get a single choiristor
router.get("/:id", authMiddleware, getChoiristor);

// Edit a single choiristor
router.patch("/:id", authMiddleware, editChoiristor);

// Delete a choiristor
router.delete("/:id", authMiddleware, deleteChoiristor);

module.exports = router;
