import React from 'react'
import TabPanel from "../TabPanel/TabPanel"
import Nav from "../../../components/component/Navbar/Nav"
import "./register.scss"
import Footer from "../../../components/component/Futter/Futter"


function Authorization() {
    return (
        <div>
            <Nav/>
            <div className="container registerPage">
                <div className="registerBlock mt-10">
                    <TabPanel />
                </div>
            </div>
            <Footer/>
        </div>

    )
}

export default Authorization

