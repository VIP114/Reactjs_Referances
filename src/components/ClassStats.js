import React, { Component } from 'react'

export class ClassStats extends Component {
    constructor(){
        super()
        this.state={
            name:"vishv"
        }
    }
    // 1st way
    Click1(){
        this.setState({
            // name: 'change name vip'
            name: this.state.name ==='vishv' ? 'vip' :'patel'
        })
    }
    // 2nd way
    Click2=()=>{
        this.setState({
            name: 'change name vip'
        })
    }
    render() {
        return (
            <div>
                <h1 className='text-danger'>Changing Name</h1>
                <h1>My name is {this.state.name }</h1>
                {/* 1st way */}
                <button className='btn btn-success' onClick={()=>this.Click1()}>Change Text1st way</button> 
                <br />
                <br />
                {/* 2nd way */}
                <button className='btn btn-success' onClick={this.Click2}>Change Text2nd way</button> 

            </div>
        )
    }
}

export default ClassStats
