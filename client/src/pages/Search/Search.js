import React, { Component } from "react";
import "./Search.css"
import API from "../../utils/API"
import NavBar from "../../components/NavBar"
import SearchResults from "../../components/SearchResults"

class Search extends Component {

    state = {
        results: []
    }

    search = () => {
        API.searchRestaurants()
        .then(res => {
            this.setState({results: res.results})
            console.log(res)
        })
    }

    componentDidMount() {
        this.search()
    }

    render () {
        return(
        <div>
            <NavBar/>
            <br/>
            <h2>Search Results</h2>
            {this.state.results.map(restaurant => (
                <SearchResults
                    key = {restaurant.id}
                    restaurantName = {restaurant.name}
                    address = {restaurant.vicinity}
                    image = {restaurant.photos.html_attribution}
                />
            ))}
        </div>

        )
    }
}

export default Search;