import React, {Component} from 'react'

class FilterString extends Component {
    constructor(){
        super()

        this.state={
            unFilteredArray:['dog','cat','bear','eagle'],
            userInput:'',
            filteredArray:[]
        }
    }

    changeState = (event) => {
        this.setState({
            userInput:event.target.value})
        }

       
        
        filterString=(userInput) =>{
            // let names = this.state.animals;
            let filteredNames = this.state.unFilteredArray.filter((element)=>{
                return element.includes(this.state.userInput)
            });
        
            // for ( let i = 0; i < names.length; i++ ) {
            //   if ( names[i].includes(userInput) ) {
            //     filteredNames.push(names[i]);
            //   }
            // }
            
            this.setState({ filteredArray: filteredNames });
          }

    render(){
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText"> {JSON.stringify(this.state.unFilteredArray)}</span>
                <input className="inputLine" onChange={this.changeState}/>
                <button className='confirmationButton' onClick={this.filterString}>Filter</button>
                <span className="resultsBox filterStringRB">Filtered animals {JSON.stringify(this.state.filteredArray)}</span>
            </div>
        )
    }
}

export default FilterString