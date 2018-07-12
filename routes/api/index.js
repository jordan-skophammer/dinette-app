/*
const router = require("express").Router();
const restaurantRoutes = require("./restaurants");
*/
const express = require("express")
const app = express()
const searchLocation = require("./searchLocation");

/*
router.use("/restaurants", restaurantRoutes);
*/
app.use(searchLocation);
console.log("I don't think this file is doing anything. See below: it is not logging...")
console.log("routes > api > index.js Exporting")

module.exports = app;