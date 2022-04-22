import React from 'react'
// import AdvancedSearch from "../../components/templets/AdvancedSearch/AdvancedSearch"
import "./main.scss"

// import TitleBig from "../../components/component/titleBig/Title"
import Nav from "../../components/component/Navbar/Nav"
import Footer from "../../components/component/Futter/Futter"
// import images
import ArrowNumber from "../../assets/Nurlan/img/MainPage/ArrowNumber.png"
import phone from "../../assets/Nurlan/img/MainPage/GuyAndPhone.jpg"
import MenWithPhone from "../../assets/Nurlan/img/MainPage/MenWithPhone.png"
import GirlWithEarth from "../../assets/Nurlan/img/MainPage/GirlWithEarth.png"
import GirlPlatform from "../../assets/Nurlan/img/MainPage/GirlPlatform.png"
import MenWithNote from "../../assets/Nurlan/img/MainPage/MenWithNote.png"


function MainPage() {
    return (
        <div>
            <Nav />
            <div className="container">
                <div className='FirstMainBlock'>
                    <div className='BigSearch'>

                    </div>
                    {/* <BigSearch/> */}
                    <div className='LeftFirstMainBlock'>
                        <h3 className='TextBig'>Dunyo bo'ylab ishonchli gidlar va tarjimonlarni taklif qilamiz</h3>
                        {/* <TextBig/>*/}
                        <div className="ImgLeftMainBlock">
                            <img src={phone} />
                        </div>
                    </div>
                </div>

                {/* <TextMini/> */}
                <div className="middleBlock">
                    <div className="forCongratulations">
                        <h4>Tadbirkorlar uchun</h4>
                        <p className='forCongratulationsText'>Ushbu platforma yordamida siz chet elliklar bilan kelishish,
                            biznesni rivojlantirish uchun tarjimon va gitlarni topishingiz mumkin.
                            O’zingiz uchun Git tanlang yoki shunchaki ariza qoldiring.</p>
                        <button>Ariza qoldirish</button>
                        <button>Gitni tanlash</button>
                    </div>
                    <div className='imgManWithPhone'>
                        <img src={MenWithPhone} />
                    </div>
                </div>

                <div className="middleBlockLow">
                    <div className="imgGirlWithEarth">
                        <img src={GirlWithEarth} />
                    </div>
                    <div>
                        <h4>Gitlar uchun</h4>
                        <p className="middleBlockLowText">Ushbu platforma yordamida siz o’zingiz uchunv mijozlarni topishingiz va karyera qilishingiz mumkin.
                            Gits.uz platformasi sizni qo’llab quvvatlab turadi.
                            Xoziroq ro’yhattan o’ting, ma’lumotlaringizni to’ldiring va o’z karyerangizni boshlang!</p>
                        <button>Ro‘yhattan o’tish</button>
                    </div>
                </div> 
                
                <div className="LowBlock">
                    <div className='ArrowBlock'>
                        <div>
                            <img src={GirlPlatform}/>
                            <h4>Ro’yxattan o’tasiz</h4>
                            <p>Avvalo platformadan Git/Tarjimon yokida Mijoz sifatida ro’yhattan o’tasiz.</p>
                        </div>
                        <div>
                            <img src={ArrowNumber}/>
                        </div>
                        <div>
                            <img src={MenWithNote}/>
                            <h4>So‘rov qoldirasiz</h4>
                            <p>Mijoz so‘rov qoldirishi mumkin yokida o‘zi Git/Tarjimoni tanlashi mumkin.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default MainPage
