import React from "react";
import "./Modal.css"

const Modal = ({photos, firstPhoto, restName, phone, address, hours, rating, reviews}) => (
    <div className="modal fade" id="detailsModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content orange text-white">
                <div className="modal-body">


                    {/* <div className="photos-holder"> */}
                        {/* <img className="rest-img" src={photo} alt=""/> */}

                        <div id="carouselExampleControls" className="carousel slide photos-holder" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="rest-img" src={firstPhoto} alt=""/>
                                </div>

                                {photos.slice(1).map(url => (
                                    <div className="carousel-item">
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



                    {/* </div> */}
                    <br/>

                    <h3 id="restName">{restName}</h3>
                    <p>{address}</p>
                    <p>{phone}</p>

                    <p><b>Hours:</b></p>
                    {hours.map(day => (
                        <p className="hours">{day}</p>
                    ))}
                    <br/>

                    <p><b>Rating: {rating}</b></p>
                    <br/>

                    <p><b>Reviews</b></p>
                    <div className="reviews-holder">
                        {reviews.map(review => (
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










export default Modal;