const axios = require ("axios")
const queryString = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=44.9537000,-93.0900000&radius=45000&type=restaurant&key=AIzaSyCJ2pazcdZHkXUkCyXNzV2iwXPCex7ODdY"

module.exports={
    

    search: (req, res) => {
        // $.get(queryString)
        axios.get(queryString)
        // .then(data=>console.log("result",data))
        // .then(data=>console.log(data.data))
        .then(data => res.send(data.data.results))
        // .catch(() => console.log('there is an error'))
        //neither one of these shows signs of life
    }
}