const router = require("express").Router();

const searchLocation = require("./searchLocation");
const votingSession = require("./votingSession")

router.use("/restaurants", searchLocation);
router.use("/vote", votingSession);

// console.log("routes > api > index.js Exporting")

module.exports = router;
