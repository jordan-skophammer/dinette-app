import axios from "axios";
let currentURL = window.location.origin;

export default {
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
    return axios.get("/api/vote/getsession" + userName)
  },
  voteToFirebase: (voteObject) => {
    return axios.post("/api/vote/submit", voteObject)
  },
  setWinner: (winnerObject) => {
    return axios.post("/api/vote/end", winnerObject)
  }
};

