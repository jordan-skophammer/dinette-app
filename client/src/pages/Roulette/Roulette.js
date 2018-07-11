import React, {Component} from "react";
import API from "../../utils/API";
import NavBar from "../../components/NavBar";
import Wrapper from "../../components/Wrapper";

class Roulette extends Component {

    state = {
        results: []
    }

    search = () => {
        API.searchRestaurants()
        .then(res => {
            this.setState({results: res.data})
            console.log(this.state.results.data)
        })
    }

    componentDidMount() {
        this.search()
    }

    render () {
        return(
            <Wrapper>
                <NavBar />
            </Wrapper>
        )
    }
}

export default Roulette;