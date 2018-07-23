import React from "react";
import "./Wrapper.css"

const Wrapper = (props) => (

    <div>
        <div className="wrapper">
            <div className="wrapper-img">
                {/* <img src="../../restaurant.jpg" alt=""/> */}
            </div>
            {props.children}
        </div>
    </div>

);

export default Wrapper;