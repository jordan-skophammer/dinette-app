import React, { Component } from "react";
import NavBar from "../../components/NavBar";
class Ballot extends Component {
    render() {
        return (
            <div>
                <NavBar></NavBar>
                <h1>Voting Page</h1>
                <div className="list-group">
                    <button type="button" className="list-group-item">Option 1</button>
                    <button type="button" className="list-group-item">Option 2</button>
                    <button type="button" className="list-group-item">Option 3</button>
                    <button type="button" className="list-group-item">Add Option</button>
                    </div>
                    <h2>Other components</h2>
                </div>
                )
            }
        }
        
export default Ballot;