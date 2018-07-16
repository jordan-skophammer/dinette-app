// const router = require ("express").Router()
// const queryString = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=44.9537000,-93.0900000&radius=45000&type=restaurant&key=AIzaSyCJ2pazcdZHkXUkCyXNzV2iwXPCex7ODdY"
// const restaurantsController = require("../../controllers/restaurantsController")

// // router.route("/")
// //     .ajax({
// //         method: 'GET',
// //         url: "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=44.9537000,-93.0900000&radius=45000&type=restaurant&key=AIzaSyCJ2pazcdZHkXUkCyXNzV2iwXPCex7ODdY"
// //     }).then(function(resp){
// //         console.log(resp)
// //     })

// router.route("/").get(restaurantsController.search)
//     // This would pass the job off to a controller, which we shouldn't need because we're already client side
//     // .get(queryString).then(data=>console.log("result",data))
//     // And this one doesn't fire for some reason.

// console.log("Gui's note: this file is not doing anything at the moment")
// module.exports = router;