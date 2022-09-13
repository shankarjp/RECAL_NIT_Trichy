const express = require("express");
const router = express.Router();
const Tour = require("../server");

router.post("/tours", async (req, res) => {
  try {
    const { isInterested, paxCount } = req.body;

    // data verification may vary
    if (!isInterested || !paxCount) {
      return res.status(400).json({
        message: "Fill in all fields!",
      });
    }

    const newTour = new Tour({
      isInterested,
      paxCount,
    });

    await newTour.save();

    return res.status(200).json({
      message: "New Tour added successfully!",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Server error, Try again later!",
    });
  }
});

export default router;
