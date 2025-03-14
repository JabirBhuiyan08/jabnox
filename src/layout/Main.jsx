import React from 'react';
import Navbar from '../nav/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../footer/Footer';

const Main = () => {
    return (
        <div className='w-full bg-black text-white'>
            <Navbar></Navbar>
            <div className='container mx-auto min-h-screen pt-32'>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;