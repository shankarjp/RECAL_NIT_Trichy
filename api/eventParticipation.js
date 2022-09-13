const express = require("express");
const router = express.Router();
const Event = require("../server");

router.post("/event-participation", async (req, res) => {
  try {
    const { Date1, Date2, Date3 } = req.body;

    // checking the req data
    if (!Date1 || !Date2 || !Date3) {
      return res.status(400).json({
        message: "Fill in all fields",
      });
    }

    const newEventParticipation = new Event({
      Date1,
      Date2,
      Date3,
    });

    await newEventParticipation.save();

    return res.status(200).json({
      message: "New event participation added successfully!",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Server error, Try again later!",
    });
  }
});

export default router;
