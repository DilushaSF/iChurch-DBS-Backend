const express = require("express");
const {
  addChoiristor,
  getChoiristors,
  getChoiristor,
  deleteChoiristor,
  editChoiristor,
} = require("../controllers/choirController");

const router = express.Router();

//Get all choiristors
router.get("/", getChoiristors);

// Adding a new choiristor
router.post("/", addChoiristor);

// Get a single choiristor
router.get("/:id", getChoiristor);

// Edit a single choiristor
router.patch("/:id", editChoiristor);

// Delete a choiristor
router.delete("/:id", deleteChoiristor);

module.exports = router;
