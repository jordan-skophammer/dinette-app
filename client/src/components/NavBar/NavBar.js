import React from "react";
import "./NavBar.css";

const NavBar = props => (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="/">Dinette</a>
  <button className="navbar-toggler hidden-sm-up ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon ml-auto"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto navbar-right">
      <li className="nav-item active">
        <a className="nav-link" href="/LogIn">Login <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active">
          <a className="nav-link" href="/search">Search <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="/ballot">Vote <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="/roulette">Roulette <span className="sr-only">(current)</span></a>
      </li>
    </ul>
  </div>
</nav>
)
export default NavBar;