import React from "react";

import "./VoteResults.css"

            const VoteResults = props => (
                <ul>
            <li className="result-block">
            {props.children}                 
            </li>
                </ul>
            )
    // }


export default VoteResults;
