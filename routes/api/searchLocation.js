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

restaurantsArr = []

router.get("/:location", function(req,res) {
    let location = req.params.location
    console.log("location in searchLocation.js: ", location)

    axios.get(geolocateQueryString + location + geolocateKey)
    .then(function(data){
        // console.log(data.data.results[0])
                let lat = data.data.results[0].geometry.location.lat
                let lng = data.data.results[0].geometry.location.lng
                console.log("lat: ", lat, " lng: ", lng)
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

// console.log("routes > api > searchLocation is executing")

module.exports = router;

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
            if (rateLimitReached(data.data, element, array, res)){
            restaurantsArr.push(data.data)
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