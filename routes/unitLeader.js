const express = require("express");
const authMiddleware = require("../middleware/auth");
const {
  addUnitLeader,
  getUnitLeaders,
  getUnitLeader,
  deleteUnitLeader,
  editUnitLeader,
} = require("../controllers/unitLeaderController");

const router = express.Router();

//Get all unit leaders
router.get("/", authMiddleware, getUnitLeaders);

// Adding a new unit leader
router.post("/", authMiddleware, addUnitLeader);

// Get a single unit leader
router.get("/:id", authMiddleware, getUnitLeader);

// Edit a single unit leader
router.patch("/:id", authMiddleware, editUnitLeader);

// Delete a single unit leader
router.delete("/:id", authMiddleware, deleteUnitLeader);

module.exports = router;
