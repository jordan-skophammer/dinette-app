const queryString = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=44.9537000,-93.0900000&radius=45000&type=restaurant&key=AIzaSyCJ2pazcdZHkXUkCyXNzV2iwXPCex7ODdY"

module.exports={
    

    search: (req, res) => {
        $.get(queryString)
        // .then(data=>console.log("result",data))
        .then(data=>res.json(data))
        //neither one of these shows signs of life
    }
}