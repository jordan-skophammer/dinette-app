/*
const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

router.use("/api", apiRoutes);
*/
const express = require("express")
const app = express()


const searchLocation = require("./api/searchLocation");

/*
router.use("/restaurants", restaurantRoutes);
*/
app.use(searchLocation);

console.log("Routes > index.js is executing")
module.exports = app;