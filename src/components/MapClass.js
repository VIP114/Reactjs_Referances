import React, { Component } from 'react'

export class MapClass extends Component {

    myElement(names) {
        return names.map(name =>
            // eslint-disable-next-line no-unused-expressions
            <div key={name}>
            {`${name}`}
            </div>
            )
    }
    

    render() {
        return (
            <div>
             <h2>class base</h2>   
            <h1>

                {this.myElement(this.props.names)}
            </h1>

            </div>
        )
    }
}

export default MapClass
