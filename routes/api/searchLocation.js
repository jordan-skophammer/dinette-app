const router = require("express").Router();
const axios = require ("axios")

//************** DROP THE NEW PLACES KEY HERE ******************* */
const placesKey = [
    "AIzaSyCJ2pazcdZHkXUkCyXNzV2iwXPCex7ODdY",
    "AIzaSyDoymHNEqUV0nVSOmEVwU4_hnNOiKu1RGc",
    "AIzaSyBsefQtQyAz_GgHERwuEkFClAWIl7eFUvs",
    "AIzaSyA4KGHuQl-PcJZUjZoeY_KDEuDLYf43BWI",
]
let placesKeyIter = 0

const geolocateQueryString = "https://maps.googleapis.com/maps/api/geocode/json?address=" 
const geolocateKey = "&key=AIzaSyCB5tndG-nx3Z8RR-fnmeyXrEgkTRhYqSs"
const nearbyQueryStringA = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location="
const nearbyQueryStringB = "&radius=500&type=restaurant&key="+placesKey[placesKeyIter]
const placesDetailsQueryStringA = "https://maps.googleapis.com/maps/api/place/details/json?placeid="
const placesDetailsQueryStringB = "&fields=name,rating,address_component,photo,type,formatted_phone_number,opening_hours,review&key="+placesKey[placesKeyIter]

// Global variable to store results (via closure)
let restaurantsArr = []

router.get("/:location", function(req,res) {
    restaurantsArr = []
    // getting the location search from the API route
    let location = req.params.location
    // first API call: the location + API key (geocode: provides the GPS coordinates of a location)
    axios.get(geolocateQueryString + location + geolocateKey)
    .then(function(data){
                let lat = data.data.results[0].geometry.location.lat
                let lng = data.data.results[0].geometry.location.lng
                // Lat and Lng are the GPS coordinates returned by the first API call
                // We then use the "place" API to look for POI nearby it
                console.log("lat: ", lat, " lng: ", lng)
                let nearbyStringFull = nearbyQueryStringA
                nearbyStringFull += lat
                nearbyStringFull += ","
                nearbyStringFull += lng
                nearbyStringFull += nearbyQueryStringB
                console.log("Full URL of the second API query: ", nearbyStringFull)
                // resetting the restaurantArr 
                axios.get(nearbyStringFull)
                    .then(function(data){
                        if (data.data.status !== "ZERO_RESULTS"){
                            console.log(data.data.results)
                            // Restaurants nearby a location are stored in an array 
                            let noDetailsDataArr = data.data.results
                            // run the function to get details for each element of that array (aka: ratings, photo, type, etc.)
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

module.exports = router;

function getDetailsAddToArray(array, res){
    if (array.length == 0) res.send(restaurantsArr)
    // This function adds relevant details for each restaurant found nearby the location searched.
    // It is called recursively on the last element of the array (that is popped)
    let element = array.pop()
    let queryString = placesDetailsQueryStringA
    queryString += element.place_id
    queryString += placesDetailsQueryStringB
    // console.log("QUERY STRING",queryString)
    axios.get(queryString)
    .then(function(data){
        console.log("data pushed to restaurantsArr:\n",data.data, "\n")
        if (rateLimitReached(data.data, element, array, res)){

            restaurantsArr.push(data.data)
            // function is called recursively until length reaches 0, at which point data is sent
            getDetailsAddToArray(array, res)
            } 
        })
    }

function rateLimitReached(response, element, array, res){
    if (response.error_message){
        placesKeyIter++
        array.push(element)
        getDetailsAddToArray(array, res)
    } else {
        return true
    }
}