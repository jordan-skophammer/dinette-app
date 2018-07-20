import React from "react";
import "./VoteList.css"


const VoteList = ({ children }) => {
    return (
        <div>
            <ul className="list-group">
                {children}
            </ul>
        </div>
    );
};
export default VoteList;