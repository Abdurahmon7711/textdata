import React from 'react'
import './AboutApp.css'
import Nav from "../../../components/component/Navbar/Nav"
import Futter from "../../../components/component/Futter/Futter"
import Buttonout from '../../../components/component/buttonoutline/Buttonout'
import Button from '../../../components/component/buttnBg/Button'
function AboutApp() {
    return (
        <div>
            <Nav />
            <div className='container4'>
                <div className='about1'>
                    <h2>Id: #071364754</h2>
                    <Buttonout button2="arizlar ro'yhatiga qaytish" />
                </div>
                <div className='con-01'>
                    <div className='about2'>
                        <div className='mini1'>
                            <p>Tafsilotlar</p>
                        </div>
                        <div className='mini2'>
                            <p><b>E'lon beruvchi :</b> Abdusattor</p>
                            <p><b>Shahar:</b>Angliya, London </p>
                            <p><b>Sana:</b>23.01.2021 | 30.01.2021</p>
                            <p><b>Narx (gacha):</b>50$ kuniga</p>
                            <p><b>Kim kerak:</b>Tarjimon</p>
                            <p><b>Tillar:</b>Rus tili, Ingiliz tili</p>
                            <p><b>Odamlar soni:</b>4 kishi</p>
                            <div className='mini5'>
                                <Button button="Arizaga javob qaytarish"/>
                            </div>
                        </div>
                    </div>
                    <div className='about3'>
                        <div className='mini3'>
                            <p>Ariza matni</p>
                        </div>
                        <div className='mini4'>
                            <p className='p1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In bibendum sodales tristique dolor turpis. Non pretium ante gravida suscipit faucibus lectus aliquet nullam. Justo sapien quam tincidunt lectus laoreet lacus eu sit. Aliquam nulla pellentesque arcu est ullamcorper pretium, elit.</p>

                            <p className='p1'>Nunc adipiscing vel praesent urna. Vulputate amet phasellus lobortis at cras pellentesque consectetur purus. Lectus sem aliquet hendrerit cras adipiscing sit nisl diam. Volutpat pretium semper lacus, amet aliquam orci. Quis semper posuere nulla sit eu feugiat eget. Donec dignissim sed et mi diam eu. Tincidunt id convallis euismod enim mauris, facilisis faucibus pharetra.</p>

                            <p className='p1'> At massa arcu ut nibh nullam netus. At mi non viverra eu scelerisque mollis id. Diam nec sed hendrerit lectus libero mattis amet. Sit mi pharetra felis, pretium et ac quisque dolor. Massa elit, elit vitae diam est turpis. Ipsum praesent risus, ornare cras tortor nulla diam sodales. Metus consectetur pellentesque dictumst facilisi quis sit. Vulputate sit eu, suspendisse in iaculis duis turpis. Scelerisque adipiscing nec et nunc, venenatis, habitant tortor. Lobortis aenean dui turpis elit non viverra. Est ornare sapien auctor pretium. Nec, nulla elementum nulla arcu mauris ut. Non ultrices senectus tellus etiam pharetra rhoncus erat nulla. Dictum purus ante nibh elementum eu etiam vivamus in.</p>
                            <div className='mini6'>
                                <span>23.06.21</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </div>
            <Futter />
        </div>
    )
}

export default AboutApp
