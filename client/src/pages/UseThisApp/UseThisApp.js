import React from "react";
import "./UseThisApp.css";
import Wrapper from "../../components/Wrapper"

const UseThisApp = () => (
    <Wrapper>
    <br/>
    <div className="container">
            <div className="guide">
                <h1 className="text-center orange-text" id="toTop">How to Use This App</h1>
                <br/>
                <div className="row">
                
                    <div className="guideLinks col-md-3">
                        <a href="#setUp" className="orange-text">Set Up a Group Vote</a>
                        <a href="#vote" className="orange-text">Vote</a>
                        <a href="#getResults"className="orange-text">Get Your Group Vote Results</a>
                        <a href="#rouletteGuide"className="orange-text">Play Restaurant Roulette</a>
                        <a href="#notes" className="orange-text">Notes</a>
                    </div>
                    <div className="col-md-9">
                        <h3 id="setUp">Set Up a Group Vote</h3>
                            <ul>
                                <li>First, go to the Search page to look up restaurants using a zip code, address or land mark.</li>
                                <li> Click the + to select restaurants. You can search multiple locations and unselect restaurants before creating your group vote.</li>
                                <li>At the bottom of the search page, click "Add to Group Vote" to finalize your selections and add them to your group ballot.</li>
                                <li>Send your friends the code for your group vote ballot. When they come to Dinette, they will enter that on the Join Vote page to access your ballot.</li>
                            </ul>
                        <h3 id="vote">Vote</h3>
                            <ul>
                                <li>Check the box next to each restaurant to rank them in the order of your preference.</li>
                            </ul>
                        <h3 id="getResults">Get Your Group Vote Results</h3>
                            <ul>
                                <li>Go to your account page.</li>
                                <li>From the account page, you can close your voting session and we'll calculate the winner based on ranked choice voting. This gives you the restaurant most liked by the most people!</li>
                            </ul>
                        <h3 id="rouletteGuide">Play Restaurant Roulette</h3>
                            <ul>
                                <li>Feeling lucky (or just indecisive)? On the search page, type in a zip code or landmark and hit Roulette to let us select one restaurant for you.</li>
                            </ul>
                        <h3 id="notes">Notes</h3>
                            <ul>
                                <li>You must be signed up and logged in to create a vote session and search but anyone can join a group vote.</li>
                                <li>Users can only have one open ballot at a time. Once you've closed your current ballot you can start a new one.</li>
                            </ul>
                        <br/>
                        <a href="#toTop" className="orange-text">Back to top</a>
                        
                    
                    </div>
                </div>

            </div>

    </div>
        </Wrapper>
)

export default UseThisApp;