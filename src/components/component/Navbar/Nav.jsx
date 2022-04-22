import React from 'react'
import './Nav.css'
import Button from '../buttnBg/Button'
import man from "../../../assets/Application/man.png"
import git from "../../../assets/Application/Gits.png"
function Nav(props) {

    return (
        <div className='container1'>
            <div className='con1'>
                <div>
                    <a href="">
                        <img src={git} alt="git" />
                    </a>
                </div>
                <div className='con2'>
                    <a className='a1' href=""> Gid yoki tarjimon tanlash</a>
                    <a className='a1' href="">Gid va tarjimonlar uchun </a>
                    <a className='a1' href="">Blog</a>
                    <Button button="Arizalarni ko'rish" />
                </div>
                <div className='come'>
                    <img className="img1" src={man} alt="m" />
                    <a className='a1' href="">Kirish</a>
                </div>
            </div>
        </div>
    )
}

export default Nav
