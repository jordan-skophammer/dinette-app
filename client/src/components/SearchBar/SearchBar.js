import React from 'react';

const SearchBar = (props) => (

    <div className="col-md-12">
        <form onSubmit={props.handleSubmit}>
            <div className="search_box green row">
                <div className="col-sm-8">
                    <input type="text" className="form-control" id="searchLocation" value={props.value} onChange={props.handleChange} placeholder="Enter a landmark or zipcode"></input>
                </div>
                <div className="col-sm-2 search-col">
                    <button className="btn btn-lg text-white yellow" id="search" onClick={props.handleSubmit}>Search</button>
                </div>
                <div className="col-sm-2 roulette-col">
                    <button className="btn btn-lg text-white orange" id="roulette" onClick={props.handleRoulette}>Roulette</button>
                </div>
            </div>
        </form>
    </div>
)

export default SearchBar;