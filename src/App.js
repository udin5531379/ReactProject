import './App.css';
import React, { Component } from 'react';
import UserInput from './UserInput';
import UserOutput from './UserOutput';
import styled from "styled-components";


import Validation from './Validation/Validation'
import Char from './Char/Char'

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

    deletePersonHandler = (personIndex) => {
      const person = this.state.person.slice()
      person.splice(personIndex, 1)//removes 1 element from array [0] lai click garyo bhaney index[0] matra del huncha 
      this.setState({person: person})
    }



    nameChangeHandler = (event) => {
      this.setState({
        person: [
          {name: event.target.value, age: 29},
          {name: event.target.value, age: 30},
          {name: event.target.value, age: 23}
        ]
      })
    }

  render() {
    let pr = null;

    const StyledButton = styled.button`
      background-color: ${this.state.showPerson ? 'red' : 'green'};
      color: ${this.state.showPerson ? 'white' : 'yellow'};
      padding: 10px;

      &:hover {
        background-color: lightGreen;
        color: black;
      } 
    `;

   
   if (this.state.showPerson) {
      pr = (
        <div>
             {this.state.person.map( (per, index) => { //Here per is each object in the this.state.person array, each per lai chaeh kasari maniplate garney bhaneyra map ley garcha
               return <UserOutput 
               name={per.name} 
               age={per.age} 
               click={() => this.deletePersonHandler(index)} 
               change={(event) => this.nameChangeHandler(event, index)}
               key={per.id} />//each object ko part ma name ra age huncha ani tyeslai extract gareyko 
             })}
        </div>
      );
    }

    let dynamicClass = [] //OUTPUT: join by space chahe kina bhanda each element chahe space ley chuttincha i.e ['red' 'green' 'yellow']

    if (this.state.person.length <= 2) {
      dynamicClass.push('red') //output: [red]
    }

    if (this.state.person.length <= 1) {
      dynamicClass.push('bold') //output: [red bold] since length=2 ma already array ma 'red' push bhai sakcha.
    }

    return (
      <div className="App">
        <h1>Hi, I'm Udin Rajkarnikar</h1>
        <p className={dynamicClass.join(' ')}>This is me speaking from Canada</p>          
        <StyledButton alt= {this.state.showPerson} onClick={this.togglePerson}> Switch !</StyledButton>
        {pr}
      </div>
    );
  }
}

export default App;
