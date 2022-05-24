import React from 'react'
import './Button.css'


function scroll(){
    window.scrollTo(0,0)
}
function Button(props) {
    return (
        <div>
            <button onClick={scroll} className='btn1'>
                {props.button}
            </button>
        </div>
    )
}

export default Button

