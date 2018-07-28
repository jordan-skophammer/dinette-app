import React, { Component } from "react";
import RestaurantOption from "../../components/RestaurantOption";
import RankedRestaurants from "../../components/RankedRestaurants";
import VoteList from "../../components/VoteList";
import Wrapper from "../../components/Wrapper";
import "./Ballot.css"
import VoteResults from "../../components/VoteResults";
import API from "../../utils/API";
// import { Bar } from 'react-chartjs-2';
// import API from "../../utils/API";
// import Search from "./Search";
const instructionCustom = {
    width:"75%", 
    marginBottom: "2%"
};

class Ballot extends Component {
    // "restaurants" is the array of unranked restaurants
    // "results" is the array of ranked restaurants
    constructor(props) {
        super(props);
        this.state = {
            restaurants: [],
            results: [],
            chooseMessage: "",
            ranked: 0,
            unranked: 0,
            goodbye: false,
            sendAwayMsg: "Thank you for participating to the vote!",
            loggedIn: props.loggedIn, 
            userName: props.user.local.userName
        }
    }
    // handleResult(event) {
    //     this.setState({ value: event.target.value })
    // }

    componentDidMount() {
        this.loadSessionStorage();
        this.optionsInstructions(0,this.state.unranked)
    }

    loadSessionStorage = () => {
        // array of unranked restaurants is parsed from sessionStorage if it exists, if not, an empty array is created
        let restaurants = [];
        if (sessionStorage.getItem("restaurants") !== null && sessionStorage.getItem("restaurants") !== "null") {
            let restaurantsParsed = JSON.parse(sessionStorage.getItem("restaurants"))
            // this handles the case where data comes from Firebase (because the data is then structured differently)
            if (restaurantsParsed.restaurants) {
                restaurants = restaurantsParsed.restaurants 
            }
            else {
                restaurants = restaurantsParsed
            }
        }

        // same for ranked restaurants
        let results = []        
        if (sessionStorage.getItem("results") !== null && sessionStorage.getItem("results") !== "null") {
            results = JSON.parse(sessionStorage.getItem("results"))
        }
        
        this.setState({...results,results})
        this.setState({...restaurants,restaurants})
        this.setState({unranked: restaurants.length, ranked: results.length})
    }

    addToResults = (value) => {
        // getting the index of the restaurant clicked in the "restaurant" array
        let index = this.state.restaurants.indexOf(value)
        let unrankedRestaurants = this.state.restaurants;
        let rankedRestaurants = this.state.results;
        // we grab the value, splice it from the restaurants array
        // and push it to the results array
        unrankedRestaurants.splice(index, 1)
        rankedRestaurants.push(value)

        sessionStorage.setItem("restaurants", JSON.stringify(unrankedRestaurants))
        sessionStorage.setItem("results", JSON.stringify(rankedRestaurants))
        
        let rankedNum = this.state.ranked + 1;
        let unrankedNum = this.state.unranked - 1;
        
        this.setState({...this.state, unrankedRestaurants, rankedRestaurants, ranked: rankedNum, unranked: unrankedNum})
        this.optionsInstructions(rankedNum,unrankedNum)
    }

    removeFromResults = (value) => {
        // getting the index of the restaurant clicked in the "results" array
        let index = this.state.results.indexOf(value)
        let unrankedRestaurants = this.state.restaurants;
        let rankedRestaurants = this.state.results;
        // we grab the value, splice it from the results array
        // and push it to the restaurants array
        rankedRestaurants.splice(index, 1)
        unrankedRestaurants.push(value)

        sessionStorage.setItem("restaurants", JSON.stringify(unrankedRestaurants))
        sessionStorage.setItem("results", JSON.stringify(rankedRestaurants))

        let rankedNum = this.state.ranked - 1;
        let unrankedNum = this.state.unranked + 1;

        this.setState({...this.state, unrankedRestaurants, rankedRestaurants, ranked: rankedNum, unranked: unrankedNum})
        this.optionsInstructions(rankedNum, unrankedNum)
    }

    handleInputChange = event => {
        const { name, value } = event.target;
            this.setState({
            [name]: value
        });
    };

