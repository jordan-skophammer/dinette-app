import React, { Component } from "react";
import VoteModal from "../../components/VoteCreatedModal";
import { ModalFooter} from 'reactstrap'
import API from "../../utils/API"

class SelectedRestaurants extends Component {

    constructor(props) {
        super(props);
        this.state = {
            voteModal: false
        }
    }

    toggleVoteModal() {
        this.setState({voteModal: !this.state.voteModal})
    }

    createFireBaseVoteSession(userName){
        this.setState({voteModal: true})
        console.log(`Local user: ${userName}`);
        let restaurantsArray = sessionStorage.getItem("restaurants")
        sessionStorage.setItem("voteOwner", "dummy owner")
        console.log(restaurantsArray, ' is restaurantsArray')
        let voteObject = {

            username: userName,
            restaurantsArr: restaurantsArray
        }
        console.log("vote session info:", this.props.firstName)

        // API.makeVoteSession(sessionStorage.getItem("restaurants"))
        API.makeVoteSession(voteObject)
        
    }

    render () {
    let selectedJSX;
    let buttonJSX;
    
    {this.props.votingArray.length > 0 ? (
        
        selectedJSX = (
            <div className="row picker-card-selected">
                    {this.props.votingArray.length >= 1 ? (
                        this.props.votingArray.map(restaurant => (
                            <div className="col-sm-6 col-md-4">
                            <div key={restaurant.id} className="result-block-selected col-sm-10 col-md-12">
                                <div className="grouping-nested-elements">
                                    <div className="restaurant-name">
                                        {restaurant.name}
                                    </div>
                                    <div className="button-div">
                                        <button className="delete" onClick={() => this.props.removeFromSessionStorage(restaurant)} value={restaurant.name}>✗</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-1"></div>
                            </div>
                        ))

                    ) : (
                        <div></div>
                    )}
            </div>
        )

    ) : (selectedJSX = (<br />))}
        
        
    {this.props.votingArray.length > 1 && this.props.votingArray.length < 6 ? (
        buttonJSX = (
            <div className="row">
                <div className="col-sm-4"></div>
                <div className="col-sm-4">
                    {/* a place for ternary */}
                    {this.props.loggedIn ? 
                    (
                        <button className="btn btn-lg yellow text-white" id="saveRestaurants" onClick={() => this.createFireBaseVoteSession(this.props.userName)}>Add to Group Vote</button>
                    ) : (
                        <a href="/account"><button className="btn btn-lg yellow text-white">Sign up/Log in to start a ballot</button></a>
                    )
                }
                
                </div>
                <div className="col-sm-4"></div>
            </div>
        )) : (
            buttonJSX = (
                <div className="row">
                </div>
            )
            )}
            
            return (
                <div>
                    {selectedJSX}
                    <p>{this.props.username}</p>
                    {buttonJSX}
                    <VoteModal
                        toggle = {this.toggleVoteModal}
                        modal = {this.state.voteModal}
                    >
                        <ModalFooter>
                            <button type="button" className="btn yellow text-white" onClick= {() => this.toggleVoteModal()}>Close</button>
                        </ModalFooter>
                    </VoteModal>
                </div>

            ) 
        }
        }

    // }
    export default SelectedRestaurants;