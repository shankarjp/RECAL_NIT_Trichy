import express from "express";

const router = express.Router();
const accomodationRouter = require("./accomodation");
const eventParticipationRouter = require("./eventParticipation");
const tshirtRouter = require("./tshirt");
const tourRouter = require("./tours");

// router.get("/", (req, res) => {
//   res.send({ data: ["hello world"] });
// });

router.use("/", accomodationRouter);
router.use("/", eventParticipationRouter);
router.use("/", tshirtRouter);
router.use("/", tourRouter);

export default router;