    pushVoteToFirebase = () => {
        let voteOwner = sessionStorage.getItem("voteOwner")
        let voteState = sessionStorage.getItem("results")
        let parsedVoteState = JSON.parse(voteState)
        let voteObject = {
            votes: parsedVoteState,
            owner: voteOwner
        }
    API.voteToFirebase(voteObject).then(function(response){
            console.log("response",response.data)
            let voteRecord = [voteOwner, response.data]
            localStorage.setItem("lastVoted",voteRecord)
            sessionStorage.setItem("results",null)
        
        })
        window.location.href = "/results"
    }

    endVote = (userName) => {
        console.log("end vote")
        // let userName = this.state.userName
        console.log(userName)
        API.getVoteSession(userName).then(function(response){
          //DO MAGIC HERE
          console.log(response.data)
        })
      }


    optionsInstructions = (rankedNum, unrankedNum) => {
        let message;
        /* generate instruction message depending on how many options are 
         left to choose from */
        
        // Not chosen anything yet
        if (rankedNum === 0) {
            message = `Remaining options`
        }
        // has ranked more one restaurant, but not all of them
        else if (rankedNum > 0 && unrankedNum !== 0) {
            message = "Remaining options:"
        }        
        // has ranked all restaurants
        else if (unrankedNum === 0) {
            message = "Done!"
        }
        console.log("Message: ", message)
        this.setState({chooseMessage: message})
    } 

    
    render() {
        return (
            <Wrapper>
                <div>
                    {/* <h1>Voting Page</h1> */}
                    <br />
                    <div className="container list-overflow-container results-card">
                        {/* relocation starts here */}
                        <br/>
                        {this.state.results && this.state.results.length ? (
                                <ol type="1">
                                    <h2 className="text-center text-white">My Ranking:</h2>
                                    <br/>
                                    <VoteResults>
                                    {/* <div className="limited-width">
                                        <h4 className="instructions">My Favorites:</h4>
                                    </div> */}
                                    {this.state.results.map(result => (
                                        <RankedRestaurants key={result.id}>
                                            <li className="ordered_items">
                                            {result.name}
                                            <i className="far fa-check-square form-check-input" style={{position:"relative"}} onClick={() => this.removeFromResults(result)} value={result}></i>
                                            </li>
                                        </RankedRestaurants>
                                    ))}
                                    <br />
                                        <div className="container horizontal_align">
                                            <div className="center">
                                                <button type="vote" className="btn btn-lg yellow text-white add-restaurant" onClick={() => this.pushVoteToFirebase()}>Cast Vote</button>
                                            </div>
                                        </div>
                                    </VoteResults>
                                </ol>
                                
                            ) : (
                                    <div className="row"></div>
                                )}
                        
                            {/* Replaced by New Message Logic */}
                            {this.state.results.length < 1 && this.state.restaurants ? 
                                (<h3 className="instructions" style={instructionCustom}>These are the restaurants selected by your vote organizer. <br/>Click on your favorite places to rank them!</h3>) 
                                : 
                                (<div className="row"></div>)}
                        { this.state.restaurants ? (
                            <VoteList>
                                {this.state.results.length > 0 ? 
                                (
                                <div>
                                    <br/>
                                    <h2 className="text-center text-white">{this.state.chooseMessage}</h2>
                                    <br/>
                                </div>) 
                                
                                : (<br/>)}
                                {this.state.restaurants.map(restaurant => (
                                    <RestaurantOption key={restaurant.id}>
                                        {restaurant.name}

                                        <i className="far fa-square form-check-input" style={{position:"relative"}} onClick={() => this.addToResults(restaurant)} value={restaurant} id="defaultCheck"></i>
                                        
                                    </RestaurantOption>
                                ))}
                            </VoteList>
                        ) : (

                                <div className="noresults-card">

                                    <div className="row">
                                        <div className="col-sm-4"></div>
                                        <div className="col-sm-4">
                                            <div className="noresult-block text-white text-center yellow">
                                                <a href="/search">Choose restaurants to vote on!</a>    
                                            </div>
                                        </div>
                                        <div className="col-sm-4"></div>
                                    </div>
                                </div>
                            )}
                            <button className="btn btn-lg text-white yellow" id="end" onClick={() => this.endVote()}>Close vote session</button>
                        </div>
                        
                    </div>
                {/* </div> */}
            </Wrapper>
        )
    }
}

export default Ballot;