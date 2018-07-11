import React, { Component } from "react";
import NavBar from "../../components/NavBar";
import RestaurantOption from "../../components/RestaurantOption";
import VoteList from "../../components/VoteList";
import VoteResults from "../../components/VoteResults";
import {Bar} from 'react-chartjs-2';
import API from "../../utils/API";

class Ballot extends Component {
    
        state = {
            restaurants: [],
            name: "",
            url: ""
        }
        componentDidMount() {
            this.loadRestaurants();
          }

          loadRestaurants = () => {
            API.getrestaurants()
              .then(res =>
                this.setState({ restaurants: res.data, name: "", url: "" })
              )
              .catch(err => console.log(err));
          };

          render() {
        return (
            <div>
                <NavBar></NavBar>
                <h1>Voting Page</h1>

                {this.state.restaurants.length ? (
                    <VoteList>
                        {this.state.restaurants.map(restaurant => (
                            <RestaurantOption key={restaurant._id}>
                                        {restaurant.url}
                            </RestaurantOption>
                        ))}
                    </VoteList>
                ) : (
                        <h3>choose some restaurants to vote on</h3>
                    )}

                    <button type="add" className="btn btn-primary add-restaurant">Add an option</button>
                    <VoteResults>
                        {this.state.restaurants.map(restaurant => (
                            <RestaurantOption key={restaurant._id}>
                            </RestaurantOption>
                        ))}

<Bar data= {this.state.chartData}/>

                    </VoteResults>
            </div>
        )
    }
}

export default Ballot;