import React, {Component} from "react";
import API from "../../utils/API";
import NavBar from "../../components/NavBar";
import Wrapper from "../../components/Wrapper";
import Modal from "../../components/Modal";
import "./Roulette.css";

class Roulette extends Component {

    constructor(props) {
        super(props);
        this.state = {
            results: [],
            roulettePick: [],
            value: "",
            modalArray: ["photo", "name", "address", [1,2], "phone", "rating", [1,2]],
            visibility: "hiddenRoulette"
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    search = () => {
        API.searchRestaurants()
        .then(res => {
            this.setState({results: res.data})
            this.randomPick(this.state.results)
        })  
    }

    handleChange(event){
        this.setState({value: event.target.value})
    }

    handleSubmit(event){
        // console.log("Data was submitted: ", this.state.value);
        event.preventDefault();
        API.getRestaurants(this.state.value)
            .then(res => {
                // console.log(res.statusText)
                if(res.status !== 200) {
                    throw new Error(res.statusText)
                }
                this.setState({...this.state,results: res.data,visibility: ""})
                this.randomPick(this.state.results)
            })
    }

    randomPick = () => {
        let pick = this.state.results[Math.floor(Math.random()*this.state.results.length)]
        this.setState({roulettePick: pick})
        console.log(this.state.roulettePick)
    }

    populateModal(photoRef, name, location, hours, phone, rating, review){
        let photo = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=900&photoreference="+ photoRef + "&key=AIzaSyA4KGHuQl-PcJZUjZoeY_KDEuDLYf43BWI"
        let reviewsArray = []
        review.forEach(revObj => {
            let individualReview = []
            individualReview.push(revObj.author_name, revObj.author_url, revObj.rating, revObj.relative_time_description, revObj.text)
            reviewsArray.push(individualReview)
        })
        let modalInfo = [photo, name, location, hours, phone, rating, reviewsArray];
        console.log(modalInfo)
        this.setState({modalArray: modalInfo})
    }

    // componentDidMount() {
    //     this.search()
    // }



    render () {
        return(
            <Wrapper>
                <NavBar />
                <br/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <form onSubmit={this.handleSubmit}>
                                <div className="search_box green row">
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control" id="searchLocation" value={this.state.value} onChange={this.handleChange} placeholder="Search by ZIP or landmark"></input>
                                    </div>
                                    <div className="col-sm-3">
                                        <button className="btn btn-lg save text-white yellow" id="searchLocation" onClick={this.searchLocation}>Search</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <br/>
                    <div className={"row " + this.state.visibility}>
                        <div className="col-md-12 pick-card orange">
                                <h2 className="text-white text-center">Your Pick</h2>
                                <br/>
                                <div key = {this.state.roulettePick.id} className="result-block">
                                    <div className="form-check">
                                        <label className="form-check-label" htmlFor="defaultCheck">
                                            <h5>{this.state.roulettePick.name}</h5>
                                            <p className="address">{this.state.roulettePick.vicinity}</p>
                                        </label> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                <Modal
        
                photo = {this.state.modalArray[0]}
                restName = {this.state.modalArray[1]}
                address = {this.state.modalArray[2]}
                hours = {this.state.modalArray[3]}
                phone = {this.state.modalArray[4]}
                rating = {this.state.modalArray[5]}
                reviews = {this.state.modalArray[6]}

                />
            </Wrapper>
        )
    }
}

export default Roulette;