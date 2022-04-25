import React from 'react'
import { Route, Routes} from 'react-router-dom'
import Authorization from '../pages/authorization/authorization/Authorization'
import Blog from '../pages/ChineBlog/Blog'
import MainPage from '../pages/main/MainPage'

function Routs() {
    return (
        <Routes>
            <Route path='/' element={<MainPage/>}></Route>
            <Route path='/authorization' element={<Authorization/>}></Route>
            <Route path='/blog' element={<Blog/>}></Route>
        </Routes>
    )
}

export default Routs
