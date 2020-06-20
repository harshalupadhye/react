import React, { Component } from 'react'  //this is a example of state and how to make it mutable

export class welcomes extends Component {
    constructor(){     //this is use so when initally we open a program info from here will be shown       
        super()
        this.state ={   //actual state
            message:"welcome bro" //message from state
        }
    }
    changeMessage(){
        this.setState({
            message:"thanks for subscribing" // this is to restate the state that has been initialized in counter
        });
    }
    render() {
    return (            //this {this.state.message}  is calling mesaage from state which is "welcome bro"4
        <div>
             <h1>{this.state.message}</h1> 
             <button onClick = {()=>this.changeMessage()}> 
                 Subscribe
             </button>
    
        </div>
    
    );
    
    }
}

export default welcomes
