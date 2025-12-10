const express = require("express");
const authMiddleware = require("../middleware/auth");
const {
  addZonalLeader,
  getZonalLeaders,
  getZonalLeader,
  deleteZonalLeader,
  editZonalLeader,
} = require("../controllers/zonalLeaderController");

const router = express.Router();

//Get all zonal leaders
router.get("/", authMiddleware, getZonalLeaders);

// Adding a new zonal leader
router.post("/", authMiddleware, addZonalLeader);

// Get a single zonal leader
router.get("/:id", authMiddleware, getZonalLeader);

// Edit a single zonal leader
router.patch("/:id", authMiddleware, editZonalLeader);

// Delete a single zonal leader
router.delete("/:id", authMiddleware, deleteZonalLeader);

module.exports = router;
