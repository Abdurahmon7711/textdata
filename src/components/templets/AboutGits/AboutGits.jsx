import React from 'react'
import './AboutGits.css'
import Ellipse from "../../../assets/01werka/ChooseGits/Ellipse1.png"
import star from "../../../assets/01werka/ChooseGits/star.png"
import commit from "../../../assets/01werka/ChooseGits/commit.png"
import money from "../../../assets/01werka/ChooseGits/money.png"
import check from "../../../assets/01werka/ChooseGits/check.png"
import see from "../../../assets/01werka/ChooseGits/see.png"
import Button from '../../component/buttnBg/Button'

export default function AboutGits() {
  return (
    <div>
      <div className='AboutGit'>
        <div className='left'>
          <img className='rasm' src={Ellipse} alt="" />
          <div className='button'>
            <div className='divcha1'>
              <img className='rasm007' src={star} alt="" />
              <p className='abouttekst10'>10.0/10</p>
            </div>
            <div className='divcha'>
              <img className='rasm007' src={commit} alt="" />
              <p className='abouttekst10'>Fikrlar: 34</p>
            </div>
            <div className='divcha'>
              <img className='rasm007' src={money} alt="" />
              <p className='abouttekst10'>Kuniga: 350$</p>
            </div>
            <p className='kuniga'>Soatiga: 50$</p>
          </div>


        </div>
        <div className='ortada'>
          <h2 className='h22'>Tashpolatov Sherzod</h2>
          <p className='yosh'>33 yosh | Gid va Tarjimon</p>
          <p className='ortada_p'> <b className='bb'>Xizmatlar (shaharlar):</b>  Gonkong, Guanchjou, Guzhen, Dongguan, Makao, Foshan, Tszyanmen, Chjuxay, Shenchjen</p>
          <p className='ortada_p'> <b className='bb'> Tillar:</b> Rus tili, Ingiliz tili, Nemis tili.</p>

          <p className='ortada_p'> <b className='bb'>O'zim haqimda:</b>  Salom! Mening ismim William. Men Rossiyada yashaganman. Men sizni Xitoy madaniyati bilan tanishtirishdan xursand bo'laman. Menda ekskursiya bo'yicha ko'rsatma litsenziyasi mavjud. 10 yildan ortiq ish tajribasi. Men mashinamda individual ko'rsatma tarjimonining xizmatlarini namoyish etaman. -Men sizga marshrutlarni oldindan...</p>
        </div>
        <div className='right'>
          <div className='top'>
            <img src={check} alt="" />
            <img className='see' src={see} alt="" />
          </div>


          <div className='bottom'>
            <Button button="Ko‘rish"/>
          </div>
        </div>





      </div>
    </div>
  )
}
