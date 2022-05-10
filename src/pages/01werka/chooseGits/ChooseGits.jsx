import React from 'react'
import Nav from '../../../components/component/Navbar/Nav'
import AdvancedSearch from '../../../components/templets/AdvancedSearch/AdvancedSearch'
import 'bootstrap/dist/css/bootstrap.min.css';
import Rectanle from "../../../assets/01werka/ChooseGits/Rectangle.png"
import "./ChooseGits.css"
import AboutGits from '../../../components/templets/AboutGits/AboutGits'
import Buttonout from '../../../components/component/buttonoutline/Buttonout'
import Futter from '../../../components/component/Futter/Futter'

import Title from '../../../components/component/titleBig/Title'
export default function ChooseGits() {
  return (
    <div>
      <Nav />
      <div className='container'>
        <h2 className='ozingizuchun'>O’zingiz uchun Gidni tanlang</h2>
        <div className='Githaqida'>

          <div className='left1'>
            <AdvancedSearch />
            <img className='left1_rasm' src={Rectanle} alt="" /> 
            <img className='left1_rasm' src={Rectanle} alt="" />
          </div>

          <div className='right1'>
            <div className='gichgich'>
              <AboutGits /><br />
              <AboutGits /><br />
              <AboutGits /><br />
              <AboutGits /><br />
              <AboutGits /><br />
              <AboutGits /><br />
              <AboutGits /><br />
              <AboutGits /><br />
              <AboutGits /><br />
            </div>
            <div className='gichgich2'>
              <Buttonout button2="Davomi" />
            </div>
          </div>
        </div>
      </div>
      <Futter/>

    </div>
  )
}
