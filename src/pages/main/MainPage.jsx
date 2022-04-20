import React from 'react'

function MainPage() {
    return (

        <div className='container'>
            {/* <header/> */}
            <div className='FirstMainBlock'>
                {/* <BigSearch/> */}
                <div className='LeftFirstMainBlock'>
                    {/* <TextBig/>*/}
                    <div className="ImgLeftMainBlock">
                        <img src="./img/phone.jpg"/>
                        <div className="ImgLowLeftBlock">
                            <img/>
                            <img/>
                            <img/>
                        </div>
                    </div>
                </div>
            </div>

            {/* <TextMini/> */}
            <div>
                <div className="forCongratulations">
                    <h4>Tadbirkorlar uchun</h4>
                    <p>Ushbu platforma yordamida siz chet elliklar bilan kelishish, 
                    biznesni rivojlantirish uchun tarjimon va gitlarni topishingiz mumkin.
                    O’zingiz uchun Git tanlang yoki shunchaki ariza qoldiring.</p>
                    <button>Ariza qoldirish</button>
                    <button>Gitni tanlash</button>
                </div>
                <div className='imgManWithPhone'>
                    <img/>
                </div>
            </div>

            <div>
                <div className="imgGirlWithEarth">
                    <img/>
                </div>
                <div>
                    <h4>Gitlar uchun</h4>
                    <p>Ushbu platforma yordamida siz o’zingiz uchunv mijozlarni topishingiz va karyera qilishingiz mumkin.
                    Gits.uz platformasi sizni qo’llab quvvatlab turadi.
                    Xoziroq ro’yhattan o’ting, ma’lumotlaringizni to’ldiring va o’z karyerangizni boshlang!</p>
                    <button>Ro‘yhattan o’tish</button>
                </div>
            </div>
            {/* footer/> */}
        </div>
    )
}

export default MainPage
