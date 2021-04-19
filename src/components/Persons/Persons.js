import React, {Component} from 'react';
import Person  from './Person/Person';

 class Persons extends Component{
     render(){
        return this.props.person.map( (per, index) => {
            console.log(this.props)
           return <Person 
               name = {per.name}
               age = {per.age}
               key = {per.id}
               click = {() => this.props.click(index)} //this click is the 'click' in the App.js file
               change={(event) => this.props.changed(event, index)}
           />
        }); 
     }
} 

 export default Persons;