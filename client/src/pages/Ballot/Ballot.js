import React, { Component } from "react";
import NavBar from "../../components/NavBar";
import RestaurantOption from "../../components/RestaurantOption";
import VoteList from "../../components/VoteList";
import Wrapper from "../../components/Wrapper";
import "./Ballot.css"

// import VoteResults from "../../components/VoteResults";
// import { Bar } from 'react-chartjs-2';
// import API from "../../utils/API";
// import Search from "./Search";

class Ballot extends Component {

    state = {
        restaurants: []
    }
    componentDidMount() {
        this.loadRestaurants();
    }

    loadRestaurants = () => {
        let restaurantsString = sessionStorage.getItem("saved")
        var restaurants = JSON.parse(restaurantsString)
        // var restaurants = [];
        // for (var i = 0; i < restaurantArray.length; i++) {
        //     restaurants.push(restaurantArray[i].name);
        // }
        this.setState({ restaurants: restaurants })
        console.log(restaurants)
    }





    render() {
        return (
            <Wrapper>
                <div>
                    <NavBar></NavBar>
                    {/* <h1>Voting Page</h1> */}
                    <br />

                    {this.state.restaurants && this.state.restaurants.length ? (
                        <VoteList>
                            {this.state.restaurants.map(restaurant => (
                                <RestaurantOption key={restaurant.id}>
                                    {restaurant}
                                </RestaurantOption>
                            ))}
                                                        <input type="text" className="result-block" value={this.state.newItem}
                                onChange={e => this.updateInput("newItem", e.target.value)}></input>
                            <button type="add" className="btn btn-primary add-restaurant" onClick={() => this.addItem()}>Add a Restaurant</button>
                        </VoteList>
                    ) : (
                            <div className="results-card">
                            <p className="result-block">choose some restaurants to vote on</p>
                            <input type="text" className="result-block" value={this.state.newItem}
                                onChange={e => this.updateInput("newItem", e.target.value)}></input>
                            <button type="add" className="btn btn-primary add-restaurant" onClick={() => this.addItem()}>Add a Restaurant</button>
                            </div>
                        )}

                    <button type="vote" className="btn btn-primary add-restaurant">Vote</button>
                    {/* <VoteResults> */}
                    {/* {this.state.restaurants.map(restaurant => (
                        <RestaurantOption key={restaurant.id}>
                        </RestaurantOption>
                    ))} */}

                    {/* <Bar data={this.state.chartData} /> */}

                    {/* </VoteResults> */}
                </div>
            </Wrapper>
        )
    }
}

export default Ballot;