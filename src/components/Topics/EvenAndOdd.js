import React, {Component} from 'react'

class EvenAndOdd extends Component {
   constructor(){
       super()

        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: '',
        }
        this.changeInput = this.changeInput.bind(this)
        this.numberFinder = this.numberFinder.bind(this)
   }

   changeInput(userInput){
       this.setState({
           userInput: userInput.target.value
       })
       
   }

   numberFinder(){
    let arr=this.state.userInput.split(',');
    let odds = [];
    let evens = [];


    for(let i = 0; i < arr.length; i++){
        let parst = parseInt(arr[i],10)
        if(parst% 2 === 0){
            evens.push(parst)
        }
        else(odds.push(parst))
    }
    this.setState({evenArray:evens,oddArray:odds})
   }
   
    render(){
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>

                <input className="inputLine" onChange={this.changeInput} />
                <button className="confirmationButton" onClick={this.numberFinder}>confirm numbers</button>
                <span className="resultsBox">Evens {JSON.stringify(this.state.evenArray)}</span>
                <span className="resultsBox">Odds {JSON.stringify(this.state.oddArray)}</span>
            </div>
        )
            
        
    }
}

export default EvenAndOdd