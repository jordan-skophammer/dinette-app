import axios from "axios";

export default {
    searchRestaurants: function() {
        return axios.get("https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=44.9537000,-93.0900000&radius=45000&type=restaurant&key=AIzaSyCJ2pazcdZHkXUkCyXNzV2iwXPCex7ODdY")
    }
}