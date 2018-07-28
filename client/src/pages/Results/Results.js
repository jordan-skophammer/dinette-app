import React, { Component } from "react";
import Wrapper from "../../components/Wrapper";
import "./Results.css"



class Results extends Component {

    constructor(props) {
        super(props);
        this.state = {
            winner: "none",
            visibility: "hidden"

        }
    }
    componentDidMount() {
        this.loadSessionStorage();
    }

    loadSessionStorage = () => {
        let winnerString = sessionStorage.getItem("winner")
        // let winnerStringParsed = JSON.parse(winnerString)
        console.log(winnerString)

        if (winnerString === "no winner") {
            console.log("no winners")
        } else {
            this.setState({ winner: winnerString })
            console.log(this.state.winner)
        }
    }



    render() {
        let renderedMessage;

        if (this.state.winner === "none"){
            renderedMessage = (
                <div>
                    <h3 className="instructions-small">Results not in! Results will be calculated after the vote is closed.</h3>
                </div>
            )
        } else {
            renderedMessage = (
                <div className="row justify-content-center">
                        <br/>
                            <div className="col-md-8 green winner-section">
                                <h3 className="text-white text-center">Winner:</h3>
                                <h1 className="text-white text-center">{this.state.winner}</h1>
                            </div>
                        
                </div>
            )
        }


        return (
            <Wrapper>
                <div>

                    {renderedMessage}
                </div>
            </Wrapper>
                        )
    }
    }

export default Results;