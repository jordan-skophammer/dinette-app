// const path = require("path");
const app = require("express");
const router = require("express").Router();
const apiRoutes = require("./api");
const authRoutes = require("./auth");
const userRoutes = require("./user");

// all routes coming from the auth.js file have extention /auth/...
router.use("/auth", authRoutes);

// all routes coming from the api folder will have extention /api/...
router.use("/api", apiRoutes);

// all routes coming from the user folder will have extention /user/...
router.use("/user", userRoutes);

module.exports = router;
