import React from 'react';

function FunctionClick() {
 
   
 

 function clickHandler(){
     console.log("Clicked");

 }
    return (
        <div>
            <button onClick={clickHandler}>Click</button> 
        </div>
    ) //button that calls the other function
}

export default FunctionClick
