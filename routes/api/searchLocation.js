const express = require ("express");
const app = express()
const axios = require ("axios")
//************** DROP THE NEW PLACES KEY HERE ******************* */
const placesKey = "AIzaSyA4KGHuQl-PcJZUjZoeY_KDEuDLYf43BWI"

const geolocateQueryString = "https://maps.googleapis.com/maps/api/geocode/json?address=" 
const geolocateKey = "&key=AIzaSyCB5tndG-nx3Z8RR-fnmeyXrEgkTRhYqSs"
const nearbyQueryStringA = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location="
const nearbyQueryStringB = "&radius=400&type=restaurant&key="+placesKey
const placesDetailsQueryStringA = "https://maps.googleapis.com/maps/api/place/details/json?placeid="
const placesDetailsQueryStringB = "&fields=name,rating,address_component,photo,type,formatted_phone_number,opening_hours,review&key="+placesKey

restaurantsArr = []

app.get("/api/restaurants/:location", function(req,res) {
    let location = req.params.location
    console.log("location in searchLocation.js: ", location)

    axios.get(geolocateQueryString + location + geolocateKey)
    .then(function(data){
        console.log(data.data.results[0])
                let lat = data.data.results[0].geometry.location.lat
                let lng = data.data.results[0].geometry.location.lng
                // console.log("lat: ", lat, " lng: ", lng)
                let nearbyStringFull = nearbyQueryStringA
                nearbyStringFull += lat
                nearbyStringFull += ","
                nearbyStringFull += lng
                nearbyStringFull += nearbyQueryStringB
                console.log(nearbyStringFull)
                axios.get(nearbyStringFull)
                    .then(function(data){
                        if (data.data.status !== "ZERO_RESULTS"){
                            console.log(data.data.results)
                            let noDetailsDataArr = []
                            noDetailsDataArr = data.data.results
                            getDetailsAddToArray(noDetailsDataArr, res)
                        } else {
                            let failMessage = "No Results Found"
                            res.send(failMessage)
                        }
                        
                    }
                )
            })
        }
    )

console.log("routes > api > searchLocation is executing")

module.exports = app;

function getDetailsAddToArray(array, res){
    if (array.length == 0) res.send(restaurantsArr)
    let element = array.pop()
    let queryString = placesDetailsQueryStringA
    queryString += element.place_id
    queryString += placesDetailsQueryStringB
    console.log("QUERY STRING",queryString)
    axios.get(queryString)
        .then(function(data){
            console.log("data: ",data.data)
            restaurantsArr.push(data.data)
            getDetailsAddToArray(array, res)
        })
}