import React from 'react'

export default function FavoriteNumber(Component) {
    return function(props) {
        return (
            <div>
                <Component {...props}/>
            </div>
        )
    }
}
