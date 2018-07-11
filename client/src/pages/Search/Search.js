import React, { Component } from "react";
import "./Search.css"
import API from "../../utils/API"
import NavBar from "../../components/NavBar"
import SearchResults from "../../components/SearchResults"
import Wrapper from "../../components/Wrapper"

class Search extends Component {

    state = {
        results: []
    }

    search = () => {
        API.searchRestaurants()
        .then(res => {
            this.setState({results: res.data})
            // console.log(this.state.results)
        })
    }

    componentDidMount() {
        this.search()
    }

    render () {
        return(
        <Wrapper>
            <NavBar/>
            <br/>

            <div className="container">
                <div className="row">
                <div className="col-md-12">
                        <div className="card">
                            <h5 className="card-header text-center">Search Results</h5>
                            <div className="card-body">  
                                
                                {this.state.results.map(restaurant => (
                                    <SearchResults
                                        key = {restaurant.id}
                                        restaurantName = {restaurant.name}
                                        address = {restaurant.vicinity}
                                        image = {restaurant.photos.html_attribution}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </Wrapper>


        )
    }
}

export default Search;