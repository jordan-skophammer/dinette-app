const router = require("express").Router();

const userRoutes = require("./user");

router.use("/user", userRoutes);

// console.log("routes > user > index.js Exporting")

module.exports = router;
