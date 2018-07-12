const axios = require ("axios")
const nearbyQueryStringA = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location="
const nearbyQueryStringB = "&radius=10000&type=restaurant&key=AIzaSyCJ2pazcdZHkXUkCyXNzV2iwXPCex7ODdY"
const geolocateQueryString = "https://maps.googleapis.com/maps/api/geocode/json?address=Mall+of+America&key=AIzaSyCB5tndG-nx3Z8RR-fnmeyXrEgkTRhYqSs"


module.exports = {
    search: (req, res) => {
        // console.log(req.params)
        // location = req.params.location
        axios.get(geolocateQueryString)
            .then(function(data){
                console.log(data.data.results[0])
                let lat = data.data.results[0].geometry.location.lat
                let lng = data.data.results[0].geometry.location.lng
                let nearbyStringFull = nearbyQueryStringA
                nearbyStringFull += lat
                nearbyStringFull += ","
                nearbyStringFull += lng
                nearbyStringFull += nearbyQueryStringB
                axios.get(nearbyStringFull)
                    .then(data => res.send(data.data.results))
                    // .then(data=>console.log(data.data))
            })
            
        },
    locationSearch: (req, res) => {
        console.log(req.params)
        res.send({type: "GET"})

    },
    nearbySearch: (req,res) => {
        res.send({type: "GET"})
    }}   