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
            results: []
        }
        // this.handleResult = this.handleResult.bind(this);
    }
    handleResult(event) {
        this.setState({ value: event.target.value })
    }

    componentDidMount() {
        this.loadSessionStorage();
    }

    loadSessionStorage = () => {
        let restaurantsString = sessionStorage.getItem("restaurants")
        var restaurants = JSON.parse(restaurantsString)
        let resultsString = sessionStorage.getItem("results")
        var results = JSON.parse(resultsString)
        this.setState({ restaurants, results })
    }

    addToResults = (value) => {
        let index = this.state.restaurants.indexOf(value)
        console.log(index)
        let left = this.state.restaurants.slice(0, index)
        let right = this.state.restaurants.slice(index+1)
        let restaurants = [...left, ...right]
        let results = [...this.state.results, value]
        

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
                                        <input className="form-check-input" data-state="unchecked" type="checkbox" onClick={() => this.addToResults(restaurant)} value={restaurant} id="defaultCheck"></input>
                                    </RestaurantOption>
                                ))}
                                <button type="vote" className="btn btn-primary add-restaurant">Vote</button>

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
                                            <a href="/search" className="noresult-block text-white text-center yellow">choose some restaurants to vote on</a>
                                        </div>
                                        <div className="col-sm-4"></div>
                                    </div>

                                </div>
                            )}
                        <br />
                        {this.state.results && this.state.results.length ? (
                            <VoteResults>
                                {this.state.results.map(result => (
                                    <div key={result.id}>
                                        {result}
                                    </div>
                                ))}
                            </VoteResults>
                        ) : (
                                <div className="row"></div>
                            )}

                    </div>
                </div>
            </Wrapper>
        )
    }
}

export default Ballot;