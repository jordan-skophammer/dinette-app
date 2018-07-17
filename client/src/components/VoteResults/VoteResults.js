import React from "react";

import "./VoteResults.css"
const VoteResults = props => (
    <div className="list-overflow-container results-card">
        <div className="result-block" >
        {props.children}                 
        </div>
    </div>
    )

/*<div className="list-overflow-container results-card">
            <ul className="list-group">
                {children}
            </ul>
        </div>*/
export default VoteResults;
