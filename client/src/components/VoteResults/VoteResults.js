import React from "react";

import "./VoteResults.css"
// var results = [];
// let votedArray = []

// class VoteResults extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             results: []
//         }
//         this.handleResult = this.handleResult.bind(this);

//     }
//     handleResult(event) {
//         this.setState({ value: event.target.value })
//     }

//     componentDidMount() {
//         this.loadResults();
//     }

//     addToResults = (value) => {
//         votedArray.push(value)
//         sessionStorage.setItem("voted", votedArray)
//         var voteItem = sessionStorage.getItem("voted")

//         console.log(voteItem);

//     }

//     loadResults = () => {
//         let votedString = sessionStorage.getItem("voted")
//         console.log(votedString)
//         var results = JSON.parse(votedString)

//         this.setState({ results: results })
//         console.log(results)
//     }

//     render() {
//         return (
            const VoteResults = props => (
            <li className="result-block" >
            {props.children}                 
            </li>
        
            )
    // }


export default VoteResults;
