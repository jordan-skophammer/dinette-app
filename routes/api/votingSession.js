const router = require ("express").Router();
const axios = require ("axios")
const firebase = require ("firebase")

// var config = {
//     apiKey: "AIzaSyBzRymxfiS_lpwfG8qUu8CZKEOTdqQmoC4",
//     authDomain: "dinette-1530978117932.firebaseapp.com",
//     databaseURL: "https://dinette-1530978117932.firebaseio.com",
//     projectId: "dinette-1530978117932",
//     storageBucket: "dinette-1530978117932.appspot.com",
//     messagingSenderId: "273423651260"
//   };

// firebase.initializeApp(config);

// var database = firebase.database;

router.post("/",function(req, res){
    console.log("FIREBASE")
    // database.ref("sessions/"+session).set({
    //     owner: "owner",
    //     restaurants: req.body
    // })
}
    
)

module.exports = router;