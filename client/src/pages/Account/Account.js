import React, { Component } from "react";
import axios from "axios";
// import React from "react";
import "./Account.css";
import Wrapper from "../../components/Wrapper"
import AccountInfo from "../../components/AccountInfo";
import EditAccountForm from "../../components/EditAccountForm";
import API from "../../utils/API"

class Account extends Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      zipcode: '',
    }
    this.handleSubmit = this.handleSubmit.bind();
    this.handleChange = this.handleChange.bind();
    this.endVote = this.endVote.bind();
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    let updateUser = {};
    if (this.state.userName && this.state.zipcode) {
      updateUser = {
        'local.userName': this.state.userName,
        'zipcode': this.state.zipcode,
      }
    } else if (!this.state.userName && this.state.zipcode) {
      updateUser = {
        'zipcode': this.state.zipcode,
      }
    } else {
      updateUser = {
        'local.userName': this.state.userName,
      }
    }
  


      axios
        .patch("/user/update", updateUser)
        .then(response => {
          console.log(response);
          if (!response.data.errmsg) {
            console.log('success')
            window.location.reload("/account");
          } else {
            console.log("Error:");
            console.log(response.data.errmsg)
          }
        })
    }

    endVote = (userName) => {
      console.log("end vote")
      // let userName = this.state.userName
      console.log(userName)
      API.getVoteSession(userName).then(function(response){
        //DO MAGIC HERE
        console.log(response.data)
        let candidates = response.data.restaurants.map(restaurant => restaurant.name)
        let votes = Object.values(response.data.votes.ballot)
        // let restaurants = response.data.votes.ballot
        let votesParsed = []
      
        console.log("restaurants",votes)
        let trash = votes.shift()
        console.log("candidate" ,candidates)
        let i = 0
        votes.map(ballot => {
          votesParsed.push([])
          let r = 0
          ballot.map(restaurant=>{
            votesParsed[i].push([])
            candidates.map(candidate=>{
              if(candidate===restaurant.name){
                votesParsed[i][r] = (candidates.indexOf(candidate)+1).toString()
              }
            })
            r++
          })
          i++
        })

        console.log(votesParsed)

        //******************DO YOUR MAGIC HERE!!! */
        
        // let winner = response.data.restaurants[1]
        // let winnerObject = ({owner: userName, winner: winner})
        // console.log("Winner is", winner)
        // API.setWinner(winnerObject)

        
      })
    }

    render() {
      return (
        <div>
          <Wrapper>
            <div className="row text-center">
              <div className="col-md-3" />
              <div className="col-md-6">
                <AccountInfo
                  loggedIn={this.props.loggedIn}
                  user={this.props.user}
                  endVote={this.endVote}
                />
              </div>
              <div className="col-md-3" />
            </div>

            <div className="modal" id="editAccountModal" tabIndex="-1" role="dialog">
              <div className="modal-dialog" role="document">
                <div className="modal-content edit-account-modal">
                  <div className="modal-body">
                    <EditAccountForm
                      handleChange={this.handleChange}
                      handleSubmit={this.handleSubmit}
                    />
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn yellow" data-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
          </Wrapper>
        </div>
      )
    }
  }

  export default Account;