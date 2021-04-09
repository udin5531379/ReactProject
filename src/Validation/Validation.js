import { React } from "react";

const textShortOrLong = (props) => {
    
    let validationMessage = " "

    if (props.inputLength === 0) {
        validationMessage = " "
    } else if(props.inputLength <= 5 && props.inputLength !== 0 ) {
        validationMessage = "The text is too short"
    } else {
        validationMessage = "The text is somewhat okay"
    }

    return(
        <div>
            {validationMessage}
        </div>
    ) 
}


export default textShortOrLong