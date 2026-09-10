import React from 'react';
import Header from './Header/Header';
// import HomePage from './Home/HomePage/Home';
// import Footer from './Footer/Footer';
import { Outlet, useLocation } from 'react-router';

function LandingPages() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  return (
    <div className={isHome ? 'home-layout' : ''}>
      <Header />
      {/* <HomePage /> */}
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
}

export default LandingPages;
