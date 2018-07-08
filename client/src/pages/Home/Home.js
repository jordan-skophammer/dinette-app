import React, { Component } from "react";
import "./Home.css"

class Home extends Component {
    render () {
        return (
        <div className="wrapper">
            {/* navbar */}
            <br/>
            <div className="container">
                <h1 className="text-center title">Dinette</h1>
                <br/>
                <div className="row">
                    <button className="btn btn-danger btn-lg">Search Restaurants</button>
                </div>
                <div className="row">
                    <button className="btn btn-danger btn-lg">Start a Group Vote</button>
                </div>
                <div className="row">
                    <button className="btn btn-danger btn-lg">Restaurant Roulette</button>
                </div>

            </div>
        </div>
        )}
}

export default Home;