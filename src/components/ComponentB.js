import React from 'react'
import { MyContext } from '../App'
const ComponentB = () => {
    return (
        <div>
            <h1>Component B i am</h1>
            <MyContext.Consumer>
                {data => 
                {
                     return <h2>{data}</h2>
                }}
            </MyContext.Consumer>
        </div>
    )
}

export default ComponentB
