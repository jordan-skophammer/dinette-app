const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const authRoutes = require("./auth");

router.use("/auth", authRoutes);
router.use("/api", apiRoutes);

module.exports = router;
