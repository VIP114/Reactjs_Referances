import React from 'react'

function myElement(names) {
    return names.map(name =>
        // eslint-disable-next-line no-unused-expressions
        <div key={name}>
        {`${name}`}
        </div>
        )
}


function MapEx(props) {


    return (
        <div>
            <h2>Example1</h2>
            <h1>

            {myElement(props.names)}
            </h1>
        </div>
    )
}

export default MapEx
