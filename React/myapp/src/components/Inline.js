import React from 'react';
const heading={ //this how we create object
    fontSize:"92px",  //camel case 
    color:"blue",
}

function Inline() {
    return (
        <div>
            <h1 style={heading}>Inline componenet</h1> 
            <input type="text" style={heading}></input>
        </div>
    )  // here we used style attribute to connect this to object created above 
}

export default Inline
