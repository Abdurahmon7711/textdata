import React from 'react'
import './Input.css'
function Input(props) {
    return (
        <div>
            <input className='inp' type="text" placeholder={props.input} />
        </div>
    )
}

export default Input
