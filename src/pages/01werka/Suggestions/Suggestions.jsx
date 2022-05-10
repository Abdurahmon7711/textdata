import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Suggestions.css"
import Button from '../../../components/component/buttnBg/Button';
import Group333 from "../../../assets/01werka/Suggestions/Group333.png"
import Group51 from "../../../assets/01werka/Suggestions/Group 51.png"
import Group47 from "../../../assets/01werka/Suggestions/Group 47.png"
import Group49 from "../../../assets/01werka/Suggestions/Group 49.png"
import Nav from '../../../components/component/Navbar/Nav';
import Futter from '../../../components/component/Futter/Futter';
import SimpleAccordion from '../../../components/component/SimpleAccordion/SimpleAccordion';


export default function Suggestions() {
  return (
    <div >
      <Nav />
      <div className='container'>
        <div className='register'>
          <div className='register_left'>
            <div className='register_tekst'>
              <p className='registr1'>O'z shahringizda  </p>
              <p className='registr2'> <b>Tarjimon</b> yoki <b>Git</b> sifatida</p>
              <p className='registr3'>ro'yxatdan o'ting</p></div>

            <div className="btnnew">
              <Button button="Ro‘yhatdan o’tish" />
            </div>
          </div>


          <div className='register_right'>
            <img className='group333' src={Group333} alt="" />
          </div>
        </div>

        <p className='takliflar_tekst'>Biz nima taklif qilamiz</p>
        <div className='takliflar'>

          <div className='taklif_left'>
            <img src={Group47} alt="" />
            <div className='takliflarTekst'>
              <p className='takliflar_tekst2'>Bepul ro‘yhattan o‘ting </p>
              <p className='takliflar_tekst3'>Siz o'zingizning profilingizni  </p>
              <p className='takliflar_tekst3'>to'ldirasiz va shaxsiy sahifangizni</p>
              <p className='takliflar_tekst3'>olasiz. Bu tez, oson va bepul.</p>
            </div>
          </div>


          <div className='taklif_orta'>
            <img src={Group49} alt="" />
            <div className='takliflarTekst'>
              <p className='takliflar_tekst22'>Platforma yordamida</p>
              <p className='takliflar_tekst222'> mijozlar toping</p>
              <p className='takliflar_tekst33'>Siz shuningdek aktual so’rovlar ro'yxatini <br /> ko'rishingiz va sizga mos keladigan mijozlarga <br /> javob berishingiz mumkin.</p>
            </div>
          </div>
          <div className='taklif_right'>
            <img src={Group51} alt="" />
            <div className='takliflarTekst'>
              <p className='takliflar_tekst22'>O’z karyerangizni</p>
              <p className='takliflar_tekst222'>boshlang!</p>
              <p className='takliflar_tekst33'>Mijozlarga yaxshi xizmat ko’rsatgan xolda, ijobiy <br /> fikirlar oling va rivojlaning.</p>
            </div>
          </div>
        </div>
        <p className='takliflar_tekst001'>Ko’p beriladigan savollar</p>
        <div className='qoshimcha'>
          <SimpleAccordion />
        </div>


      </div>
      <div className='footerReg'>
        <p className='footerRegText'>Xoziroq ro’yhattan o’ting, ma’lumotlaringizni <br />    to’ldiring va o’z karyerangizni boshlang!</p>
        <div className="btnnew2">
          <Button button="Ro‘yhatdan o’tish" />
        </div>
      </div>
      <Futter />

    </div >
  )
}
