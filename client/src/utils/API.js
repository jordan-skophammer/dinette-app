import axios from "axios";
// import geoLocation from "geolocation";
import request from "request"
let currentURL = window.location.origin;

export default {
  // geoLocation: () => { geoLocation.getCurrentPosition(function (err, position) {
  //   if (err) throw err
  //   console.log(position)
  //   this.state.value = position
  // })},

  // getLocation: request("https://geoip-db.com/json", function (error, response, body) {
  //   console.log('error:', error); // Print the error if one occurred
  //   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //   console.log('body:', body); // Print the HTML for the Google homepage.
  // }),

  searchRestaurants: () => axios.get("/api/restaurants/")
  // this is currently not enabled. We could use this to set default search results (from the Geolocation of the user?)
  // if so, one of the switches would be in routes > api > restaurants.js ...if this does not get re-written
  ,

  getRestaurants: function (searchTerm) {
    // Transforming the current url in order to query the public API locally 
    // (Express port 3001 changed to React port 3000 where the API exists).
    // Once deployed, it should reset to the domain name used.
    console.log("Before Ternary: ", currentURL)
    currentURL = "http://localhost:3001" ? "http://localhost:3000" : window.location.origin
    console.log("After Ternary: ", currentURL)
    // Preparing the terms for the API query
    searchTerm = searchTerm.replace(/ /g, "+").toLowerCase()
    // Querying our public API
    return axios.get("/api/restaurants/" + searchTerm)
  },
  searchNearby: () => {
    return axios.get(currentURL + "/api/search")
  },
  makeVoteSession: (restaurantsArr) => {
    // currentURL = "http://localhost:3001" ? "http://localhost:3000" : window.location.origin
    console.log("client route works")
    return axios.post("/api/vote/new", restaurantsArr)
  },
  // getUser: () => {
  //   console.log("checking user from client side");
  //   return axios.get('/user/id');
  // },
  getVoteSession: (userName) => {
    return axios.get("/api/vote/" + userName)
  },
  voteToFirebase: (voteObject) => {
    return axios.post("/api/vote/submit", voteObject)
  },
  setWinner: (winnerObject) => {
    return axios.post("/api/vote/end", winnerObject)
  }
};

