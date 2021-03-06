import React, { Component } from "react";
import API from "../../utils/API";
import Wrapper from "../../components/Wrapper";
import "./JoinVote.css";

class JoinVote extends Component {

    constructor(props) {
        super(props);
        this.state = {
            results: [],
            roulettePick: [],
            value: "",
            modalArray: ["photo", "name", "address", [1, 2], "phone", "rating", [1, 2]],
            visibility: "hiddenRoulette"
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value })
    }

    handleSubmit(event) {
        // console.log("Data was submitted: ", this.state.value);
        event.preventDefault();
        API.getVoteSession(this.state.value)
            .then(res => {
                // console.log(res.statusText)
                if (res.status !== 200) {
                    throw new Error(res.statusText)
                }

                if (res.data.winner){

                    console.log("winner",res.data.winner)
                    let winner = JSON.stringify(res.data)
                    sessionStorage.setItem("winner", winner)
                    console.log("pass to results")
                    window.location.href = "/results"

                    return
                }
                if (localStorage.getItem("lastVoted")){
                    sessionStorage.setItem("restaurants",JSON.stringify(res.data))
                    sessionStorage.setItem("voteOwner",this.state.value)
                    sessionStorage.setItem("winner", "no winner")
                    let lastVoted = localStorage.getItem("lastVoted")
                    let lastVotedParsed = lastVoted.split(",")
                    let lastOwner = lastVotedParsed[0]
                    let lastTimestamp = lastVotedParsed[1]
                    let creationStamp = parseInt(res.data.timestamp)
                    if (lastOwner === this.state.value && lastTimestamp > creationStamp){
                        window.location.href = "/results"
                    } else {
                        sessionStorage.setItem("restaurants",JSON.stringify(res.data))
                        sessionStorage.setItem("voteOwner",this.state.value)
                        window.location.href = "/ballot"
                    }
                    

                } else {
                    sessionStorage.setItem("restaurants",JSON.stringify(res.data))
                    sessionStorage.setItem("voteOwner",this.state.value)
                    window.location.href = "/ballot"
                }
                

            })
    }




    // componentDidMount() {
    //     this.search()
    // }



    render() {
        return (
            <Wrapper>
                <br />
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <form onSubmit={this.handleSubmit}>
                                <div className="search_box green row">
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control" id="searchLocation" value={this.state.value} onChange={this.handleChange} placeholder="Enter the username of the Vote Owner"></input>
                                    </div>
                                    <div className="col-sm-3">
                                        <button className="btn btn-lg save text-white yellow" id="searchLocation" onClick={this.joinVote}>Join a Vote Session</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <br />

                </div>
            </Wrapper>
        )
    }
}

export default JoinVote;