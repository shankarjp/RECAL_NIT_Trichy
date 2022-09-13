const express = require("express");
const router = express.Router();
const Accomodation = require("../server");

router.post("/accomodation", async (req, res) => {
  try {
    const {
      participationType,
      pax,
      hotelRoom,
      typeOfRoom,
      checkInDate,
      checkOutDate,
      hotel,
    } = req.body;

    if (
      !participationType ||
      !pax ||
      !hotelRoom ||
      !typeOfRoom ||
      !checkInDate ||
      !checkOutDate
    ) {
      return res.status(400).json({
        message: "Fill in all fields",
      });
    }

    const newAccomodation = new Accomodation({
      participationType,
      pax,
      hotelRoom,
      typeOfRoom,
      checkInDate,
      checkOutDate,
      hotel,
    });

    await newAccomodation.save();

    return res.status(200).json({
      message: "New accomodation added successfully!",
    });
  } catch (err) {
    return res.status(500).json({
      message: "Server error, Try again later!",
    });
  }
});

export default router;
