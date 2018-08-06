import React from "react";

const SearchResults = (props) => (
    <div className={"row orange " + props.visibility}>
                        
        <div className="col-md-12 pick-card">
                <h3 className="text-white text-center">Search Results <i className= "fas fa-info-circle" onClick={props.handleInstructionsModal}></i></h3>
        </div>
        <br />
        <div className="col-md-12 orange" id="search-results-card">
                {/* <h3 className="text-white text-center">Search Results</h3>
            <h3 className="instructions-small">Click on the + to add to a group vote</h3> */}
                {props.results}
        </div>
    </div>
)

export default SearchResults;

