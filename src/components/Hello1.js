import React from 'react'

function Hello1(props) {
    function ClickMe(){
        console.log("Button is clicked");
    }
    return (
        <div>
            {/* <h2>hi i am function components</h2> */}
            <h3 className='text-dark'>my name is {props.name} & last name is {props.lastname}</h3>
            <button className='btn btn-primary' onClick={ClickMe}>Click Me</button>
        </div>
    )
}

export default Hello1
