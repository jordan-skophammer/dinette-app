import React, { Component } from "react";
import Wrapper from "../../components/Wrapper";



class Results extends Component {

    constructor(props) {
        super(props);
        this.state = {
            winner: []
        }
}
componentDidMount(){
    this.loadSessionStorage();
}

loadSessionStorage = () => {
    if (sessionStorage.getItem("winner")){
    let resultsString = sessionStorage.getItem("winner")
    let winner = JSON.parse(resultsString)
    this.setState({...winner, winner})
    } else {
        console.log("no winners")
    }
}


render() {
    return (
        <Wrapper>
            <div>
                {/* {this.state.winner ? (
            <div className="row ">
                <div className="col-md-12 pick-card orange">
                        <h3 className="text-white text-center">Vote Results</h3>
                        </div>
<br/>
                    <div className="col-md-12 orange" id="search-results-card">
                        
                        {winner}
                    </div>
                </div>
                ):(
                    <h3 className="instructions-small">Results not in!</h3>
                )
                } */}
                </div>
           </Wrapper>
    )
}
}
export default Results;