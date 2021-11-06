import React, {Component} from 'react'
import Toggler from './Toggler'

function Favorite() {
    return (
        <Toggler defaultOnValue={false} render={
            (on, toggle) => (
                <div>
                    <h2>Click to favorite!</h2>
                    <h1><span onClick={toggle}
                    >
                        {on ? "❤️" : "♡"} 
                        </span>
                    </h1>
                </div>
            )         
        }/>
    )
}

export default Favorite
