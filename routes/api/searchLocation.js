const express = require ("express");
const app = express()
const axios = require ("axios")

const geolocateQueryString = "https://maps.googleapis.com/maps/api/geocode/json?address=" 
const geolocateKey = "&key=AIzaSyCB5tndG-nx3Z8RR-fnmeyXrEgkTRhYqSs"
const nearbyQueryStringA = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location="
const nearbyQueryStringB = "&radius=10000&type=restaurant&key=AIzaSyCJ2pazcdZHkXUkCyXNzV2iwXPCex7ODdY"

app.get("/api/restaurants/:location", function(req,res) {
    let location = req.params.location
    console.log("location in searchLocation.js: ", location)

    axios.get(geolocateQueryString + location + geolocateKey)
    .then(function(data){
        // console.log(data.data.results[0])
                let lat = data.data.results[0].geometry.location.lat
                let lng = data.data.results[0].geometry.location.lng
                // console.log("lat: ", lat, " lng: ", lng)
                let nearbyStringFull = nearbyQueryStringA
                nearbyStringFull += lat
                nearbyStringFull += ","
                nearbyStringFull += lng
                nearbyStringFull += nearbyQueryStringB
                // console.log(nearbyStringFull)
                axios.get(nearbyStringFull)
                    .then(data => {
                        console.log("\nThis is searchLocation.js\nExample result from the 2nd API: ", data.data.results[0].name)
                        res.send(data.data.results)
                        console.log("\n***\nData sent to the Front End\n***\n")
                    })
                })
        }
    )

console.log("routes > api > searchLocation is executing")

module.exports = app;