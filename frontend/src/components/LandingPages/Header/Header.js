import React, { useState, useEffect } from 'react';
import { NavHashLink } from 'react-router-hash-link';
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
} from 'reactstrap';
import { FaFacebookF, FaLinkedin, FaTwitter } from 'react-icons/fa';
import styles from './Header.module.css';
import { useMediaQuery } from 'react-responsive';

function Header() {
  const [open, setOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 993 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    const scrollListener = document.addEventListener('scroll', () => {
      const pos = document.scrollingElement.scrollTop;
      if (pos >= 100) {
        if (!navbar) setNavbar(true);
      } else {
        if (navbar) setNavbar(false);
      }
    });
    return () => {
      document.removeEventListener('scroll', scrollListener);
    };
  }, [navbar]);

  const toggle = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <>
      <Navbar
        expand="lg"
        className={styles['wrap-container']}
        fixed="top"
        style={{
          backgroundColor: '#16171A',
          borderBottom: '1px solid #303030',
          borderBottomLeftRadius: '20px',
          borderBottomRightRadius: '20px',
        }}
      >
        <div className="nav-contain" style={{ display: 'flex' }}>
          <NavbarBrand>
            <NavHashLink exact="true" to="/" smooth>
              <img
                src={`/images/logo/spardha-logo-${navbar ? (isMobile ? 'white' : 'black') : 'white'}.png`}
                alt="Sparhda Logo"
                height="70px"
                style={{ marginLeft: '2px' }}
              />
            </NavHashLink>
          </NavbarBrand>
          <div
            className="side"
            style={{
              position: 'absolute',
              right: isMobile ? '0' : '60px',
              background: open ? 'rgba(255, 255, 255, 0.90)' : 'transparent',
              width: isMobile ? '180px' : null,
              alignItems: isMobile ? 'center' : null,
              display: isMobile ? 'flex' : null,
              flexDirection: isMobile ? 'column' : null,
              paddingTop: isMobile ? '8vh' : null,
              height: isMobile ? (open ? '100vh' : '0vh') : null,
              top: isMobile ? '0' : null,
            }}
          >
            <NavbarToggler
              className={`${styles[`navbar-toggler${open ? '-open' : ''}`]} mx-2`}
              style={{ border: 'none' }}
              onClick={toggle}
            ></NavbarToggler>

            <Collapse
              navbar
              isOpen={open}
              style={{ display: open ? null : 'none' }}
            >
              <Nav navbar className={`ms-auto ${styles['navbar-nav']}`}>
                <NavItem className={styles['nav-items']}>
                  <NavHashLink
                    exact="true"
                    to="/"
                    className={styles['nav-links']}
                    onClick={() => setOpen(false)}
                    style={({ isActive }) => ({
                      color: isMobile
                        ? '#000'
                        : navbar
                        ? '#000'
                        : 'rgba(255, 255, 255, 0.9)',
                      borderBottom: isMobile
                        ? '1px solid black'
                        : active
                        ? 'none'
                        : '3px solid #4982F6',
                    })}
                    smooth
                  >
                    Home
                  </NavHashLink>
                </NavItem>
                <NavItem className={styles['nav-items']}>
                  <NavHashLink
                    exact="true"
                    to="/about#about"
                    className={styles['nav-links']}
                    onClick={() => setOpen(false)}
                    style={({ isActive }) => {
                      if (isActive) setActive(true);
                      return {
                        color: isMobile
                          ? '#000'
                          : navbar
                          ? '#000'
                          : 'rgba(255, 255, 255, 0.9)',
                        borderBottom: isMobile
                          ? '1px solid black'
                          : isActive
                          ? '3px solid #4982F6'
                          : null,
                      };
                    }}
                    smooth
                  >
                    About
                  </NavHashLink>
                </NavItem>
                <NavItem className={styles['nav-items']}>
                  <NavHashLink
                    exact="true"
                    to="/gallery#gallery"
                    className={styles['nav-links']}
                    onClick={() => setOpen(false)}
                    style={({ isActive }) => {
                      if (isActive) setActive(true);
                      return {
                        color: isMobile
                          ? '#000'
                          : navbar
                          ? '#000'
                          : 'rgba(255, 255, 255, 0.9)',
                        borderBottom: isMobile
                          ? '1px solid black'
                          : isActive
                          ? '3px solid #4982F6'
                          : null,
                      };
                    }}
                    smooth
                  >
                    Gallery
                  </NavHashLink>
                </NavItem>
                <NavItem
                  className={styles['nav-items']}
                  style={{ position: 'relative' }}
                >
                  <NavHashLink
                    exact="true"
                    className={styles['nav-links']}
                    onClick={() => setOpen(false)}
                    style={({ isActive }) => {
                      if (isActive) setActive(true);
                      return {
                        color: isMobile
                          ? '#000'
                          : navbar
                          ? '#000'
                          : 'rgba(255, 255, 255, 0.9)',
                        borderBottom: isMobile
                          ? '1px solid black'
                          : isActive
                          ? '3px solid red'
                          : null,
                      };
                    }}
                    smooth
                  >
                    Events
                    <svg
                      className={styles['dropdown-icon']}
                      width="12px"
                      height="9.43px"
                      viewBox="0 0 10 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{
                        marginLeft: '2px',
                        left: '919px',
                        bottom: '68.57px',
                      }}
                    >
                      <path
                        d="M4.19416 0.66795C4.59377 0.124132 5.40624 0.124133 5.80584 0.667951L9.02624 5.05058C9.51152 5.711 9.03994 6.64272 8.2204 6.64272H1.7796C0.960062 6.64272 0.488485 5.711 0.973765 5.05058L4.19416 0.66795Z"
                        fill="#ffffff"
                      />
                    </svg>
                  </NavHashLink>
                  <ul className={styles['dropdown-menu']}>
                    <li>
                      <NavHashLink
                        exact="true"
                        to="/events#events"
                        className={styles['dropdown-link']}
                        onClick={() => setOpen(false)}
                        style={({ isActive }) => {
                          if (isActive) setActive(true);
                          return {
                            color: isMobile
                              ? '#000'
                              : navbar
                              ? '#000'
                              : 'rgba(255, 255, 255, 0.9)',
                            borderBottom: isMobile
                              ? '3px solid black'
                              : isActive
                              ? '3px solid #4982F6'
                              : null,
                          };
                        }}
                        smooth
                      >
                        <svg
                          width="26"
                          height="15"
                          viewBox="0 0 37 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{ marginRight: '5px' }}
                        >
                          <path
                            d="M35.6946 3.72374H1.98117C1.46996 3.72374 1.05778 4.20561 1.05778 4.71682V15.2832C1.05778 15.7944 1.46996 16.2763 1.98117 16.2763H35.6946C36.2058 16.2763 36.618 15.7944 36.618 15.2832V4.71682C36.618 4.20561 36.2058 3.72374 35.6946 3.72374ZM34.3878 6.93115L18.4251 13.4645C17.9051 13.6527 17.2841 13.6347 16.7257 13.3745L8.13568 10.5186C7.46269 10.1878 7.16553 9.32376 7.56579 8.7749L10.7754 5.7719C11.1982 5.34835 11.8522 5.22295 12.3823 5.44803L21.6502 8.26834C22.2567 8.45559 22.8887 8.41519 23.4074 8.11316L33.6823 2.5815C34.2035 2.31698 34.7646 2.33755 35.2356 2.7272L36.4139 3.81423C36.9834 4.28172 36.8131 5.22845 36.1274 5.68449L34.3878 6.93115Z"
                            fill="#E04343"
                          />
                        </svg>
                        All Events
                      </NavHashLink>
                    </li>
                    <li>
                      <NavHashLink
                        exact="true"
                        to="/events#happening"
                        className={styles['dropdown-link']}
                        onClick={() => setOpen(false)}
                        style={({ isActive }) => {
                          if (isActive) setActive(true);
                          return {
                            color: isMobile
                              ? '#000'
                              : navbar
                              ? '#000'
                              : 'rgba(255, 255, 255, 0.9)',
                            borderBottom: isMobile
                              ? '3px solid black'
                              : isActive
                              ? '3px solid #4982F6'
                              : null,
                          };
                        }}
                        smooth
                      >
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{ marginRight: '5px' }}
                        >
                          <path
                            d="M17.707 16.707L12 11V3H10v8.828l-5.707 5.707 1.414 1.414L12 14.828l5.707 5.707 1.414-1.414z"
                            fill="#E04343"
                          />
                        </svg>
                        Happening Now
                      </NavHashLink>
                    </li>
                  </ul>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </div>
      </Navbar>
    </>
  );
}

export default Header;
