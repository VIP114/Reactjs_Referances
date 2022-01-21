import React, { Component } from 'react'

export class Form extends Component {
    constructor(props){
        super()
        this.state={
            UserName:'',
            Password:''
        }
         
    }
    UserNameHandlder =(event)=>{
        this.setState({
            UserName: event.target.value
        })
    }

    PasswordHandler = (event)=>{
        this.setState({
            Password : event.target.value
        })
    }
    render() {
        return (
            <div className='container m-2'>
                <input type="text"value={this.state.UserName} placeholder='Enter your UserName:-' className='form-control' onChange={this.UserNameHandlder} />
                <input type="password" value={this.state.Password } placeholder='Enter your Password:-' className='form-control m-1' onChange={this.PasswordHandler}/>
                <button className='btn btn-success m-1'>Submit</button>
            </div> 
            
        )
    }
}

export default Form
