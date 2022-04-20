import React from 'react'
import './Nav.css'
import Button from '../buttnBg/Button'
function Nav(props) {

    return (
        <div className='container1'>
            <div className='con1'>
                <div>
                    <a className='a1' href=''>Gits</a>
                </div>
                <div className='con2'>
                    <a className='a1' href=""> Gid yoki tarjimon tanlash</a>
                    <a className='a1' href="">Gid va tarjimonlar uchun </a>
                    <a className='a1' href="">Blog</a>
                    <Button button="Arizalarni ko'rish" />
                </div>
                <div className='bg-danger'>
                    <a className='a1' href="">Kirish</a>
                </div>
            </div>
        </div>
    )
}

export default Nav
