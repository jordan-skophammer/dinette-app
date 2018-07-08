
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Ballot from "./pages/Ballot";
import LogIn  from "./pages/LogIn";
import Search from "./pages/Search";
import User from "./pages/User"
import './App.css';
// import logo from './logo.svg';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/Ballot" component={Ballot} />
      <Route path="/LogIn" component={LogIn} />
      <Route path="/Search" component={Search} />
      <Route path="/User" component={User} />
    </div>
  </Router>
);

export default App;