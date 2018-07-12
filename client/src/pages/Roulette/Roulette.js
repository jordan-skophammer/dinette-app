import React, {Component} from "react";
import API from "../../utils/API";
import NavBar from "../../components/NavBar";
import Wrapper from "../../components/Wrapper";

class Roulette extends Component {

    state = {
        results: [],
        roulettePick: []
    }

    search = () => {
        API.searchRestaurants()
        .then(res => {
            this.setState({results: res.data})
            console.log(this.state.results)
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

                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card-pick">
                                <br/>
                                <h2 className="text-white text-center">Your Pick</h2>
                                <br/>
                                { 
                                    <div key = {this.state.roulettePick.id} className="result-block">
                                        <div className="form-check">
                                            <label className="form-check-label" htmlFor="defaultCheck">
                                                <h5>{this.state.roulettePick.name}</h5>
                                                <p className="address">{this.state.roulettePick.vicinity}</p>
                                            </label>
                                            <input className="form-check-input" data-state="unchecked" type="checkbox" onClick= {() => this.addToSession(this.state.roulettePick.name)} value={this.state.roulettePick.name} id="defaultCheck"></input>
                                        <br/>
                                        </div>
                                    </div>
                                }
                            </div>
                        <br/>
                        </div>
                    </div>
                </div>
            </Wrapper>
        )
    }
}

export default Roulette;