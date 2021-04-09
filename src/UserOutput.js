import { React } from "react";
import styled from "styled-components";
import './UserOutput.css'

const userOutput = (props) => {

    const StyledDiv = styled.div`
        background-color: #eee;
        border: 1px solid black;
        font: inherit;
        margin: 0 auto;
        margin-top: 20px;
        width: 80%;

        @media (min-width: 500px) { 
            width: 450px;
        }
    `;

    // const style = {
    //     '@media (min-width: 500px)': { //500px or more 
    //         width: '450px'
    //     }
    // } 

    return(
        <StyledDiv>
            <p onClick={props.click}> My name is {props.name} </p>
            <p> I am {props.age} years old! </p>
            <input onChange={props.change} value={props.name} ></input>
        </StyledDiv>
    );
};

export default userOutput;
