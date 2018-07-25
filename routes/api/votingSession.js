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

router.post("/winner", function(req,res){
    let winner=req.body.winner
    let owner=req.body.owner
    database.ref("voteSessions/"+owner+"/winner").set(winner)
})



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
        votes: {ballot: [""]},
        restaurants: restaurantsArrayVar
      })
    // database.ref().set({
    //     whyfailing: "Why/"
    // })
    // .then(function(data){res.send("Congratulations!")})
}   
)

router.post("/submit", function(req,res){
    console.log("**************post vote information************" )
    let currentSnap
    let owner = req.body.owner
    let voteObject = req.body.votes
    console.log("*******************************************************************************")
    let newPostRef = database.ref('voteSessions/'+owner+"/votes/ballot").push(voteObject)
    let newPostID = newPostRef.key
    console.log(newPostID)
    res.send(newPostID)

    
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