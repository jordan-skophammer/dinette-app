import React from 'react';

const SelectedRestaurants = (props) => {
    return () => {

        {props.votingArray.length > 0 ? (
            <div className="row picker-card-selected">
                {props.votingArray.length >= 1 ? (
                    props.votingArray.map(restaurant => (
                        <div className="col-sm-6 col-md-4">
                        <div key={restaurant.id} className="result-block-selected col-sm-10 col-md-12">
                            <div className="grouping-nested-elements">
                                <div className="restaurant-name">
                                    {restaurant.name}
                                </div>
                                <div className="button-div">
                                    <button className="delete" onClick={() => props.removeFromSessionStorage(restaurant)} value={restaurant.name}>✗</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-1"></div>
                        </div>
                    ))
                ) : (
                        <div>
                        </div>
                    )}
            </div>
        ) : (<br />)}
        {props.votingArray.length > 1 && props.votingArray.length < 6 ? (
            <div className="row">
                <div className="col-sm-4"></div>
                <div className="col-sm-4">
                    {/* a place for ternary */}
                    {props.loggedIn ? 
                    (
                        <button className="btn btn-lg yellow text-white" id="saveRestaurants" onClick={() => props.createFireBaseVoteSession(props.userName)}>Add to Group Vote</button>
                    ) : (
                        <a href="/account"><button className="btn btn-lg yellow text-white">Sign up/Log in to start a ballot</button></a>
                        )
                    }
                
                </div>
                <div className="col-sm-4"></div>
            </div>
        ) : (
                <div className="row">
                </div>
            )}

        }
    }

    export default SelectedRestaurants;