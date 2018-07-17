import React, { Component } from "react";
import "./Modal.css"




class Modal extends Component {

    constructor(props) {
        super(props);

    }

    // componentDidMount() {
    //     this.setState({restName: this.props.restName, photo: this.props.photo})
    // }

    // photo = {this.state.modalArray[0]}
    //         restName = {this.state.modalArray[1]}
    //         address = {this.state.modalArray[2]}
    //         hours = {this.state.modalArray[3]}
    //         phone = {this.state.modalArray[4]}
    //         rating = {this.state.modalArray[5]}
    //         reviews = {this.state.modalArray[6]}

    render () {
        return (

            <div className="modal fade" id="detailsModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content orange text-white">
                       
                        <div className="modal-body">

                                <div className="photos-holder">
                                    <img className="rest-img" src={this.props.photo} alt=""/>
                                </div>
                                <br/>

                                <h3 id="restName">{this.props.restName}</h3>

                                <p>{this.props.address}</p>
                                <p>{this.props.phone}</p>

                                <p><b>Hours:</b></p>
                                {this.props.hours.map(day => (
                                    <p className="hours">{day}</p>
                                ))}
                                
                                <br/>

                                <p><b>Rating: {this.props.rating}</b></p>

                                <br/>

                                <p><b>Reviews</b></p>
                                <div className="reviews-holder">
                                    {this.props.reviews.map(review => (
                                        <div className="result-block">
                                            <p><b>{review[2]}</b></p>
                                            <p className="hours">{review[0]}</p>
                                            <p>{review[4]}</p>
                                        </div>
                                    ))}
                                
                                </div>
                                

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn yellow text-white" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}










export default Modal;