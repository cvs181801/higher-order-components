import React from 'react'

export const WithNumberGenerator = WrappedComponent => props => {
    const randomNum = Math.floor(Math.random() * 100 )
    console.log(randomNum)
    return <WrappedComponent {...props} randomNum={randomNum}/>
}
