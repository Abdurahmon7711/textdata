import React from 'react'
import { Route, Routes} from 'react-router-dom'
import ChooseGits from '../pages/01werka/chooseGits/ChooseGits'
import Application from '../pages/Application/Application'
import Authorization from '../pages/authorization/authorization/Authorization'
import Blog from '../pages/ChineBlog/Blog'
import MainPage from '../pages/main/MainPage'
import About_platform from '../pages/01werka/About_platform/About_platform'
import Contact from '../pages/01werka/Contact/Contact'


function Routs() {
    return (
        <Routes>
            <Route path='/' element={<MainPage/>}></Route>
            <Route path='/authorization' element={<Authorization/>}></Route>
            <Route path='/blog' element={<Blog/>}></Route>
            <Route path='/application' element={<Application/>}></Route>
            <Route path='/chooseGits' element={<ChooseGits/>}></Route>
            <Route path='/aboutPlatform' element={<About_platform/>}></Route> 
            <Route path='/contacts' element={<Contact/>}></Route>

        </Routes>
    )
}

export default Routs
