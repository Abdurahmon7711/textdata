import React from 'react'
import TabPanel from "../TabPanel/TabPanel"
import Nav from "../../../components/component/Navbar/Nav"
import "./register.scss"
import Futter from "../../../components/component/Futter/Futter"


function Authorization() {
    return (
        <div className='ss'>
            <Nav/>
            <div className="container registerPage">
                <div className="registerBlock mt-10">
                    <TabPanel />
                </div>
            </div>
            <Futter/>
        </div>

    )
}

export default Authorization

