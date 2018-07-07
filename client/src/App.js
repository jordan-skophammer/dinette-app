import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/Ballot";
import Blog from "./pages/Login";
import Contact from "./pages/Search";
import User from "./pages/User"

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/blog" component={Blog} />
      <Route path="/contact" component={Contact} />
      <Route path="/user" component={User} />
    </div>
  </Router>
);

export default App;