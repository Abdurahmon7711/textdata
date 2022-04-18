import React from 'react'
import './title.css'
export default function Title(props) {
  return (
    <div> 
        <p className='title'> 
            {props.text}
        </p>
        
    </div>
  )
}
