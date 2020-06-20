import React from "react";

const Prep = (props) => { //arrow function
  return (
  <div>
      <h1> I am Props {props.name} and i am training in {props.training}</h1> 
      {props.children}
  </div>
);
};

export default Prep;