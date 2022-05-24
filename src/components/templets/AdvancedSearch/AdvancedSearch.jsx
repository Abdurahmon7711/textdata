import React from 'react'
import Button from '../../component/buttnBg/Button'
import './AdvancedSearch.css'

export default function AdvancedSearch() {
  return (
    <div className='container'>
      <div className='Advancedsearch'>
        <div className="advanced_nav">
          <p className='paragref'> Kengaytirilgan qidiruv </p>
        </div>
        <div>
          <form>
            <p className='kim'>Kim kerakligini tanlang</p>
            <label className='radio' htmlFor="Gid">
              <input className='radio1' id='Gid' type="radio" name='kim' /> Gid
            </label>
            <br />
            <label className='radio' htmlFor="Tarjimon">
              <input className='radio1' id='Tarjimon' type="radio" name='kim' /> Tarjimon
            </label>
            <br />
            <label className='radio' htmlFor="Yozma tarjimon">
              <input className='radio1' id='Yozma tarjimon' type="radio" name='kim' /> Yozma tarjimon
            </label>
            <br />
            <br />
            <p className='sarlavha'>Davlat</p>
            <label htmlFor="country"></label>
            <select className='select' name="country" id="country">
              <option className='option' value="">Davlatni tanlang</option>
              <option className='option' value="Uzbekistan">Uzbekistan</option>
              <option className='option' value="USA">USA</option>
              <option className='option' value="Russia">Russia</option>
              <option className='option' value="Australia">Australia</option>
              <option className='option' value="India">India</option>
            </select>
            <br />
            <br />

            <p className='sarlavha'>Shahar</p>
            <label htmlFor="city"></label>
            <select className='select' name="country" id="country">
              <option className='option' value="">Shaharni tanlang</option>
              <option className='option' value="Toshkent">Toshkent</option>
              <option className='option' value="New York">New York</option>
              <option className='option' value="Moscow">Moscow</option>
              <option className='option' value="Australia">Australia</option>
              <option className='option' value="India">India</option>
            </select>
            <br />
            <br />
            <br />
            <p className='sarlavha'>Sana</p>
            <input className='select' type="date" />
            <input className='select' type="date" />
            <br />
            <br />

            <label className='radio' htmlFor="onlayn">
              <input className='radio1' id='onlayn' type="radio" name='onlayn' /> Onlayn (*bo‘sh gidlar)
            </label>
            <br />
            <label className='radio' htmlFor="Barchasi">
              <input className='radio1' id='Barchasi' type="radio" name='onlayn' /> Barchasi
            </label>
            <br />
            <br />
            <br />
            <p className='sarlavha'>Til</p>
            <label htmlFor="Language"></label>
            <select className='select' name="Language" id="Language">
              <option className='option' value="">Tilnini tanlang</option>
              <option className='option' value="O'zbek">O'zbek</option>
              <option className='option' value="English">English</option>
              <option className='option' value="Russia">Russia</option>
              <option className='option' value="Arab">Arab</option>
              <option className='option' value="Xitoy">Xitoy</option>
            </select>
            <br />
            <br />
            <br />
            <p className='sarlavha'>Tarjimonning jinsi</p>
            <br />
            <label className='checkbox' htmlFor="Erkak">
              <input className='checkbox1' type="checkbox" name="jinsi" id="Erkak" />Erkak
            </label>
            <br />
            <br />
            <label className='checkbox' htmlFor="Ayol">
              <input className='checkbox1' type="checkbox" name="jinsi" id="Ayol" />Ayol
            </label>


          </form>

          <div className='btnwerka'>
            <Button button="qidirish" />
          </div>
        </div>

      </div>
    </div>

  )
}
