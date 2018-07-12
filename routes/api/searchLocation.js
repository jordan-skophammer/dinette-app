const express = require ("express");
const app = express()
const router = require ("express").Router()


const queryString = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=44.9537000,-93.0900000&radius=45000&type=restaurant&key=AIzaSyCJ2pazcdZHkXUkCyXNzV2iwXPCex7ODdY"
const restaurantsController = require("../../controllers/restaurantsController")

// router.route("/")
//     .ajax({
//         method: 'GET',
//         url: "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=44.9537000,-93.0900000&radius=45000&type=restaurant&key=AIzaSyCJ2pazcdZHkXUkCyXNzV2iwXPCex7ODdY"
//     }).then(function(resp){
//         console.log(resp)
//     })

/*app.route("/").get(restaurantsController.locationSearch)
    // This would pass the job off to a controller, which we shouldn't need because we're already client side
    // .get(queryString).then(data=>console.log("result",data))
    // And this one doesn't fire for some reason.
*/

/*
app.get("api/search/:location", function(req,res) {
    let location = req.params.location
    console.log("location in searchLocation.js: ", location)
    res.send({location});
})
*/
const axios = require ("axios")
const geolocateQueryString = "https://maps.googleapis.com/maps/api/geocode/json?address=" 
const geolocateKey = "&key=AIzaSyCB5tndG-nx3Z8RR-fnmeyXrEgkTRhYqSs"


app.get("/api/restaurants/:location", function(req,res) {
    let location = req.params.location
    console.log("location in searchLocation.js: ", location)

    axios.get(geolocateQueryString + location + geolocateKey)
    .then(function(data){
        // console.log(data.data.results[0])
                let lat = data.data.results[0].geometry.location.lat
                let lng = data.data.results[0].geometry.location.lng
                console.log("lat: ", lat, " lng: ", lng)
            // .then(data=>console.log(data.data))
        })    
    }
)

console.log("routes > api > searchLocation is executing")

// router.route("/").get(restaurantsController.locationSearch)


module.exports = app;