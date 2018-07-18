const router = require("express").Router();

const userRoutes = require("./user");

router.use("/userID", userRoutes);

console.log("routes > user > index.js Exporting")

module.exports = router;
