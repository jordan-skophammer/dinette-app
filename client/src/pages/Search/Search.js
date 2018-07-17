import React, { Component } from "react";
import "./Search.css"
import API from "../../utils/API"
import NavBar from "../../components/NavBar"
import Wrapper from "../../components/Wrapper"
import Modal from "../../components/Modal"

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [],
            value: "",
            modalArray: ["photo", "name", "address", [1,2], "phone", "rating", [1,2]],
            visibility: "hidden"
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    

    handleChange(event){
        this.setState({value: event.target.value})
        console.log(this.state.value)
    }
    
    handleSubmit(event){
        // console.log("Data was submitted: ", this.state.value);
        event.preventDefault();
        API.getRestaurants(this.state.value)
            .then(res => {
                // console.log(res.statusText)
                if(res.status !== 200) {
                    throw new Error(res.statusText)
                }
                console.log(res)
                this.setState({visibility: "", results: res.data})
                console.log(this.state.results[0].result.name)
            })
    }

    

    populateModal(photoRef, name, location, hours, phone, rating, review){
        let photo = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=900&photoreference="+ photoRef + "&key=AIzaSyA4KGHuQl-PcJZUjZoeY_KDEuDLYf43BWI"
        let reviewsArray = []
        review.forEach(revObj => {
            let individualReview = []
            individualReview.push(revObj.author_name, revObj.author_url, revObj.rating, revObj.relative_time_description, revObj.text)
            reviewsArray.push(individualReview)
        })
        let modalInfo = [photo, name, location, hours, phone, rating, reviewsArray];
        console.log(modalInfo)
        this.setState({modalArray: modalInfo})
    }
    // componentDidMount() {
    //     this.search()
    // }


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
        console.log(sessionStorage)
    }

    render () {
        return(
        <Wrapper>
            <NavBar/>
            <br/>

            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <form onSubmit={this.handleSubmit}>
                            <div className="search_box green row">
                                <div className="col-sm-9">
                                    <input type="text" className="form-control" id="searchLocation" value={this.state.value} onChange={this.handleChange} placeholder="Search by ZIP or landmark"></input>
                                </div>
                                <div className="col-sm-3">
                                    <button className="btn btn-lg text-white yellow-btn"  id="search" onClick={this.searchLocation}>Search</button>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
                <br/>
                <div className={"row " + this.state.visibility}>

                    <div className="col-md-12 results-card orange">
                            <h3 className="text-white text-center">Search Results</h3>
                            <br/>
                                
                                {this.state.results.map(restaurant => (
                                    <div key = {restaurant.result.photos[0].photo_reference} className="result-block">
                                        <div className="form-check">
                                            <label className="form-check-label">
                                                <h5 href="#searchModal" data-toggle="modal" data-target="#detailsModal" onClick={() => this.populateModal(restaurant.result.photos[0].photo_reference, restaurant.result.name, restaurant.result.address_components[0].short_name + " " + restaurant.result.address_components[1].short_name + " " + restaurant.result.address_components[3].short_name, restaurant.result.opening_hours.weekday_text, restaurant.result.formatted_phone_number, restaurant.result.rating, restaurant.result.reviews)}>{restaurant.result.name}</h5>
                                                <p className="address">{restaurant.result.address_components[0].short_name + " " + restaurant.result.address_components[1].short_name + " " + restaurant.result.address_components[3].short_name}</p>
                                            </label>
                                            <input className="form-check-input" data-state="unchecked" type="checkbox" onClick= {() => this.addToSessionStorage(restaurant.result.name)} value={restaurant.result.name} id="defaultCheck"></input>
                                        </div>

                                    </div>

                                ))}
                    </div>
                </div>
                <br/>
                <div className={"row " + this.state.visibility}>
                    <div className="col-sm-12 justify-content-center">
                        <a href="/ballot">
                            <button className="btn btn-lg yellow-btn text-white" id="saveRestaurants">Add to Group Vote</button>
                        </a>
                    </div>
                </div>
            </div>

            <Modal
            
            photo = {this.state.modalArray[0]}
            restName = {this.state.modalArray[1]}
            address = {this.state.modalArray[2]}
            hours = {this.state.modalArray[3]}
            phone = {this.state.modalArray[4]}
            rating = {this.state.modalArray[5]}
            reviews = {this.state.modalArray[6]}

            />
            
        </Wrapper>


        )
    }
}

export default Search;