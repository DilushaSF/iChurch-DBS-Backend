const express = require("express");

const router = express.Router();

const Burial = require("../models/burialModel");

//Get all burial records
router.get("/", (req, res) => {
  res.json({mssg: "Get all burials"});
});

// Adding a new burial record
router.post("/", async (req, res) => {
  const {
    nameOfDeceased,
    dateOfDeath,
    dateOfBirth,
    dateWillBurry,
    baptized,
    caouseOfDeath,
    custodian,
  } = req.body;
  try {
    const newBurial = await Burial.create({
      nameOfDeceased,
      dateOfDeath,
      dateOfBirth,
      dateWillBurry,
      baptized,
      caouseOfDeath,
      custodian,
    });
    res.status(200).json(newBurial);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
});

module.exports = router;
