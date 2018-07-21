import React, { Component } from "react";
import NavBar from "../../components/NavBar";
import RestaurantOption from "../../components/RestaurantOption";
import VoteList from "../../components/VoteList";
import Wrapper from "../../components/Wrapper";
import "./Ballot.css"
import VoteResults from "../../components/VoteResults";
// import { Bar } from 'react-chartjs-2';
// import API from "../../utils/API";
// import Search from "./Search";


class Ballot extends Component {


    constructor(props) {
        super(props);
        this.state = {
            restaurants: [],
            results: [],
            otherArray: [], 
        }
    }
    // handleResult(event) {
    //     this.setState({ value: event.target.value })
    // }

    componentDidMount() {
        this.loadSessionStorage();
    }

    loadSessionStorage = () => {
        let restaurantsString = sessionStorage.getItem("restaurants")
        var restaurants = JSON.parse(restaurantsString)
        let resultsString = sessionStorage.getItem("results")
        let results
        console.log(restaurants.restaurants)
        if (resultsString === null) {
            results = []
        }
        else {
            results = JSON.parse(resultsString)
        }
        this.setState({...restaurants, restaurants})
        this.setState({...results,results})
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
        this.setState({...this.state, results, restaurants})
    }

    removeFromResults =(value) => {
        // getting the index of the restaurant clicked in the "results" array
        let index = this.state.results.indexOf(value)
        
        
        let left = this.state.results.slice(0, index)
        let right = this.state.results.slice(index + 1)

        let results = [...left, ...right]
        let restaurants = [...this.state.restaurants, value]

        sessionStorage.setItem("restaurants", JSON.stringify(restaurants))
        sessionStorage.setItem("results", JSON.stringify(results))
        
        this.setState({...this.state, results, restaurants})
    }

    handleInputChange = event => {
        const { name, value } = event.target;
            this.setState({
            [name]: value
        });
    };


    render() {
        return (
            <Wrapper>
                <div>
                    <NavBar></NavBar>
                    {/* <h1>Voting Page</h1> */}
                    <br />
                    <div className="container">
                        { this.state.restaurants ? (
                            <VoteList>
                                {this.state.restaurants.map(restaurant => (
                                    <RestaurantOption key={restaurant.id}>
                                        {restaurant}

                                        <i className="far fa-square form-check-input" onClick={() => this.addToResults(restaurant)} value={restaurant} id="defaultCheck"></i>
                                        
                                    </RestaurantOption>
                                ))}
                                

                                {/* <input type="text" className="result-block" value={this.state.newItem}
                                // onChange={e => this.updateInput("newItem", e.target.value)}
                                >
                                </input>
                            <button type="add" className="btn btn-primary add-restaurant" onClick={() => this.addItem()}>Add a Restaurant</button> */}
                            </VoteList>
                        ) : (

                                <div className="noresults-card">

                                    <div className="row">
                                        <div className="col-sm-4"></div>
                                        <div className="col-sm-4">
                                            <a href="/search" className="noresult-block text-white text-center yellow">Choose restaurants to vote on!</a>
                                        </div>
                                        <div className="col-sm-4"></div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <br />

                        <div className="container horizontal_align">
                            <div className="center">
                                <button type="vote" className="btn btn-primary add-restaurant">Vote</button>
                            </div>
                        </div>
                        
                        <br />
                        <div className="container">
                            {this.state.results && this.state.results.length ? (
                                <ol type="1">
                                    <VoteResults>
                                        {/* {this.state.results.map(result => (
                                            <li className="ordered_items" key={result.id}>
                                                {result} 
                                                <i className="far fa-check-square" onClick={()=>this.removeFromResults(result)}></i>
                                            </li>
                                        ))} */}
                                 
                                    {this.state.results.map(result => (
                                        <RestaurantOption key={result.id}>
                                            <li className="ordered_items">
                                            {result}
                                            <i className="far fa-check-square form-check-input" onClick={() => this.removeFromResults(result)} value={result}></i>
                                            </li>
                                        </RestaurantOption>
                                    ))}
                                    </VoteResults>
                                </ol>
                            ) : (
                                    <div className="row"></div>
                                )}
                        </div>
                    </div>
                {/* </div> */}
            </Wrapper>
        )
    }
}

export default Ballot;