import React from 'react'
import './Button.css'
function Button(props) {
    return (
        <div>
            <button className='btn1'>
                {props.button}
            </button>
        </div>
    )
}

export default Button
