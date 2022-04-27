import React from 'react'
import './Futter.css'
import telegram from "../../../assets/Application/Telegram.png"
import facebook from "../../../assets/Application/Facebook.png"
import instagram from "../../../assets/Application/Instagram.png"
function Futter() {
    return (
        <div className='container2'>
            <div className='con-1'>
                <div>
                    <h3>Bizning servis</h3>
                    <p>Git yoki tarjimon tanlash</p>
                    <p>Gid va tarjimonlar uchun </p>
                    <p>Platforma haqida</p>
                    <p>Blog</p>
                </div>
                <div>
                    <h3>Kontaktarimiz</h3>
                    <p>salom@gits.uz</p>
                    <p>+998 90 123 45 67</p>
                    <p>Savol jo’natish</p>
                </div>
                <div>
                    <h3>Huquqiy ma’lumotlar</h3>
                    <p>Foydalanish shartlari</p>
                    <p>Maxfiylik siyosati va cookie siyosati</p>
                </div>
            </div>
            <div className='link'>
                <a href="">
                    <img className='t1' src={telegram} alt="" />
                    <img className='t1' src={facebook} alt="" />
                    <img className='t1' src={instagram} alt="" />
                </a>
            </div>
            <div className='con-2'>
                <p>Copyright 2021 Gits.uz - All rights reserved.</p>
            </div>
        </div>
    )
}

export default Futter
