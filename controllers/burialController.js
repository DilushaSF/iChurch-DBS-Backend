const Burial = require("../models/burialModel");

// Adding a new burial record
const createBurial = async (req, res) => {
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
};

module.exports = {createBurial};
