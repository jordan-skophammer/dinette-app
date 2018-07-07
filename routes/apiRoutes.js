const router = require ("express").Router()

router.route("/location/:zip")
    .ajax({
        method: 'GET',
        url: "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=44.9537000,-93.0900000&radius=45000&type=restaurant&key=AIzaSyCJ2pazcdZHkXUkCyXNzV2iwXPCex7ODdY"
    }).then(function(resp){
        console.log(resp)
    })

module.exports = router;