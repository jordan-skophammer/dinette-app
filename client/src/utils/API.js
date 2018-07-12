import axios from "axios";
let currentURL = window.location.origin;

// export default {
//     searchRestaurants: function() {
//         return axios.get("https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=44.9537000,-93.0900000&radius=45000&type=restaurant&key=AIzaSyCJ2pazcdZHkXUkCyXNzV2iwXPCex7ODdY")
//     }
// }
// This returns the CORS error - you can't ping a domain from a script on your browser

export default {
    searchRestaurants: () => axios.get("/api/restaurants/"),
    
    getRestaurants: function(searchTerm) {
        //console.log("Location searched: ",searchTerm)
        currentURL = "localhost:3000/" ? "http://localhost:3001" : window.location.origin
        searchTerm = searchTerm.replace(/ /g, "+").toLowerCase()
        console.log("Location Searched After regex: ", searchTerm)

        return axios.get(currentURL + "/api/restaurants/" + searchTerm)
        // return searchTerm
    },
    searchNearby: () => {
        return axios.get(currentURL + "/api/search")
    }

}
// This (AFAIK) should call back to our express server and allow us to make the call server side