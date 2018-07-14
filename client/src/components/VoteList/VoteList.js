import React from "react";
import "./VoteList.css"


const VoteList = ({ children }) => {
    return (
        <div className="list-overflow-container results-card">
            <ul className="list-group">
                {children}
            </ul>
        </div>
    );
};
export default VoteList;