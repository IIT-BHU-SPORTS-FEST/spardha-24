import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router';
import styles from './Register.module.css';
import Footer from '../Footer/footer';

import bgImage from './Background Image.jpeg';
import playerImg from './picture.png';

function Register() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('token')) navigate('/dashboard/home');
  }, [navigate]);

  return (
    <div className={styles.pageWrapper}>
      {/* LAYER 1: Locked Background & Player (They are fused together and never scroll out of sync) */}
      <div className={styles.fixedEnvironment}>
        <div
          className={styles.bgGraphic}
          style={{ backgroundImage: `url("${bgImage}")` }}
        ></div>
        <img src={playerImg} alt="Football Player" className={styles.playerGraphic} />
      </div>

      {/* LAYER 2: Scrollable Content (Form on the right, Footer automatically pushed down) */}
      <div className={styles.scrollableLayer}>
        <div className={styles.formSection}>
          <div className={styles.cardContainer}>
            <Outlet />
          </div>
        </div>
        <div className={styles.footerWrapper}>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Register;