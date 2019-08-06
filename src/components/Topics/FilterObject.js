import React, {Component} from 'react'

class FilterObject extends Component {
    constructor(){
        super()

        this.state = {
            unFilteredArray: [{name:'Jake'},{car:'Audi'},{animal:'Bear'}],
            userInput: '',
            filteredArray:[]
         }
    }
    changeState = (input) => {
        this.setState({
            userInput:input.target.value
        }
        )
    }

    objFilter = () => {
        let newArray = this.state.unFilteredArray.filter((element) => {return element.hasOwnProperty(this.state.userInput)})
        this.setState({filteredArray:newArray})
    }
        
    
    render(){
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">Input line {JSON.stringify(this.state.unFilteredArray)}</span>
                <input className="inputLine" onChange={this.changeState}/>
                <button className="confirmationButton" onClick={this.objFilter}>filter</button>
                <span className="resultsBox filterObjectRB">results {JSON.stringify(this.state.filteredArray)}</span>
            </div>
        )
    }
}

export default FilterObject