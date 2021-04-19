import React from 'react';
import classes from './Cockpit.module.css';


const cockpit = (props) => {
    
    let btnClasses = ' ';
    let dynamicClass = []; //OUTPUT: join by space chahe kina bhanda each element chahe space ley chuttincha i.e ['red' 'green' 'yellow']

    if (props.person.length <= 2) {
      dynamicClass.push(classes.red) //output: [red]
    }

    if (props.person.length <= 1) {
      dynamicClass.push(classes.bold) //output: [red bold] since length=2 ma already array ma 'red' push bhai sakcha.
    }

    if(props.showPerson){
        btnClasses = classes.Green
    }

    return(
        <div className = {classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={dynamicClass.join(' ')}>This is me speaking from Canada</p>          
            <button className={btnClasses} onClick={props.togglePerson}>Switch!</button>
        </div>
    ) 
}

export default cockpit;