import React,{useContext} from 'react'
import { MyContext } from '../App'


function UseContextB() {
    const data = useContext(MyContext)
    return (
        <div>
            <h2>{data}</h2>
        </div>
    )
}

export default UseContextB
