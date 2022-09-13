const express = require("express");
const router = express.Router();
const Tshirt = require("../server");

router.post("/tshirt", async (req, res) => {
  try {
    const { isIntersted, menOption, womenOption, grandKidsOption, quantity } =
      req.body;

    // checking entered details
    if (
      !isIntersted ||
      !menOption ||
      !womenOption ||
      !grandKidsOption ||
      !quantity
    ) {
      return res.status(400).json({
        message: "Fill in all fields",
      });
    }

    const newTshirt = new Tshirt({
      isIntersted,
      menOption,
      womenOption,
      grandKidsOption,
      quantity,
    });

    await newTshirt.save();

    return res.status(200).json({
      message: "New Tshirt added successfully!",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Server error, Try again later!",
    });
  }
});
