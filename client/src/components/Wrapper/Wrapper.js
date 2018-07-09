import React from "react";
import "./Wrapper.css"

const Wrapper = (props) => (

    <div>
        <div className="wrapper">
            {props.children}
        </div>
    </div>

);

// class Wrapper extends Component {
//     render() {
//       return (
//         <div className="wrapper">
//           {this.props.content}
//         </div>
//       );
//     }
//   }

export default Wrapper;