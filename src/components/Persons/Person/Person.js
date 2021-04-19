import  React , {Component}  from "react";

import classes from './Person.module.css';

class Person extends Component{
    render() { //props are the properties of the class abd accesed with this.props key words
        return(
            <div className={classes.Person}>
                <p onClick={this.props.click}> My name is {this.props.name} </p>
                <p> I am {this.props.age} years old! </p>
                <input onChange={this.props.change} value={this.props.name} ></input>
            </div>
        );
    }
    
};

export default Person;
