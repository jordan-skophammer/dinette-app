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
    this.findWinner = this.findWinner.bind();
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

    // Rank Choice Voting
    
    findWinner = (candidates, votes) => {
        function removeCandidates(voteList, lowestCandidates) {
            const result = [];
            voteList.forEach(function (oneSetOfVotes) {
                result.push(oneSetOfVotes.filter(function (singlePreference) {
                    return lowestCandidates.indexOf(singlePreference) === -1;
                }));
            });
            return result;
        }
        
        function calcTallies(voteList) {
            let result;
            let tallies;
        
            tallies = {};
            voteList.forEach(function (oneSetOfVotes) {
                const topVote = oneSetOfVotes[0];
        
                if (!topVote) {
                    return;
                }
        
                if (!tallies[topVote]) {
                    tallies[topVote] = 0;
                }
        
                tallies[topVote] += 1;
            });
        
            result = {
                highest: [],
                highestCount: 0,
                lowest: [],
                lowestCount: voteList.length,
            };
        
            Object.keys(tallies).forEach(function (index) {
                const score = tallies[index];
        
                if (result.highestCount < score) {
                    result.highestCount = score;
                    result.highest = [index];
                } else if (result.highestCount === score) {
                    result.highest.push(index);
                }
        
                if (result.lowestCount > score) {
                    result.lowestCount = score;
                    result.lowest = [index];
                } else if (result.lowestCount === score) {
                    result.lowest.push(index);
                }
            });
        
            result.highestPct = result.highestCount / voteList.length;
            result.LowestPct = result.lowestCount / voteList.length;
        
            return result;
        }
        
        function winner(candids, highest) {
            let out;
        
            out = [];
            highest.forEach(function (indexPlusOne) {
                if (candids[indexPlusOne - 1]) {
                    out.push(candids[indexPlusOne - 1]);
                }
            });
        
            if (out.length) {
                return out.join(' + ');
            }
        
            return 'no winner';
        }

        if (!Array.isArray(candidates) || !candidates.length) {
            console.log('no candidates');
            return;
        }
    
        if (!Array.isArray(votes) || !votes.length) {
            console.log('no votes');
            return;
        }
    
        let tallies;
    
        while (true) {
            tallies = calcTallies(votes);
    
            if (tallies.highestPct >= 0.5) {
                return winner(candidates, tallies.highest);
            }
    
            if (tallies.lowestPct === tallies.highestPct) {
                return winner(candidates, tallies.highest);
            }
    
            votes = removeCandidates(votes, tallies.lowest);
        }
    }
    // END RCV Logic use function findWinner(candidates, votes) to get results

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
        let votesPreParsed = []
      
        console.log("restaurants",votes)
        let trash = votes.shift()
        console.log("candidate" ,candidates)
        let i = 0
        votes.map(ballot => {
          votesPreParsed.push([])
          let r = 0
          ballot.map(restaurant=>{
            votesPreParsed[i].push([])
            candidates.map(candidate=>{
              if(candidate===restaurant.name){
                votesPreParsed[i][r] = (candidates.indexOf(candidate)+1).toString()
              }
            })
            r++
          })
          i++
        })

        console.log("votes unparsed",votesPreParsed)
        // let votesParsed = []
        // let iter = 0
        // votesPreParsed.map(ballot=>{
        //   votesParsed.push([])
        //   ballot.map(vote=>{
        //     votesParsed[iter].unshift(vote)
        //   })
        //   iter++
        // })
        // console.log("votes parsed",votesParsed)
        // console.log("check", votesPreParsed)

        //******************DO YOUR MAGIC HERE!!! */

        let winnerName = findWinner(candidates, votesPreParsed)
        function removeCandidates(voteList, lowestCandidates) {
          const result = [];
          voteList.forEach(function (oneSetOfVotes) {
              result.push(oneSetOfVotes.filter(function (singlePreference) {
                  return lowestCandidates.indexOf(singlePreference) === -1;
              }));
          });
          return result;
      }
      
      function calcTallies(voteList) {
          let result;
          let tallies;
      
          tallies = {};
          voteList.forEach(function (oneSetOfVotes) {
              const topVote = oneSetOfVotes[0];
      
              if (!topVote) {
                  return;
              }
      
              if (!tallies[topVote]) {
                  tallies[topVote] = 0;
              }
      
              tallies[topVote] += 1;
          });
      
          result = {
              highest: [],
              highestCount: 0,
              lowest: [],
              lowestCount: voteList.length,
          };
      
          Object.keys(tallies).forEach(function (index) {
              const score = tallies[index];
      
              if (result.highestCount < score) {
                  result.highestCount = score;
                  result.highest = [index];
              } else if (result.highestCount === score) {
                  result.highest.push(index);
              }
      
              if (result.lowestCount > score) {
                  result.lowestCount = score;
                  result.lowest = [index];
              } else if (result.lowestCount === score) {
                  result.lowest.push(index);
              }
          });
      
          result.highestPct = result.highestCount / voteList.length;
          result.LowestPct = result.lowestCount / voteList.length;
      
          return result;
      }
      
      function winner(candids, highest) {
          let out;
      
          out = [];
          highest.forEach(function (indexPlusOne) {
              if (candids[indexPlusOne - 1]) {
                  out.push(candids[indexPlusOne - 1]);
              }
          });
      
          if (out.length) {
            //   return out.join(' + ');
              return out[0];
          }
          
        //   return 'no winner';
      }
      function findWinner(candidates, votes){
      if (!Array.isArray(candidates) || !candidates.length) {
          console.log('no candidates');
          return;
      }
  
      if (!Array.isArray(votes) || !votes.length) {
          console.log('no votes');
          return;
      }
  
      let tallies;
  
      while (true) {
          tallies = calcTallies(votes);
  
          if (tallies.highestPct >= 0.5) {
              return winner(candidates, tallies.highest);
          }
  
          if (tallies.lowestPct === tallies.highestPct) {
              return winner(candidates, tallies.highest);
          }
  
          votes = removeCandidates(votes, tallies.lowest);
      }
    }
  
        console.log("winner", winnerName)
        
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
                  findWinner={this.findWinner}
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