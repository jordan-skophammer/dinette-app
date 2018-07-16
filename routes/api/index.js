const router = require("express").Router();

const searchLocation = require("./searchLocation");

router.use("/restaurants", searchLocation);

console.log("routes > api > index.js Exporting")

module.exports = router;
