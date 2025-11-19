const express = require("express");
const {
  addUnitLeader,
  getUnitLeaders,
  getUnitLeader,
  deleteUnitLeader,
  editUnitLeader,
} = require("../controllers/unitLeaderController");

const router = express.Router();

//Get all unit leaders
router.get("/", getUnitLeaders);

// Adding a new unit leader
router.post("/", addUnitLeader);

// Get a single unit leader
router.get("/:id", getUnitLeader);

// Edit a single unit leader
router.patch("/:id", editUnitLeader);

// Delete a single unit leader
router.delete("/:id", deleteUnitLeader);

module.exports = router;
