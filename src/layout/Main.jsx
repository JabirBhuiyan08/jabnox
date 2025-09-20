import React from 'react';
import Navbar from '../nav/Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../footer/Footer';

const Main = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <div className="flex flex-col min-h-screen w-full bg-black text-white">
      {/* Navbar */}
      {!isLoginPage && <Navbar />}

      {/* Main content should grow to fill screen */}
      <div className="flex-1 pt-24">
        <Outlet />
      </div>

      {/* Footer (only if not login) */}
      {!isLoginPage && <Footer />}
    </div>
  );
};


export default Main;
