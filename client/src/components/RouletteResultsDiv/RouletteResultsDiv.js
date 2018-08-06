import React from 'react';

const RouletteResultsDiv = (props) => (
    <div className={"row " + props.rouletteVisable}>
        <div className="col-md-12 pick-card orange">
            <h2 className="text-white text-center">Your Pick</h2>
            <br />
            <div className="result-block">
                <div className="form-check">
                    <label className="form-check-label" htmlFor="defaultCheck">
                        {props.displayRoulette}
                    </label>
                </div>
            </div>
        </div>
    </div>
)

export default RouletteResultsDiv;