import React, { Component } from "react";
import Wrapper from "../../components/Wrapper";



class Results extends Component {

    constructor(props) {
        super(props);
        this.state = {
            winner: "",
            visibility: "hidden"

        }
    }
    componentDidMount() {
        this.loadSessionStorage();
    }

    loadSessionStorage = () => {
        let resultsString = sessionStorage.getItem("restaurants")
        let winnerObj = JSON.parse(resultsString)
        console.log(winnerObj)


        if (winnerObj.winner.name) {
            
            this.setState({ winner: winnerObj.winner.name })
            console.log(winnerObj.winner.name)
            console.log(this.state.winner)
            // console.log(this.state.winner)
        } else {
            console.log("no winners")
            // console.log(sessionStorage)

        }
    }



    render() {
        let renderedMessage;

        if (this.state.winner.length < 1){
            renderedMessage = (
                <div>
                    <h3 className="instructions-small">Results not in! Results will be calculated after the vote is closed.</h3>
                </div>
            )
        } else {
            renderedMessage = (
                <div className="row ">

                        <div>
                            <div className="col-md-12 pick-card orange">
                                <h3 className="text-white text-center">Winner!</h3>
                            </div>
                            <div className="col-md-12 orange text-white text-center" id="search-results-card">
                                {this.state.winner}
                            </div>
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