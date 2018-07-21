
import React, { PureComponent } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Ballot from "./pages/Ballot";
import LogIn from "./pages/LogIn";
import Search from "./pages/Search";
import User from "./pages/User";
import SignUp from "./pages/SignUp";
import Roulette from "./pages/Roulette";
import Account from "./pages/Account";
import JoinVote from "./pages/JoinVote";
import './App.css';
import NavBar from "./components/NavBar";
// import logo from './logo.svg';
const axios = require("axios");
// const API = require("./utils/API");

class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      user: {
        firstName: "first",
        lastName: "last",
        zipcode: 55104,
        local: {
          userName: "user"
        },
      }
    }
    this.logout = this.logout.bind(this)
  }

  
  componentDidMount() {
    axios.get('/user/id').then(response => {
      if (response.data && this.state.loggedIn === false) {
        console.log('THERE IS A USER')
        this.setState({
          loggedIn: true,
          user: response.data
        })
        console.log(this.state);
      } else if (response.data && this.state.user === response.data) {
        console.log("user data already stored in state");
      } else {
        console.log("NO USER");
        this.setState({
          loggedIn: false,
          user: null
        })
        // console.log(this.state);
      }
    }).catch(error => {
      if (error.response) {
        // console.log(error.response.data);
        console.log(error.response.status);
        // console.log(error.response.headers);            
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }
      console.log(error.config);
    })
  }

  logout(event) {
    event.preventDefault()
    console.log('logging out')
    axios.post('/auth/logout').then(response => {
      if (response.status === 200) {
        this.setState({
          loggedIn: false,
          user: null
        })
      }
    })
  }

  render() {
    return (
      <div>
      <NavBar 
        loggedIn={this.state.loggedIn}
        logout={this.logout}
      />
      <Router>
        <div>
          <Route exact path="/" render={ () => <Home loggedIn={this.state.loggedIn} user={this.state.user} /> }  />
          <Route path="/Ballot" render={ () => <Ballot loggedIn={this.state.loggedIn} user={this.state.user} /> } />
          <Route path="/LogIn" component={LogIn} />
          <Route path="/Search" render={ () => <Search loggedIn={this.state.loggedIn} user={this.state.user} />} />
          <Route path="/User" component={User} />
          <Route path="/SignUp" component={SignUp} />
          <Route path="/Roulette" component={Roulette} />
          <Route path="/Account" render={ () => <Account loggedIn={this.state.loggedIn} user={this.state.user} /> } />
          <Route path="/JoinVote" component={JoinVote}/>
        </div>
      </Router>
      </div>
    )
  }
}

export default App;