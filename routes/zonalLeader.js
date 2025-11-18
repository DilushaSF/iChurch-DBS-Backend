const express = require("express");
const {
  addZonalLeader,
  getZonalLeaders,
  getZonalLeader,
  deleteZonalLeader,
  editZonalLeader,
} = require("../controllers/zonalLeaderController");

const router = express.Router();

//Get all zonal leaders
router.get("/", getZonalLeaders);

// Adding a new zonal leader
router.post("/", addZonalLeader);

// Get a single zonal leader
router.get("/:id", getZonalLeader);

// Edit a single zonal leader
router.patch("/:id", editZonalLeader);

// Delete a single zonal leader
router.delete("/:id", deleteZonalLeader);

module.exports = router;
