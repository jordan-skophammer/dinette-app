import React, { Component } from "react";
import "./Search.css"
import API from "../../utils/API"
import NavBar from "../../components/NavBar"
import Wrapper from "../../components/Wrapper"

class Search extends Component {

    state = {
        results: [],
    }


    search = () => {
        API.searchRestaurants()
        .then(res => {
            this.setState({results: res.data})
            console.log(this.state.results)
        })
    }

    componentDidMount() {
        this.search()
    }

    saveRestaurants = () => {
        let storage = JSON.parse(sessionStorage.getItem("saved"))
        console.log("*~ Send to backend ~*")
    }

    addToSessionStorage = (value) => {
        
        let savedArray = []
        let storage = JSON.parse(sessionStorage.getItem("saved"))

        //if there's something in session storage but it's not an array
        if (sessionStorage.getItem("saved") && !Array.isArray(storage)){
            savedArray.push(storage, value)
            sessionStorage.setItem("saved", JSON.stringify(savedArray))
        //if there's something in session storage and it is an array
        } else if (sessionStorage.getItem("saved") && Array.isArray(storage) && storage.length <= 5) {
            savedArray = storage
            //if value is not already in saved, pushes it
            if (savedArray.includes(value) === false){
                savedArray.push(value)
            //if value was already in saved and is now unchecked, delete from saved
            } else {
                let index = savedArray.indexOf(value)
                savedArray.splice(index, 1)
            }
            sessionStorage.setItem("saved", JSON.stringify(savedArray))
        //if there's nothing in session storage yet
        } else {
            sessionStorage.setItem("saved", JSON.stringify(value))
        }
        
    }

    render () {
        return(
        <Wrapper>
            <NavBar/>
            <br/>

            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="search_field row">
                        {/* <div className="row"> */}
                        
                            <div className="col-sm-9 align-middle">
                                <input type="text" className="form-control" id="searchLocation" placeholder="Search by ZIP or landmark"></input>
                            </div>
                            <div className="col-sm-3">
                                <button className="btn btn-lg yellow text-white" onClick={this.searchLocation}>Search</button>
                            </div>
                        {/* </div> */}
                        </div>

                    </div>
                </div>
                <div className="row">

                <div className="col-md-12 results-card">
                        {/* <div className="results-card"> */}
                            <h3 className="text-white text-center">Search Results</h3>
                            <br/>
                                
                                {this.state.results.map(restaurant => (
                                    <div key = {restaurant.id} className="result-block">
                                        <div className="form-check">
                                            <label className="form-check-label" htmlFor="defaultCheck">
                                                <h5>{restaurant.name}</h5>
                                                <p className="address">{restaurant.vicinity}</p>
                                            </label>
                                            <input className="form-check-input" data-state="unchecked" type="checkbox" onClick= {() => this.addToSessionStorage(restaurant.name)} value={restaurant.name} id="defaultCheck"></input>

                                        {/* {restaurant.photos[0].html_attribution} */}
                                        <br/>
                                        </div>

                                    </div>

                                ))}
                            
                        {/* </div> */}
                        {/* <br/> */}
                    </div>
                </div>
                        <div className="col-md-12">
                            <button className="col-md-12 btn btn-lg yellow-grad text-white" id="saveRestaurants" onClick={() => this.saveRestaurants}>Save</button>
                        </div>
            </div>
            
            
        </Wrapper>


        )
    }
}

export default Search;