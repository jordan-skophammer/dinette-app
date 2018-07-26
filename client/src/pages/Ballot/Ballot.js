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
            sendAwayMsg: "Thank you for participating to the vote!"
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
        let restaurantsString = sessionStorage.getItem("restaurants")
        let restaurants = JSON.parse(restaurantsString)
        let restaurantsVal = restaurants.restaurants
        let resultsString = sessionStorage.getItem("results")
        let results;
        console.log("restaurantsVal: ", restaurantsVal)
        if (resultsString === null) {
            results = []
        }
        else {
            results = JSON.parse(resultsString)
        }
        this.setState({...restaurants, restaurantsVal})
        this.setState({...results,results})
        this.setState({unranked: restaurantsVal.length})
        // console.log(restaurantsVal)
        console.log(restaurantsVal)
    }

    addToResults = (value) => {
        // getting the index of the restaurant clicked in the "restaurant" array
        let index = this.state.restaurants.indexOf(value)
        
        let left = this.state.restaurants.slice(0, index)
        let right = this.state.restaurants.slice(index+1)
        
        let restaurants = [...left, ...right]
        let results = [...this.state.results, value]


        sessionStorage.setItem("restaurants", JSON.stringify(restaurants))
        sessionStorage.setItem("results", JSON.stringify(results))
        
        let rankedNum = this.state.ranked + 1;
        let unrankedNum = this.state.unranked - 1;
        
        this.setState({...this.state, results, restaurants, ranked: rankedNum, unranked: unrankedNum})
        this.optionsInstructions(rankedNum,unrankedNum)
    }

    removeFromResults = (value) => {
        // getting the index of the restaurant clicked in the "results" array
        let index = this.state.results.indexOf(value)
        
        let left = this.state.results.slice(0, index)
        let right = this.state.results.slice(index + 1)

        let results = [...left, ...right]
        let restaurants = [...this.state.restaurants, value]

        sessionStorage.setItem("restaurants", JSON.stringify(restaurants))
        sessionStorage.setItem("results", JSON.stringify(results))

        let rankedNum = this.state.ranked - 1;
        let unrankedNum = this.state.unranked + 1;

        this.setState({...this.state, results, restaurants, ranked: rankedNum, unranked: unrankedNum})
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
        API.voteToFirebase(voteObject)
        sessionStorage.setItem("results",null)

    }
    optionsInstructions = (rankedNum, unrankedNum) => {
        let message;
        /* generate instruction message depending on how many options are 
         left to choose from */
        console.log("unranked: ", unrankedNum)
        console.log("ranked: ", rankedNum)
        // Not chosen anything yet
        if (rankedNum === 0) {
            message = `All options`
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
                        
                        {this.state.results && this.state.results.length ? (
                                <ol type="1">
                                    <VoteResults>
                                    <div className="limited-width">
                                        <h4 className="instructions">My Favorites:</h4>
                                    </div>
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
                                                <button type="vote" className="btn btn-primary add-restaurant" onClick={() => this.pushVoteToFirebase()}>Vote</button>
                                            </div>
                                        </div>
                                    </VoteResults>
                                </ol>
                                
                            ) : (
                                    <div className="row"></div>
                                )}
                        
                            {/* Replaced by New Message Logic */}
                            {this.state.results.length < 1 && this.state.restaurants ? 
                                (<h3 className="instructions" style={instructionCustom}>These are the options selected by your vote organizer. <br/>Click on your favorite places to rank them!</h3>) 
                                : 
                                (<div className="row"></div>)}
                        { this.state.restaurants ? (
                            <VoteList>
                                {this.state.results.length > 0 ? 
                                (<div className="limited-width">
                                    <h4 className="instructions">{this.state.chooseMessage}</h4>
                                </div>) : (<br/>)}
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
                        </div>
                        
                    </div>
                {/* </div> */}
            </Wrapper>
        )
    }
}

export default Ballot;