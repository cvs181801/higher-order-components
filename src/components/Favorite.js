import React from 'react'

export default function Favorite(props) {
    return (
        <div>
            <h1
                onClick={props.handleClick}
            >Click here to favorite!</h1>
        </div>
    )
}
