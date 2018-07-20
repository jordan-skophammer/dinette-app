import React from "react";

import "./VoteResults.css"

const VoteResults = props => (
    <div>
        <div>
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
