const axios = require ("axios")

const nearbyQueryStringA = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location="
const nearbyQueryStringB = "&radius=10000&type=restaurant&key=AIzaSyCJ2pazcdZHkXUkCyXNzV2iwXPCex7ODdY"
const geolocateQueryStringA = "https://maps.googleapis.com/maps/api/geocode/json?address="
const geolocateQueryStringB = "&key=AIzaSyCB5tndG-nx3Z8RR-fnmeyXrEgkTRhYqSs"
const placesDetailsQueryStringA = "https://maps.googleapis.com/maps/api/place/details/json?placeid="
const placesDetailsQueryStringB = "&fields=name,rating,address_component,photo,type,formatted_phone_number,opening_hours,review&key=AIzaSyCJ2pazcdZHkXUkCyXNzV2iwXPCex7ODdY"

restaurantsArr = []


module.exports = {
    search: (req, res) => {

        let geolocateQueryString = geolocateQueryStringA
        geolocateQueryString += "Mall+of+America"
        geolocateQueryString += geolocateQueryStringB

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

                    .then(function(data){
                        console.log(data.data.results)
                        let noDetailsDataArr = []
                        noDetailsDataArr = data.data.results
                        getDetailsAddToArray(noDetailsDataArr, res)
                    }
            )
        })
    }
}

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

