const express = require("express");
const {createBurial} = require("../controllers/burialController");
const router = express.Router();

//Get all burial records
router.get("/", async (req, res) => {
  try {
    const burials = await Burial.find({}).sort({createdAt: -1});
    res.status(200).json(burials);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
});

// Adding a new burial record
router.post("/", createBurial);

// Edit a single burial record by ID
router.patch("/:id", async (req, res) => {
  const {id} = req.params;

  try {
    const updatedBurial = await Burial.findByIdAndUpdate(
      id,
      {...req.body},
      {new: true, runValidators: true}
    );

    if (!updatedBurial) {
      return res.status(404).json({error: "Burial record not found"});
    }

    res.status(200).json(updatedBurial);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
});

// Delete a single burial record
router.delete("/:id", async (req, res) => {
  const {id} = req.params;

  try {
    const deletedBurial = await Burial.findByIdAndDelete(id);

    if (!deletedBurial) {
      return res.status(404).json({error: "Burial record not found"});
    }

    res.status(200).json({
      message: "Burial record deleted successfully",
      deletedBurial,
    });
  } catch (error) {
    res.status(400).json({error: error.message});
  }
});

// Get a single burial record by ID
router.get("/:id", async (req, res) => {
  const {id} = req.params;

  try {
    const burial = await Burial.findById(id);

    if (!burial) {
      return res.status(404).json({error: "Burial record not found"});
    }

    res.status(200).json(burial);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
});
module.exports = router;
