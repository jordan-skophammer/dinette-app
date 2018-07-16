// const path = require("path");
const app = require("express");
const router = require("express").Router();
const apiRoutes = require("./api");
const authRoutes = require("./auth");

// all routes coming from the auth.js file have extention /auth/...
router.use("/auth", authRoutes);

// all routes coming from the api folder will have extention /api/...
router.use("/api", apiRoutes);

module.exports = router;
