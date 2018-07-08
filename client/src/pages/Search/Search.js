import React, { Component } from "react";
import "./Search.css"
import API from "../../utils/API"
import NavBar from "../../components/NavBar"

class Search extends Component {

    state = {
        results: []
    }

    search = () => {
        API.searchRestaurants()
        .then(res => {
            this.setState({results: res})
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
            <h1>Search Page</h1>
            <h2>Other components</h2>
        </div>

        )
    }
}

export default Search;