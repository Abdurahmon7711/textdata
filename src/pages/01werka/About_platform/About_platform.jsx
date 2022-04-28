import React from 'react'
import Buttonout from '../../../components/component/buttonoutline/Buttonout'
import "./About_platform.css"
import Group340 from "../../../assets/01werka/About_platform/Group 340.png"
import Nav from '../../../components/component/Navbar/Nav'
import Futter from '../../../components/component/Futter/Futter'

export default function About_platform() {
    return (
        
        <div className='container'>
            <Nav/>
            <div className='platform'>
                <div className='platform_left'>
                    <p className='platformText'>Platforma haqida</p>
                    <div>
                        <p className='lorem'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et mi id quis nunc pharetra, augue eget. Cursus commodo, sodales vulputate ut tellus habitant pretium. Morbi placerat vestibulum nulla et enim. Tortor ultricies vitae sed auctor lectus magna.
                            Auctor morbi et nisi egestas cursus. Amet, aliquet eget sed neque ultrices nulla eu fermentum. Ipsum vel massa, dui a tellus commodo adipiscing enim nec. Mi hendrerit id egestas porttitor bibendum vulputate. Nisi molestie donec non, pellentesque odio diam vitae.</p>
                    </div>
                    <div className='btnout'>
                        <Buttonout button2="Bog'lash"/>
                    </div>
                </div>
                <div className='platform_right'>
                    <img src={Group340} alt="" />
                </div>
            </div>
            <Futter/>
        </div>
    )
}
