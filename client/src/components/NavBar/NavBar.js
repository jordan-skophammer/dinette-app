import React from "react";
import "./NavBar.css";

const NavBar = props => {
  if (props.loggedIn === true) {
    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="/">Dinette</a>
        <button className="navbar-toggler hidden-sm-up ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon ml-auto"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto navbar-right">
            <li className="nav-item active">
              <a className="nav-link text-light" href="/search">Search <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active">
              <a className="nav-link text-light" href="/joinvote">Vote <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active">
              <a className="nav-link text-light" href="/howtouse">How to Use Dinette <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active">
              <a className="nav-link text-light" href="/account">My Account <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active">
              <a className="nav-link text-light" href="/" onClick={props.logout}>Log Out <span className="sr-only">(current)</span></a>
            </li>
          </ul>
        </div>
      </nav>
    )
  } else {
    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="/">Dinette</a>
        <button className="navbar-toggler hidden-sm-up ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon ml-auto"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto navbar-right">
            <li className="nav-item active">
              <a className="nav-link text-light" href="/search">Search <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active">
              <a className="nav-link text-light" href="/joinvote">Vote <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active">
              <a className="nav-link text-light" href="/howtouse">How to Use Dinette <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active">
              <a className="nav-link text-light" href="/LogIn">Log In <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active">
              <a className="nav-link text-light" href="/SignUp">Sign Up <span className="sr-only">(current)</span></a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default NavBar;