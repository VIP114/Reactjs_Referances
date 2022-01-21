import React, { Component } from 'react'

export class Classbase extends Component {
    // ClickMe(){
    //     console.log("this is class components")
    // }
    render() {
        return (
            <div>
                {/* <h1>this is class base components</h1> */}
                <h3 className='text-danger'>My email is {this.props.Email}</h3>
                {/* <button className='btn-primary' onClick={this.ClickMe}>Click Me</button> */}
                <button className='btn btn-primary' onClick={this.props.myclick}>Click Me</button>

                
            </div>
        )
    }
}

export default Classbase

