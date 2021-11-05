import React from 'react'

export const WithNumberGenerator = WrappedComponent => props => {
    const randomNum = Math.floor(Math.random() * 100 )
    //console.log(randomNum) this was logging a separate number in the console , before passing it in as a prop - it means nothing within this scope
    return <WrappedComponent {...props} randomNum={randomNum}/>
}
