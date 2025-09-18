import React, { useEffect } from 'react';
import { 
  // Outlet,
 useNavigate } from 'react-router';
// import styles from './Register.module.css';
// import Carousel from '../Home/Carousel/Carouselhp';
import Footer from '../Footer/footer';
// import Header from '../Header/Header';


function Register() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('token')) navigate('/dashboard/home');
  }, [navigate]);

  return (
    <div className="bg" >
       <div
    style={{
      position: 'fixed',
      inset: 0, // top:0, left:0, right:0, bottom:0
      backgroundImage: 'url(/images/bg/hero-bg1.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      filter: 'blur(8px)',
      zIndex: -1,
    }}
  ></div>
      {/* <Carousel /> */}
      {/* <Header/> */}
      {/* <div className={`${styles.container}`} id="register">
        <div className={`${styles.card}`}>
          <Outlet />
        </div>
      </div> */}
     <div
        style={{
          width: '100vw',
          height: '70vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '2rem',
          fontWeight: 'bold',
          color: '#fff',
          textAlign: 'center'
        }}
      >
        Opening Soon
      </div>
      <Footer/>
    </div>
  );
}

export default Register;
