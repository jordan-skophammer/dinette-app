import React, {Component} from "react";
import API from "../../utils/API";
import NavBar from "../../components/NavBar";
import Wrapper from "../../components/Wrapper";
import "./Roulette.css";

class Roulette extends Component {
    constructor(props) {
        super(props);
        this.state = {
            roulettePick: {result:{
                            name: "name",
                            address: "address"}},
            value: "",
            visibility: "hiddenRoulette"
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    search = () => {
        API.searchRestaurants()
        .then(res => {
            // this.setState({results: res.data})
            this.randomPick(res.data)
        })  
    }

    handleChange(event){
        this.setState({value: event.target.value})
    }

    handleSubmit(event){
        event.preventDefault();
        API.getRestaurants(this.state.value)
            .then(res => {
                if(res.status !== 200) {
                    throw new Error(res.statusText)
                }
                if (res.data !== "No Results Found"){
                    this.setState({...this.state,results: res.data})
                } else {
                    console.log("no results found")
                    this.setState({...this.state,results: ["No Results Found"]})
                }
                // this.setState({visibility: "", results: res.data})
                this.randomPick(res.data)
            })
            
    }

    randomPick = (data) => {
        let pick = data[Math.floor(Math.random()*data.length)]
        this.setState({roulettePick: pick, visibility: ""})
        console.log(pick)
    }

    render () {

        // let rouletteResults = this.state.roulettePick
        // let displayResults = rouletteResults.result
        // console.log(rouletteResults)

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
                                <div className="result-block">
                                    <div className="form-check">
                                        <label className="form-check-label" htmlFor="defaultCheck">
                                            <h5>{this.state.roulettePick.result.name}</h5>
                                            <p className="address">{this.state.roulettePick.result.address}</p>
                                        </label> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </Wrapper>
        )
    }
}

export default Roulette;