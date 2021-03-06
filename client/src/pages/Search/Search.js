import React, { Component } from "react";
import "./Search.css"
import API from "../../utils/API"
import Wrapper from "../../components/Wrapper"
import Modal2 from "../../components/Modal"
import VoteModal from "../../components/VoteCreatedModal"
import InstructionsModal from "../../components/InstructionsModal"
import SearchBar from "../../components/SearchBar"
import { ModalFooter} from 'reactstrap'

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rouletteResults: [],
            roulettePick: {
                result: {
                    name: "name",
                    address_components: "address"
                }
            },
            results: [],
            value: "",
            modalArray: [[1, 2], "name", "address", [1, 2], "phone", "rating", [1, 2]],
            visibility: "hidden",
            rouletteVisable: "hidden",
            loading: "hidden",
            votingArray: [],
            savedArray: [],
            favoritedRestaurants: [],
            modal: false,
            voteModal: false,
            instructionsModal: false,
            goodbye: false,
            sendAwayMsg: "Thank you for submitting your group vote!"
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRoulette = this.handleRoulette.bind(this);
        this.handleInstructionsModal = this.handleInstructionsModal.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    componentDidMount() {
        sessionStorage.clear()
    }

    handleChange(event) {
        this.setState({ value: event.target.value })
    }

    toggle() {
        this.setState({modal: !this.state.modal});
    }
    toggleVoteModal() {
        this.setState({voteModal: !this.state.voteModal})
    }
    handleInstructionsModal() {
        this.setState({instructionsModal: !this.state.instructionsModal})
    }

    handleSubmit(event) {
        this.setState({ loading: "visible", visibility: "hidden", rouletteVisable: "hidden" })
        event.preventDefault();
        if (this.state.value.length > 0) {
            API.getRestaurants(this.state.value)
                .then(res => {
                    if (res.status !== 200) {
                        throw new Error(res.statusText)
                    }

                    if (res.data !== "No Results Found") {
                        this.setState({ ...this.state, results: res.data })
                    } else {
                        console.log("No Results found")
                        this.setState({ ...this.state, results: ["No Results Found"] })
                    }
                    this.setState({ visibility: "", loading: "hidden" })

                })
        }
        else {
            this.setState({ visibility: "hidden", loading: "hidden" })
        }
    }

    handleRoulette(event) {
        this.setState({ loading: "visible", visibility: "hidden", rouletteVisable: "hidden", votingArray: []})

        event.preventDefault();
        API.getRestaurants(this.state.value)
            .then(res => {
                if (res.status !== 200) {
                    throw new Error(res.statusText)
                }

                if (res.data !== "No Results Found") {
                    this.setState({ ...this.state, results: res.data })
                } else {
                    console.log("No results found")
                    this.setState({ ...this.state, results: ["No Results Found"] })
                }
                this.randomPick(res.data)

            })
    }

    randomPick = (data) => {
        let pick = data[Math.floor(Math.random() * data.length)]
        this.setState({ roulettePick: pick, rouletteVisable: "", loading: "hidden"})
        console.log(pick)
    }


    createFireBaseVoteSession(userName){
        this.setState({voteModal: true})
        console.log(`Local user: ${userName}`);
        let restaurantsArray = sessionStorage.getItem("restaurants")
        sessionStorage.setItem("voteOwner", "dummy owner")
        console.log(restaurantsArray, ' is restaurantsArray')
        let voteObject = {

            username: userName,
            restaurantsArr: restaurantsArray
        }
        console.log("vote session info:", this.props.firstName)

        // API.makeVoteSession(sessionStorage.getItem("restaurants"))
        API.makeVoteSession(voteObject)
        
    }



    populateModal(photos, name, location, hours, phone, rating, review) {
        let photosArray = []
        if (!photos) {
            photosArray = [1]
        } else {
            photos.forEach(photo => {
                let url = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=900&photoreference=" + photo.photo_reference + "&key=AIzaSyCgbPzkqqhxgCuROKGeQwpq6LKe0WrrjMo"
                photosArray.push(url)
            })
        }
        // let photo = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=900&photoreference="+ photoRef + "&key=AIzaSyA4KGHuQl-PcJZUjZoeY_KDEuDLYf43BWI"
        let reviewsArray = []
        review.forEach(revObj => {
            let individualReview = []
            individualReview.push(revObj.author_name, revObj.author_url, revObj.rating, revObj.relative_time_description, revObj.text)
            reviewsArray.push(individualReview)
        })
        let modalInfo = [photosArray, name, location, hours, phone, rating, reviewsArray];
        this.setState({ modalArray: modalInfo })
        console.log(this.state.modalArray[0[0]])
        this.toggle()
    }

    addToSessionStorage = (value) => {
        console.log("Name of object we are adding to Session Storage: ", value.name)
        sessionStorage.setItem("voted", [])
        let savedArray = []
        let storage = JSON.parse(sessionStorage.getItem("restaurants"))
        console.log("parsed data from local storage: ", storage)
        // ***************
        // This prevents from favoriting the same restaurant more than once,
        // by storing the names of favorited restaurants in the state, and checking 
        // against the state each time user favorites a restaurant
        let alreadyFavorited = this.state.favoritedRestaurants
        if (alreadyFavorited.indexOf(value.name) === -1 && alreadyFavorited.length < 5) {
            // ***************
            // This logic grabs what currently is in the session storage 
            // and transforms it in order to manipulate it

            // if there's something in session storage but it's not an array
            if (sessionStorage.getItem("restaurants") && !Array.isArray(storage)) {
                savedArray.push(storage, value)
                sessionStorage.setItem("restaurants", JSON.stringify(savedArray))
                // if there's something in session storage and it is an array
            }

            else if (sessionStorage.getItem("restaurants") && Array.isArray(storage) && storage.length <= 5) {
                savedArray = storage

                //if value is not already in saved, pushes it
                // !!!!!!!!!!!!!!!!!!!!!!!!!!!!! //
                // Should handle the duplicates? //
                // !!!!!!!!!!!!!!!!!!!!!!!!!!!!! //

                if (savedArray.includes(value) === false) {
                    savedArray.push(value)
                    //if value was already in saved and is now unchecked, delete from saved
                }

                else {
                    let index = savedArray.indexOf(value)
                    savedArray.splice(index, 1)
                }
                sessionStorage.setItem("restaurants", JSON.stringify(savedArray))
                // if there's nothing in session storage yet
            }

            else if (!sessionStorage.getItem("restaurants")) {
                savedArray.push(value)
                sessionStorage.setItem("restaurants", JSON.stringify(savedArray))
            }

            // ***************
            alreadyFavorited.push(value.name)
            this.setState(...this.state, alreadyFavorited)
        }
        // ***************   
        this.loadSessionStorage()
    }

    loadSessionStorage = () => {
        let stringToVote = sessionStorage.getItem("restaurants")
        let noStateVotingArray = JSON.parse(stringToVote)
        this.setState({ votingArray: noStateVotingArray })
    }

    removeFromSessionStorage = (value) => {
        // logic to remove restaurants from the state once they are
        // unfavorited (so that they can be re-selected if need be)
        let alreadyFavorited = this.state.favoritedRestaurants
        let restaurantToRemove = alreadyFavorited.indexOf(value.name)
        alreadyFavorited.splice(restaurantToRemove, 1)
        // **********************
        let index = this.state.votingArray.indexOf(value)
        let left = this.state.votingArray.slice(0, index)
        let right = this.state.votingArray.slice(index + 1)
        let votingArray = [...left, ...right]
        sessionStorage.setItem("restaurants", JSON.stringify(votingArray))
        this.setState({ ...this.state, alreadyFavorited, votingArray })
    }

    render() {
        let roulettePick = this.state.roulettePick
        let results;
        let displayRoulette
        if (this.state.results[0] === "No Results Found") {
            console.log(this.state.results, "************************")
            results = (
                this.state.results.map(result => (
                    <h3 className="text-center text-white">{result}</h3>
                ))
            )
            displayRoulette = (
                <h5 className="text-center">No Results Found</h5>
            )
        } else {
            results = (
                this.state.results.map(restaurant => (
                    <div key={restaurant.result.name} className="result-block">
                        <div className="form-check-results">
                            <label className="form-check-label">
                                <h5 className="restName" href="#searchModal" data-toggle="modal" data-target="#detailsModal" onClick={() => this.populateModal(restaurant.result.photos, restaurant.result.name, restaurant.result.address_components[0].short_name + " " + restaurant.result.address_components[1].short_name + " " + restaurant.result.address_components[3].short_name, restaurant.result.opening_hours.weekday_text, restaurant.result.formatted_phone_number, restaurant.result.rating, restaurant.result.reviews)}>
                                    {restaurant.result.name}
                                </h5>
                                <p className="details" onClick={() => this.populateModal(restaurant.result.photos, restaurant.result.name, restaurant.result.address_components[0].short_name + " " + restaurant.result.address_components[1].short_name + " " + restaurant.result.address_components[3].short_name, restaurant.result.opening_hours.weekday_text, restaurant.result.formatted_phone_number, restaurant.result.rating, restaurant.result.reviews)}>details</p>
                                <p className="address">{restaurant.result.address_components[0].short_name + " " + restaurant.result.address_components[1].short_name + " " + restaurant.result.address_components[3].short_name}</p>
                            </label>
                            <i className="fas fa-plus form-check-input" style={{ position: "relative" }} onClick={() => this.addToSessionStorage(restaurant.result)} value={restaurant.result.name} ></i>
                        </div>
                    </div>
                ))
            )

            displayRoulette = (
                <div>
                    <h5 href="#searchModal" data-toggle="modal" data-target="#detailsModal" onClick={() => this.populateModal(roulettePick.result.photos, roulettePick.result.name, roulettePick.result.address_components[0].short_name + " " + roulettePick.result.address_components[1].short_name + " " + roulettePick.result.address_components[3].short_name, roulettePick.result.opening_hours.weekday_text, roulettePick.result.formatted_phone_number, roulettePick.result.rating, roulettePick.result.reviews)}>{roulettePick.result.name}</h5>
                    <p className="details">details</p>
                    <p className="address">{roulettePick.result.address_components[0].short_name + " " + roulettePick.result.address_components[1].short_name + " " + roulettePick.result.address_components[3].short_name}</p>
                </div>
            )
        }
        return (
            <Wrapper>
                <br />
                <div className="container">
                    <div className="row">

                        <SearchBar
                        handleSubmit = {this.handleSubmit}
                        value = {this.state.value} 
                        handleChange = {this.handleChange}
                        handleRoulette = {this.handleRoulette}
                        />
                    </div>
                    <br />
                    
                    <div className="row justify-content-center spinner-div">
                        <img className={this.state.loading} src="../../spinner.svg" alt="" />
                    </div>

                    <div className={"row orange " + this.state.visibility}>
                        <div className="col-md-12 pick-card">
                            <h3 className="text-white text-center">Search Results <i className= "fas fa-info-circle" onClick={this.handleInstructionsModal}></i></h3>
                        </div>
                        <br />
                        <div className="col-md-12 orange" id="search-results-card">
                            {/* <h3 className="text-white text-center">Search Results</h3>
                        <h3 className="instructions-small">Click on the + to add to a group vote</h3> */}
                            {results}
                        </div>
                    </div>
                    <div className={"row " + this.state.rouletteVisable}>
                        <div className="col-md-12 pick-card orange">
                            <h2 className="text-white text-center">Your Pick</h2>
                            <br />
                            <div className="result-block">
                                <div className="form-check">
                                    <label className="form-check-label" htmlFor="defaultCheck">
                                        {displayRoulette}
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    {this.state.votingArray.length > 0 ? (
                        <div className="row picker-card-selected">
                            {this.state.votingArray.length >= 1 ? (
                                this.state.votingArray.map(restaurant => (
                                    <div className="col-sm-6 col-md-4">
                                    <div key={restaurant.id} className="result-block-selected col-sm-10 col-md-12">
                                        <div className="grouping-nested-elements">
                                            <div className="restaurant-name">
                                                {restaurant.name}
                                            </div>
                                            <div className="button-div">
                                                <button className="delete" onClick={() => this.removeFromSessionStorage(restaurant)} value={restaurant.name}>✗</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-1"></div>
                                    </div>
                                ))
                            ) : (
                                    <div>
                                    </div>
                                )}
                        </div>
                    ) : (<br />)}
                    {this.state.votingArray.length > 1 && this.state.votingArray.length < 6 ? (
                        <div className="row">
                            <div className="col-sm-4"></div>
                            <div className="col-sm-4">
                                {/* a place for ternary */}
                                {this.props.loggedIn ? 
                                (
                                    <button className="btn btn-lg yellow text-white" id="saveRestaurants" onClick={() => this.createFireBaseVoteSession(this.props.user.local.userName)}>Add to Group Vote</button>
                                ) : (
                                    <a href="/account"><button className="btn btn-lg yellow text-white">Sign up/Log in to start a ballot</button></a>
                                    )
                                }
                            
                            </div>
                            <div className="col-sm-4"></div>
                        </div>
                    ) : (
                            <div className="row">
                            </div>
                        )}          
            </div>
            
            <Modal2
                key = {this.state.modalArray[1]}
                photos = {this.state.modalArray[0]}
                firstPhoto = {this.state.modalArray[0][0]}
                restName = {this.state.modalArray[1]}
                address = {this.state.modalArray[2]}
                hours = {this.state.modalArray[3]}
                phone = {this.state.modalArray[4]}
                rating = {this.state.modalArray[5]}
                reviews = {this.state.modalArray[6]}
                modal = {this.state.modal}
                toggle = {this.toggle}
            >
                <ModalFooter>
                    <button type="button" className="btn yellow text-white" onClick= {() => this.toggle()}>Close</button>
                </ModalFooter>
            </Modal2>

            <VoteModal
                toggle = {this.toggleVoteModal}
                modal = {this.state.voteModal}
            >
                <ModalFooter>
                    <button type="button" className="btn yellow text-white" onClick= {() => this.toggleVoteModal()}>Close</button>
                </ModalFooter>
            </VoteModal>

            <InstructionsModal 
                toggle = {this.handleInstructionsModal}
                modal = {this.state.instructionsModal}
            >
                <ModalFooter>
                    <button type="button" className="btn yellow text-white" onClick= {() => this.handleInstructionsModal()}>Close</button>
                </ModalFooter>

            </InstructionsModal>   
            </Wrapper>
        )
    }
}

export default Search;