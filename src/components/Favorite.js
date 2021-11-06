import React, {Component} from 'react'
import {Toggler} from "./Components/Toggler"

function Favorite(props) {
    return (
        <Toggler render={function(on, toggle) {
            return (
                <div>
                    <h2>Click to favorite!</h2>
                    <h1><span onClick={toggle}
                    >
                        {on ? "❤️" : "♡"} 
                        </span>
                    </h1>
                </div>
            )         
        }}/>
        
    )
}

export default Favorite
