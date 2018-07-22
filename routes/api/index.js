const router = require("express").Router();

const searchLocation = require("./searchLocation");
const votingSession = require("./votingSession")
// const voteSubmit = require("./voteSubmit")

router.use("/restaurants", searchLocation);
router.use("/vote", votingSession);
// router.use("/votesubmit", voteSubmit);

// console.log("routes > api > index.js Exporting")

module.exports = router;
