import React, { useState } from 'react'
// import { Modal } from 'react-responsive-modal';
// import 'npm i react-modal/styles.css';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import './AboutApp.css'
import Nav from "../../../components/component/Navbar/Nav"
import Futter from "../../../components/component/Futter/Futter"
import Buttonout from '../../../components/component/buttonoutline/Buttonout'
import Button from '../../../components/component/buttnBg/Button'
import man from "../../../assets/Application/man.png"
import map from "../../../assets/Application/map2.png"
import calendar from "../../../assets/Application/calendar2.png"
import hamyon from "../../../assets/Application/hamyon.png"
import mansearch from "../../../assets/Application/mansearch.png"
import language from "../../../assets/Application/language.png"
import group from "../../../assets/Application/group.png"
import Title from '../../../components/component/titleBig/Title';






const customStyles = {
    content: {
        width:'50%',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

function AboutApp() {
    // const [openModal, setOpenModal] = useState(false)

    // function onClickButton(e) {
    //     e.preventDefault()
    //     setOpenModal(true)
    // }

    // function onCloseModal() {
    //     setOpenModal(false)
    // }
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div>
            <Nav />
            <div className='container4'>
                <div className='about1'>
                    <h2>Id: #071364754</h2>
                    <Buttonout button2="arizlar ro'yhatiga qaytish" />
                </div>
                <div className='con-01'>
                    <div className='con-02'>
                        <div className='about2'>
                            <div className='mini1'>
                                <p>Tafsilotlar</p>
                            </div>
                            <div className='mini2'>
                                <div className='a1'>
                                    <img className='a2' src={man} alt="m" />
                                    <p className=''><b className='b001'>E'lon beruvchi :</b> Abdusattor</p>
                                </div>
                                <div className='a1'>
                                    <img className='a2' src={map} alt="" />
                                    <p><b className='b001'>Shahar:</b>Angliya, London </p>
                                </div>
                                <div className='a1'>
                                    <img className='a2' src={calendar} alt="m" />
                                    <p><b className='b001'>Sana:</b>23.01.2021 | 30.01.2021</p>
                                </div>
                                <div className='a1'>
                                    <img className='a2' src={hamyon} alt="m" />
                                    <p><b className='b001'>Narx (gacha):</b>50$ kuniga</p>
                                </div>
                                <div className='a1'>
                                    <img className='a2' src={mansearch} alt="m" />
                                    <p><b className='b001'>Kim kerak:</b>Tarjimon</p>
                                </div>
                                <div className='a1'>
                                    <img className='a2' src={language} alt="m" />
                                    <p><b className='b001'>Tillar:</b>Rus tili, Ingiliz tili</p>
                                </div>
                                <div className='a1'>
                                    <img className='a2' src={group} alt="m" />
                                    <p><b className='b001'>Odamlar soni:</b>4 kishi</p>
                                </div>
                                <div className='mini5'>
                                    <button onClick={openModal} className='modalbtn'>Arizaga javob qaytarish</button>
                                    <Modal
                                        isOpen={modalIsOpen}
                                        onAfterOpen={afterOpenModal}
                                        onRequestClose={closeModal}
                                        style={customStyles}
                                        contentLabel="Example Modal"
                                    >
                                        <div>
                                            <div className='type2'>
                                                <Title text="Xabaringizni yozing"/>
                                            </div>
                                            <div className='type3'>
                                                <input className='miniinp' type="text" placeholder='Text' />
                                            </div>
                                        </div>
                                    </Modal>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='con-03'>
                        <div className='about3'>
                            <div className='mini3'>
                                <p>Ariza matni</p>
                            </div>
                            <div className='mini4'>
                                <p className='p0001'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In bibendum sodales tristique dolor turpis. Non pretium ante gravida suscipit faucibus lectus aliquet nullam. Justo sapien quam tincidunt lectus laoreet lacus eu sit. Aliquam nulla pellentesque arcu est ullamcorper pretium, elit.</p>

                                <p className='p0001'>Nunc adipiscing vel praesent urna. Vulputate amet phasellus lobortis at cras pellentesque consectetur purus. Lectus sem aliquet hendrerit cras adipiscing sit nisl diam. Volutpat pretium semper lacus, amet aliquam orci. Quis semper posuere nulla sit eu feugiat eget. Donec dignissim sed et mi diam eu. Tincidunt id convallis euismod enim mauris, facilisis faucibus pharetra.</p>

                                <p className='p0001'> At massa arcu ut nibh nullam netus. At mi non viverra eu scelerisque mollis id. Diam nec sed hendrerit lectus libero mattis amet. Sit mi pharetra felis, pretium et ac quisque dolor. Massa elit, elit vitae diam est turpis. Ipsum praesent risus, ornare cras tortor nulla diam sodales. Metus consectetur pellentesque dictumst facilisi quis sit. Vulputate sit eu, suspendisse in iaculis duis turpis. Scelerisque adipiscing nec et nunc, venenatis, habitant tortor. Lobortis aenean dui turpis elit non viverra. Est ornare sapien auctor pretium. Nec, nulla elementum nulla arcu mauris ut. Non ultrices senectus tellus etiam pharetra rhoncus erat nulla. Dictum purus ante nibh elementum eu etiam vivamus in.</p>
                                <div className='mini6'>
                                    <span>23.06.21</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Futter />
        </div>
    )
}

export default AboutApp
