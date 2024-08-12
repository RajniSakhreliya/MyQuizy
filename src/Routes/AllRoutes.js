import Start from '../js/start';
import Score from '../js/Score';
import Submit from '../js/Submit';
import Category from '../js/Category';
import JoinQuiz from '../js/Joinquiz';
import Sidebar from '../js/sidebar';
import Login from '../js/login';
import ContestRules from '../js/SidebarPages/contestRules';
import AboutUs from '../js/SidebarPages/AboutUs';
import ContactUs from '../js/SidebarPages/ContactUs';
import PrivacyPolicy from '../js/Privacy';
import Home from '../js/home';

import React from 'react';
import { Routes, Route } from 'react-router-dom';

const AllRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Category />} />
                <Route path='/start' element={<Start />} />
                <Route path='/home' element={<Home />} />
                <Route path='/score' element={<Score />} />
                <Route path='/submit' element={<Submit />} />
                <Route path='/joinquiz' element={<JoinQuiz />} />
                <Route path='/Sidebar' element={<Sidebar />} />
                <Route path='/login' element={<Login />} />
                <Route path='/contest-rules' element={<ContestRules />} />
                <Route path='/aboutus' element={<AboutUs />} />
                <Route path='/contactus' element={<ContactUs />} />
                <Route path='/privacy' element={<PrivacyPolicy />} />

                <Route path='*' element={<Start />} />
            </Routes>
        </>
    )
}

export default AllRoutes