import React from 'react'
import './Buttonout.css'
function scroll(){
    window.scrollTo(0,0)
}
function Buttonout(props) {
    return (
        <div>
            <button onClick={scroll} className='btn2'>{props.button2}</button>
        </div>
    )
}

export default Buttonout
