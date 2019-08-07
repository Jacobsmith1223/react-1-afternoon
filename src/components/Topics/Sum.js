import React, {Component} from 'react'

class Sum extends Component {
    constructor(){
        super();

        this.state = {
            number1: 0,
            number2: 0,
            sum: null,

        }
    }
    changeState1 = (input) => {
        this.setState({
            number1:parseInt(input.target.value)
        }
        )
    }
    changeState2 = (input) => {
        this.setState({
            number2:parseInt(input.target.value)
        }
        )
    }
    answer = () => {

       this.setState({sum: this.state.number1 + this.state.number2})
    }
    render(){
        return (
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input className="inputLine" onChange={this.changeState1}/>
                <input className="inputLine" onChange={this.changeState2}/>
                <button className="confirmationButton" onClick={this.answer}>Submit</button>
                <span className="resultsBox">{this.state.sum}</span>
            </div>
        )
    }
}

export default Sum