import React, { Component } from 'react'


export class UsestateClass extends Component {
    constructor(props){
        super(props)
        this.state={
            count : 0
        }
    }    
    Clickme=()=>{
        this.setState({
            count: this.state.count + 1 
        })
    }
    render() {
        return (
            <div>
                <h2>{this.state.count}</h2>
                <button onClick={this.Clickme} className='btn btn-success'>Click</button>
            </div>
        )
    }
}

export default UsestateClass
