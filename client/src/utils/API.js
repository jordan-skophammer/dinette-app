import axios from "axios";
let currentURL = window.location.origin;

export default {
    searchRestaurants: () => axios.get("/api/restaurants/")
    // this is currently not enabled. We could use this to set default search results (from the Geolocation of the user?)
    // if so, one of the switches would be in routes > api > restaurants.js ...if this does not get re-written
    ,
    
    getRestaurants: function(searchTerm) {
        // Transforming the current url in order to query the public API locally 
        // (Express port 3001 changed to React port 3000 where the API exists).
        // Once deployed, it should reset to the domain name used.

        // currentURL = "http://localhost:3001" ? "http://localhost:3000" : window.location.origin

        // Preparing the terms for the API query
        console.log("After Ternary: ", currentURL)
        searchTerm = searchTerm.replace(/ /g, "+").toLowerCase()
        // Querying our public API
        return axios.get("/api/restaurants/" + searchTerm)
    },
    searchNearby: () => {
        return axios.get(currentURL + "/api/search")
    },
    makeVoteSession: (restaurantsArr)=>{
        // currentURL = "http://localhost:3001" ? "http://localhost:3000" : window.location.origin
        console.log("client route works")
        return axios.post("/api/vote", restaurantsArr)
    },
    getVoteSession: (userName) => {
        console.log("******************GET VOTE FOR "+userName+"*********************")
        return axios.get("/api/vote/"+userName)
    }

}
