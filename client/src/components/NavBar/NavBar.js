import React from "react";
import "./NavBar.css";

const NavBar = props => <Navbar inverse collapseOnSelect>
<Navbar.Header>
  <Navbar.Brand>
    <a href="#brand">Dinette!</a>
  </Navbar.Brand>
  <Navbar.Toggle />
</Navbar.Header>
<Navbar.Collapse>
  <Nav>
    <NavItem eventKey={1} href="#">
      Search
    </NavItem>
    <NavItem eventKey={2} href="#">
      Vote
    </NavItem>
    <NavItem eventKey={2} href="#">
      Roulette
    </NavItem>
  </Nav>
  <Nav pullRight>
    <NavItem eventKey={1} href="#">
      Log Out
    </NavItem>
  </Nav>
</Navbar.Collapse>
</Navbar>;
export default NavBar;