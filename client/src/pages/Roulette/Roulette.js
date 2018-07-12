import React, {Component} from "react";
import API from "../../utils/API";
import NavBar from "../../components/NavBar";
import Wrapper from "../../components/Wrapper";
import "./Roulette.css";

class Roulette extends Component {

    state = {
        results: [],
        roulettePick: []
    }

    search = () => {
        API.searchRestaurants()
        .then(res => {
            this.setState({results: res.data})
            this.randomPick(this.state.results)
        })

        
    }

    randomPick = () => {
        let pick = this.state.results[Math.floor(Math.random()*this.state.results.length)]
        this.setState({roulettePick: pick})
        console.log(this.state.roulettePick)
    }

    componentDidMount() {
        this.search()
    }



    render () {
        return(
            <Wrapper>
                <NavBar />
                <br/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="search_field">
                                <div className="blankSpaceInput">Blank
                                </div>
                                <div className="aPlaceForButton">
                                    <button className="btn btn-lg yellow-grad-save text-white" id="searchLocation" onClick={this.searchLocation}>Search</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="pick-card">
                                <br/>
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
                </div>
            </Wrapper>
        )
    }
}

export default Roulette;