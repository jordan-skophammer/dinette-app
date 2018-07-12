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
console.log("routes > api > index.js Exporting")
module.exports = app;