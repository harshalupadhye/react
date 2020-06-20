import React from 'react'
import "./style.css"

function Stylesheets(props) {
    let className= props.primary?"primary":"secondary"
    return (
        <div>
            <h1 className={className}>Stylesheets</h1>
        </div>
    )
}

export default Stylesheets
