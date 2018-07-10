import React, { Component } from "react";
import "./Home.css"

class Home extends Component {
    render () {
        return (
        <div className="wrapper">
            {/* navbar */}
            <br/>
            <div className="container home">
                <h1 className="text-center title">Dinette</h1>
                <br/>
                <div className="row">
                    <button className="btn btn-danger btn-lg" onClick={() => window.location.href='/search'}>Search Restaurants</button>
                </div>
                <div className="row">
                    <button className="btn btn-danger btn-lg" onClick={() => window.location.href='/ballot'}>Start a Group Vote</button>
                </div>
                <div className="row">
                    <button className="btn btn-danger btn-lg" onClick={() => window.location.href='/roulette'}>Restaurant Roulette</button>
                </div>
                <div className="row text-center justify-content-center">
                    <a href="/login" className="login">Log In</a> or <a href="/SignUp" className="login">Sign Up</a>
                </div>
                
            </div>
        </div>
        )}
}

export default Home;