
// import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Ballot from "./pages/Ballot";
import Login  from "./pages/Login";
import Search from "./pages/Search";
import User from "./pages/User"
import './App.css';
// import logo from './logo.svg';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/Ballot" component={Ballot} />
      <Route path="/Login" component={Login} />
      <Route path="/Search" component={Search} />
      <Route path="/user" component={User} />
    </div>
  </Router>
);

export default App;