const router = require ("express").Router();
const axios = require ("axios")
const firebase = require ("firebase")

var config = {
    apiKey: "AIzaSyBzRymxfiS_lpwfG8qUu8CZKEOTdqQmoC4",
    authDomain: "dinette-1530978117932.firebaseapp.com",
    databaseURL: "https://dinette-1530978117932.firebaseio.com/",
    projectId: "dinette-1530978117932",
    storageBucket: "dinette-1530978117932.appspot.com",
    messagingSenderId: "273423651260"
  };

firebase.initializeApp(config);

var database = firebase.database();

router.post("/new",function(req, res){
    console.log("************MAKE VOTE SESSION************")
    // console.log(req.body)
    // let username = req.body("username")
    console.log(req.body)
    let username = req.body.username
    console.log("username: ",username)
    let restaurantsArrayVar = JSON.parse(req.body.restaurantsArr)
    console.log.restaurantsArrayVar
    // database.ref('voteSessions/'+username).set({
    //     isOpen: 1,
    //     voteEntries: "",
    //     restaurants: restaurantsArrayVar
    // })
    database.ref('voteSessions/'+username).set({
        userName: username,
        votes: [""],
        restaurants: restaurantsArrayVar
      })
    // database.ref().set({
    //     whyfailing: "Why/"
    // })
    // .then(function(data){res.send("Congratulations!")})
}   
)

router.post("/submit", function(req,res){
    console.log("**************post vote information************")
    // database.ref('voteSessions/'+username).on("value", function(snapshot){
    //     let sessionData = snapshot.val()
    //     console.log(sessionData)
    // })
    // console.log(req.body)
    let owner = req.body.owner
    let ballot = req.body.votes
    let sessionID = Date.now()
    console.log("Date stamp is ", sessionID)
    let voteObject = {
        sessionID : ballot
    }

    database.ref('voteSessions/'+owner+"/votes").set(
        voteObject
    )
})

router.get("/:username", function(req, res){
    console.log("********JOIN VOTE SESSION**********")
    let username = req.params.username
    database.ref('voteSessions/'+username).on("value", function(snapshot){
        console.log(snapshot.val())
        res.send(snapshot.val())
    })
})

module.exports = router;