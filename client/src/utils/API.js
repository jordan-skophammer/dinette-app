import axios from "axios";

// export default {
//     searchRestaurants: function() {
//         return axios.get("https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=44.9537000,-93.0900000&radius=45000&type=restaurant&key=AIzaSyCJ2pazcdZHkXUkCyXNzV2iwXPCex7ODdY")
//     }
// }
// This returns the CORS error - you can't ping a domain from a script on your browser

export default {
    searchRestaurants: () => axios.get("/api/restaurants")
}
// This (AFAIK) should call back to our express server and allow us to make the call server side