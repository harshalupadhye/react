import React, { Component } from 'react'  //this is done for class function thats why in the button for onclick we have created the arrow function nad not normal function

export class counter extends Component {
    constructor() {
        super()
        this.state = {
             count:0
        }
    }
    changeCount(){
        this.setState({
            count:this.state.count+1   
        })
       
    }
    
    render() {
        return (
            <div>
                count -{this.state.count}
            <div>
                <button onClick = {()=>this.changeCount()}> 
                    Count+
                </button>
            </div>
            </div>
        )
    }
}

export default counter
