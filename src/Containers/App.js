import React, { Component } from 'react';
import Persons  from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

import { render } from '@testing-library/react';

class App extends Component{

  //  //1. initial state load garyo 
  // state = ({
  //   input : '',
    
  // })
 
  // //input ma value dine kaam chahe yo function ko by using setSate
  // inputCount = (event) => {
  //   this.setState({
  //     input: event.target.value
  //   })
  // }

  // deleteAWord = (index) => {
  //   const textDeletion = this.state.input.split('')
  //   textDeletion.splice(index, 1)

  //   const updatedText = textDeletion.join('')
  //   this.setState({ input: updatedText })
  // }

  // render() {
  //   const charList = this.state.input.split('').map((ch, index) => {
  //     return <Char character = {ch} 
  //     key = {index}
  //     clicked={() => this.deleteAWord(index)}/>
  //   })

  //   return (
  //     <div className="App">
  //       <input type="text" onChange={this.inputCount} value={this.state.input} /> 
  //       <Validation inputLength= {this.state.input.length} ></Validation>
  //       <p>{this.state.input.length}</p>
  //       {charList}
  //     </div>
  //   );
  // }

  state = ({
    person: [
      {id: '1', name: 'Udin Rajkarnikar', age: 29},
      {id: '2', name: 'Raj Shrestha', age: 30},
      {id: '3', name: 'Hari Timilsina', age: 23}
    ],
    otherState: 'Some Other Value',
    showPerson: false
  })
  

    
    darkTheme = () => {
      const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
  
    if (prefersDarkScheme.matches) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
    }

    togglePerson = () => {
      const doesShow = this.state.showPerson
      this.setState({showPerson: !doesShow})
    }

    deletePersonHandler = personIndex => {
      const person = this.state.person.slice()
      person.splice(personIndex, 1)//removes 1 element from array [0] lai click garyo bhaney index[0] matra del huncha 
      this.setState({person: person})
    }
    
    nameChangeHandler = (event, id) => {
      const personIndex = this.state.person.findIndex( p => {
        return p.id === id;
      })
    }

  render() {
    let pr = null;
    
    if (this.state.showPerson) {
      pr = (
        <div>
          <Persons //yeta hamley jun jun pass garyo tyo saabai props ma gayera bascha in Persons.js file 
            person = {this.state.person}
            click = {this.deletePersonHandler}
            change = {this.nameChangeHandler}
          /> 
        </div>
      );
    }
    
    return (
      <div>
       <Cockpit 
        title = {this.props.appTitle} //props pachi ko chahe previous JS file ko title 
        showPerson = {this.state.showPerson}
        person = {this.state.person}
        togglePerson = {this.togglePerson} //props ko pachi ko name chahe blue color ko togglePerson 
       />
        {pr}
      </div>
    );
  }
}

export default App;
