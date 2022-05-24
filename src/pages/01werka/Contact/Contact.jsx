import React from 'react'
import './Contact.css'
import Group14 from '../../../assets/01werka/Contact/Group 14.png'
import Group15 from '../../../assets/01werka/Contact/Group 15.png'
import Group16 from '../../../assets/01werka/Contact/Group 16.png'
import Group91 from '../../../assets/01werka/Contact/Group 91.png'
import Button from '../../../components/component/buttnBg/Button'
import Nav from '../../../components/component/Navbar/Nav'
import Futter from '../../../components/component/Futter/Futter'

export default function Contact() {
  return (
    <div>
      <Nav/>
      <div className='container'>
        <p className='bizbln'>Biz bilan bog'lanish </p>
        <div className='boglanish'>
          <div className='boglanish_left'>
            <p className='kontakt'>Kontaktlarimiz</p>
            <p className='nomer'>+998 33 732 73 73</p>
            <p className='nomer'>toshpolatovsherzod1@gmail.com</p>
            <br />
            <p className='nomer'>Toshkent sh., Yunusobot tumani,<br /> Palonchi ko‘cha, 4 uy - 194 kv.</p>
            <div className='linklar'>
              <div className="btn telegram">
                <a href="#"><img src={Group15} alt="" /></a>

              </div>
              <div className="btn faceebook">
                <a href="#"> <img src={Group14} alt="" /> </a>
              </div>
              <div className="btn instagram">
                <a href="#"> <img src={Group16} alt="" /> </a>
              </div></div>

          </div>
          <div className='boglanish_right'>
            {/* <img src={Group91} alt="" /> */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1853.5021146006497!2d69.26988163231312!3d41.37471034639721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8d3a6e2eb289%3A0x8f7b877ac9078717!2sKalibri%20education%20I%20Colibri%20education!5e0!3m2!1sru!2s!4v1651327254232!5m2!1sru!2s" width="600" height="450" ></iframe>
          </div>
        </div>

        <div className='savolj'>
          <p className='savoljonattekst'>Savol jo‘natish</p>
          <div className="savoljonat">
            <form>
              <div className='inputlar'>
                <div className='inputlar_1'>
                  <p className='sarlavha_1'>ism</p>
                  <label htmlFor="ism">
                    <input className='inputism' type="text" placeholder='isminggizni yozing' />
                  </label>
                  <p className='sarlavha_1'>Familiya</p>
                  <label htmlFor="Familya">
                    <input className='inputism' type="text" placeholder='Familyangizni yozing' />
                  </label>
                </div>
                <div className='inputlar_2'>
                  <p className='sarlavha_1'>Email</p>
                  <label htmlFor="Email">
                    <input className='inputism' type="email" placeholder='Emailingizni yozing' />
                  </label>
                  <p className='sarlavha_1'>Telefon</p>
                  <label htmlFor="Email">
                    <input className='inputism' type="number" placeholder='Telefon raqamingizni yozing' />
                  </label>
                </div>
              </div>

              <div className='izoh'>
                <p className='sarlavha_1'>Savol/Taklif</p>
                <label htmlFor="izoh">
                  <input className='tasnif' type="text" placeholder='Savol yoki Taklifingiz bo’lsa yozing' />
                </label>
              </div>

            </form>
            <div className='btnnew3'>
              <Button button="Jo'natish" />
            </div>
          </div>
        </div>
        
      </div>
      <Futter />
    </div>
  )
}
