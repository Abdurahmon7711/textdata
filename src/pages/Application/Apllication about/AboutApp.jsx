// import React from 'react'
// import './AboutApp.css'
// import { render } from "react-dom";
// import "react-responsive-modal/styles.css";
// import { Modal } from "react-responsive-modal";
// import Nav from "../../../components/component/Navbar/Nav"
// import Futter from "../../../components/component/Futter/Futter"
// import Buttonout from '../../../components/component/buttonoutline/Buttonout'
// import Button from '../../../components/component/buttnBg/Button'
// import man from "../../../assets/Application/man.png"
// import map from "../../../assets/Application/map2.png"
// import calendar from "../../../assets/Application/calendar2.png"
// import hamyon from "../../../assets/Application/hamyon.png"
// import mansearch from "../../../assets/Application/mansearch.png"
// import language from "../../../assets/Application/language.png"
// import group from "../../../assets/Application/group.png"
// function AboutApp() {
//     // const styles = {
//     //     fontFamily: "sans-serif",
//     //     textAlign: "center"
//     // };
    
//     class App extends React.Component {
//         state = {
//             open: false
//         };
    
//         onOpenModal = () => {
//             this.setState({ open: true });
//         };
    
//         onCloseModal = () => {
//             this.setState({ open: false });
//         };
//     }
//     const { open } = this.state;
//     return (
//         <div>
//             <Nav />
//             <div className='container4'>
//                 <div className='about1'>
//                     <h2>Id: #071364754</h2>
//                     <Buttonout button2="arizlar ro'yhatiga qaytish" />
//                 </div>
//                 <div className='con-01'>
//                     <div className='con-02'>
//                         <div className='about2'>
//                             <div className='mini1'>
//                                 <p>Tafsilotlar</p>
//                             </div>
//                             <div className='mini2'>
//                                 <div className='a1'>
//                                     <img className='a2' src={man} alt="m" />
//                                     <p><b>E'lon beruvchi :</b> Abdusattor</p>
//                                 </div>
//                                 <div className='a1'>
//                                     <img className='a2' src={map} alt="" />
//                                     <p><b>Shahar:</b>Angliya, London </p>
//                                 </div>
//                                 <div className='a1'>
//                                     <img className='a2' src={calendar} alt="m" />
//                                     <p><b>Sana:</b>23.01.2021 | 30.01.2021</p>
//                                 </div>
//                                 <div className='a1'>
//                                     <img className='a2' src={hamyon} alt="m" />
//                                     <p><b>Narx (gacha):</b>50$ kuniga</p>
//                                 </div>
//                                 <div className='a1'>
//                                     <img className='a2' src={mansearch} alt="m" />
//                                     <p><b>Kim kerak:</b>Tarjimon</p>
//                                 </div>
//                                 <div className='a1'>
//                                     <img className='a2' src={language} alt="m" />
//                                     <p><b>Tillar:</b>Rus tili, Ingiliz tili</p>
//                                 </div>
//                                 <div className='a1'>
//                                     <img className='a2' src={group} alt="m" />
//                                     <p><b>Odamlar soni:</b>4 kishi</p>
//                                 </div>
//                                 <div className='mini5'>
//                                     <Button button="Arizaga javob qaytarish" />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className='con-03'>
//                         <div className='about3'>
//                             <div className='mini3'>
//                                 <p>Ariza matni</p>
//                             </div>
//                             <div className='mini4'>
//                                 <p className='p1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In bibendum sodales tristique dolor turpis. Non pretium ante gravida suscipit faucibus lectus aliquet nullam. Justo sapien quam tincidunt lectus laoreet lacus eu sit. Aliquam nulla pellentesque arcu est ullamcorper pretium, elit.</p>

//                                 <p className='p1'>Nunc adipiscing vel praesent urna. Vulputate amet phasellus lobortis at cras pellentesque consectetur purus. Lectus sem aliquet hendrerit cras adipiscing sit nisl diam. Volutpat pretium semper lacus, amet aliquam orci. Quis semper posuere nulla sit eu feugiat eget. Donec dignissim sed et mi diam eu. Tincidunt id convallis euismod enim mauris, facilisis faucibus pharetra.</p>

//                                 <p className='p1'> At massa arcu ut nibh nullam netus. At mi non viverra eu scelerisque mollis id. Diam nec sed hendrerit lectus libero mattis amet. Sit mi pharetra felis, pretium et ac quisque dolor. Massa elit, elit vitae diam est turpis. Ipsum praesent risus, ornare cras tortor nulla diam sodales. Metus consectetur pellentesque dictumst facilisi quis sit. Vulputate sit eu, suspendisse in iaculis duis turpis. Scelerisque adipiscing nec et nunc, venenatis, habitant tortor. Lobortis aenean dui turpis elit non viverra. Est ornare sapien auctor pretium. Nec, nulla elementum nulla arcu mauris ut. Non ultrices senectus tellus etiam pharetra rhoncus erat nulla. Dictum purus ante nibh elementum eu etiam vivamus in.</p>
//                                 <div className='mini6'>
//                                     <span>23.06.21</span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <h2>react-responsive-modal</h2>
//                 <button onClick={this.onOpenModal}>Open modal</button>
//                 <Modal open={open} onClose={this.onCloseModal}>
//                     <h2>Simple centered modal</h2>
//                     <p>
//                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
//                         pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
//                         hendrerit risus, sed porttitor quam.
//                     </p>
//                 </Modal>
//             </div>
//             <Futter />
//         </div>
//     )
// }

// export default AboutApp
