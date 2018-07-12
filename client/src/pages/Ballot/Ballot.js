import React, { Component } from "react";
import NavBar from "../../components/NavBar";
import RestaurantOption from "../../components/RestaurantOption";
import VoteList from "../../components/VoteList";
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
        this.setState ({ ...this.state, restaurants: restaurants })
        console.log(restaurants)
    }





    render() {
        return (
            <div>
                <NavBar></NavBar>
                <h1>Voting Page</h1>

                {this.state.restaurants.length ? (
                    <VoteList>
                        {this.state.restaurants.map(restaurant => (
                            <RestaurantOption key={restaurant.id}>
                                { restaurant }
                            </RestaurantOption>
                        ))}
                    </VoteList>
                ) : (
                        <h3>choose some restaurants to vote on</h3>
                    )}

                <button type="add" className="btn btn-primary add-restaurant">Add an option</button>
                {/* <VoteResults> */}
                    {/* {this.state.restaurants.map(restaurant => (
                        <RestaurantOption key={restaurant.id}>
                        </RestaurantOption>
                    ))} */}

                    {/* <Bar data={this.state.chartData} /> */}

                {/* </VoteResults> */}
            </div>
        )
    }
}

export default Ballot;