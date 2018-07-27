import React, { Component } from "react";
import { Modal, ModalBody} from 'reactstrap';
import "./Modal.css"
export default class Modal2 extends Component {
  
    render() {
        return (
            <div>
            <Modal isOpen={this.props.modal} toggle={this.props.toggle}>
            <div className="orange text-white">
                <ModalBody>
                <div id="carouselExampleControls" className="carousel slide photos-holder" data-ride="carousel">
                        <div className="carousel-inner justify-content-center">
                            <div className="carousel-item active">
                                <img className="rest-img" src={this.props.firstPhoto} alt=""/>
                            </div>

                            {this.props.photos.slice(1).map(url => (
                                <div className="carousel-item" key={url}>
                                    <img className="rest-img" src={url} alt=""/>
                                </div>
                            ))}
                            
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
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
                </ModalBody>
                {this.props.children}
                </div>
            </Modal>
            </div>
        );
    }

  }