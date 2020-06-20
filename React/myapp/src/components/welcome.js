import React, { Component} from 'react';

class Welcome extends Component{
    render(){
        return <h1>welcome {this.props.name} to the class Component with default export</h1>
    }
}

export default Welcome;