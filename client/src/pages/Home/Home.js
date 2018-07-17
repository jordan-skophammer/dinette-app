import React, { Component } from "react";
import Wrapper from "../../components/Wrapper"
import NavBar from "../../components/NavBar"
import "./Home.css"

class Home extends Component {
    render () {
        return (
        <Wrapper>
            <NavBar />
            <br/>
            <div className="home">
                <h1 className="text-center title">Dinette</h1>
                
                <div className="row home-btn justify-content-center">
                    <button className="btn btn-home btn-lg green text-white" onClick={() => window.location.href='/search'}>Search Restaurants</button>
                </div>
                <div className="row home-btn justify-content-center">
                    <button className="btn btn-home btn-lg yellow-btn text-white" onClick={() => window.location.href='/ballot'}>Start a Group Vote</button>
                </div>
                <div className="row home-btn justify-content-center">
                    <button className="btn btn-home btn-lg  orange text-white" onClick={() => window.location.href='/roulette'}>Restaurant Roulette</button>
                </div>
                <div className="row home-btn text-center justify-content-center text-white">
                    <a href="/login" className="login">Log In</a> <span class="or">&nbsp; or &nbsp; </span><a href="/SignUp" className="login">Sign Up</a>
                </div>    
            </div>
        </Wrapper>
        )}
}

export default Home;