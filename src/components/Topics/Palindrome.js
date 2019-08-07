import React, {Component} from 'react'

class Palindrome extends Component {
    constructor(){
        super()

        this.state={
            userInput: '',
            palindrome:'false'
        }
    }
    changeState = (event) => {
        this.setState({
            userInput:event.target.value})
        }

        pali = () => {
            let str = this.state.userInput.split('');

            let reverseStr = str.reverse();
            let newStr = reverseStr.join('')

            if(this.state.userInput === newStr){
                this.setState({palindrome:'true'})
            }
        }

    render(){
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input className="inputLine" onChange={this.changeState}/>
                <button className="confirmationButton" onClick={this.pali}>Submit</button>
                <span className="resultsBox">Palindrome?{this.state.palindrome}</span>
            </div>
        )
    }
}

export default Palindrome