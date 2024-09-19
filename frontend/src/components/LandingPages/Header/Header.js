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
  const [, setActive] = useState();

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
    setOpen((prevState) => {
      return prevState ^ 1;
    });
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
          width: '100vw',
        }}
      >
        <div className="nav-contain" style={{ display: 'flex' }}>
          <NavbarBrand>
            <NavHashLink exact="true" to="/" smooth>
              <img
                src={`/images/logo/spardha-logo-${
                  navbar ? (isMobile ? 'white' : 'white') : 'white'
                }.png`}
                alt="Sparhda Logo"
                height="70px"
                // style={{ marginLeft: '2px' }}
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
              className={`${
                styles[`navbar-toggler${open ? '-open' : ''}`]
              } mx-2`}
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
                    to="/"
                    className={styles['nav-links']}
                    onClick={() => {
                      setOpen(false);
                    }}
                    style={({ isActive }) => {
                      const active =
                        isActive && window.location.pathname === '/';
                      return {
                        color: isMobile
                          ? 'black'
                          : navbar
                          ? 'white'
                          : 'rgba(255, 255, 255, 0.9)',
                        borderBottom: isMobile
                          ? '1px solid black'
                          : active
                          ? '3px solid #4982F6'
                          : null,
                      };
                    }}
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
                    onClick={() => {
                      setOpen(false);
                    }}
                    style={({ isActive }) => {
                      if (isActive) {
                        setActive(true);
                      }
                      return {
                        color: isMobile
                          ? 'black'
                          : navbar
                          ? 'white'
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
                {/* <NavItem className={styles['nav-items']}>
                  <NavHashLink
                    exact="true"
                    to="/gallery#gallery"
                    className={styles['nav-links']}
                    onClick={() => {
                      setOpen(false);
                    }}
                    style={({ isActive }) => {
                      if (isActive) {
                        setActive(true);
                      }
                      return {
                        color: isMobile
                          ? 'black'
                          : navbar
                          ? 'white'
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
                </NavItem> */}
                {/* <NavItem className={styles['nav-items']}>
                  <NavHashLink
                    exact="true"
                    // to="/events#events"
                    to="/matches"
                    className={styles['nav-links']}
                    onClick={() => {
                      setOpen(false);
                    }}
                    style={({ isActive }) => {if(isActive){setActive(true)}
                      return {
                        color: isMobile
                          ? '#000'
                          : navbar
                          ? '#000'
                          : 'rgba(255, 255, 255, 0.9)',
                          borderBottom:isMobile?'1px solid black': isActive ? '3px solid red' : null,
                        };
                    }}
                    smooth
                  >
                    Matches
                  </NavHashLink>
                </NavItem> */}
                <NavItem
                  className={styles['nav-items']}
                  style={{ position: 'relative' }}
                >
                  <NavHashLink
                    exact="true"
                    className={styles['nav-links']}
                    onClick={() => {
                      setOpen(false);
                    }}
                    style={() => {
                      return {
                        color: isMobile
                          ? 'black'
                          : navbar
                          ? 'white'
                          : 'rgba(255, 255, 255, 0.9)',
                        borderBottom: isMobile ? '1px solid black' : null,
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
                        onClick={() => {
                          setOpen(false);
                        }}
                        style={({ isActive }) => {
                          if (isActive) setActive(true);
                          return {
                            color: isMobile
                              ? 'black'
                              : navbar
                              ? 'white'
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
                            d="M16.5 22C13.4444 22 10.8472 20.9306 8.70833 18.7917C6.56944 16.6528 5.5 14.0556 5.5 11C5.5 10.6639 5.51528 10.3278 5.54583 9.99167C5.57639 9.65556 5.62222 9.31944 5.68333 8.98333C5.53056 9.04444 5.34722 9.09028 5.13333 9.12083C4.91944 9.15139 4.73611 9.16667 4.58333 9.16667C3.3 9.16667 2.21528 8.72361 1.32917 7.8375C0.443055 6.95139 0 5.86667 0 4.58333C0 3.3 0.420444 2.21528 1.26133 1.32917C2.10222 0.443055 3.16372 0 4.44583 0C5.45417 0 6.3635 0.282333 7.17383 0.847C7.98417 1.41167 8.55678 2.13767 8.89167 3.025C9.9 2.10833 11.0538 1.375 12.353 0.825C13.6522 0.275 15.0346 0 16.5 0H36.6667V7.33333H27.5V11C27.5 14.0556 26.4306 16.6528 24.2917 18.7917C22.1528 20.9306 19.5556 22 16.5 22ZM4.58333 6.41667C5.10278 6.41667 5.5385 6.24067 5.8905 5.88867C6.2425 5.53667 6.41789 5.10156 6.41667 4.58333C6.41544 4.06511 6.23944 3.63 5.88867 3.278C5.53789 2.926 5.10278 2.75 4.58333 2.75C4.06389 2.75 3.62878 2.926 3.278 3.278C2.92722 3.63 2.75122 4.06511 2.75 4.58333C2.74878 5.10156 2.92478 5.53728 3.278 5.8905C3.63122 6.24372 4.06633 6.41911 4.58333 6.41667ZM16.5 14.6667C17.5083 14.6667 18.3718 14.3079 19.0905 13.5905C19.8092 12.8731 20.1679 12.0096 20.1667 11C20.1654 9.99044 19.8067 9.12756 19.0905 8.41133C18.3743 7.69511 17.5108 7.33578 16.5 7.33333C15.4892 7.33089 14.6263 7.69022 13.9113 8.41133C13.1963 9.13245 12.837 9.99533 12.8333 11C12.8297 12.0047 13.189 12.8682 13.9113 13.5905C14.6337 14.3128 15.4966 14.6716 16.5 14.6667Z"
                            fill="#F8F8F8"
                          />
                        </svg>
                        Sports & Games
                      </NavHashLink>
                    </li>
                    <li>
                      <NavHashLink
                        exact="true"
                        to="/espardha#espardha"
                        className={styles['dropdown-link']}
                        onClick={() => {
                          setOpen(false);
                        }}
                        style={({ isActive }) => {
                          if (isActive) {
                            setActive(true);
                          }
                          return {
                            color: isMobile
                              ? 'black'
                              : navbar
                              ? 'white'
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
                          viewBox="0 0 31 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{ marginRight: '5px' }}
                        >
                          <path
                            d="M30.3033 17.4271L28.5817 5.39C28.3664 3.89278 27.6152 2.52318 26.4661 1.53295C25.317 0.542711 23.8473 -0.00161913 22.3271 3.61782e-06H8.0171C4.87396 3.61782e-06 2.20466 2.29429 1.76241 5.39L0.0407977 17.4271C-0.0791588 18.2585 0.0669822 19.1063 0.458498 19.8503C0.850014 20.5944 1.46703 21.1969 2.22206 21.5725C2.97709 21.9481 3.8318 22.0777 4.665 21.9429C5.4982 21.8081 6.2676 21.4157 6.86409 20.8214L10.4337 17.2857H19.9105L23.4643 20.8214C24.2224 21.5757 25.2491 22 26.3073 22C28.7713 22 30.6508 19.8471 30.3033 17.4271ZM13.5926 9.42857H10.4337V12.5714H8.85421V9.42857H5.69528V7.85715H8.85421V4.71429H10.4337V7.85715H13.5926V9.42857ZM19.9105 7.85715C19.0418 7.85715 18.331 7.15 18.331 6.28572C18.331 5.42143 19.0418 4.71429 19.9105 4.71429C20.7792 4.71429 21.4899 5.42143 21.4899 6.28572C21.4899 7.15 20.7792 7.85715 19.9105 7.85715ZM23.0694 12.5714C22.2007 12.5714 21.4899 11.8643 21.4899 11C21.4899 10.1357 22.2007 9.42857 23.0694 9.42857C23.9381 9.42857 24.6489 10.1357 24.6489 11C24.6489 11.8643 23.9381 12.5714 23.0694 12.5714Z"
                            fill="#F8F8F8"
                          />
                        </svg>
                        ESpardha
                      </NavHashLink>
                    </li>
                  </ul>
                </NavItem>

                <NavItem className={styles['nav-items']}>
                  <NavHashLink
                    exact="true"
                    to="/sponsors#sponsors"
                    className={styles['nav-links']}
                    onClick={() => {
                      setOpen(false);
                    }}
                    style={({ isActive }) => {
                      if (isActive) {
                        setActive(true);
                      }
                      return {
                        color: isMobile
                          ? 'black'
                          : navbar
                          ? 'white'
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
                    Sponsors
                  </NavHashLink>
                </NavItem>

                <NavItem className={styles['nav-items']}>
                  <NavHashLink
                    exact="true"
                    to="/contactus#contactus"
                    className={styles['nav-links']}
                    onClick={() => {
                      setOpen(false);
                    }}
                    style={({ isActive }) => {
                      if (isActive) {
                        setActive(true);
                      }
                      return {
                        color: isMobile
                          ? 'black'
                          : navbar
                          ? 'white'
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
                    Contact
                  </NavHashLink>
                </NavItem>

                <NavItem
                  className={styles['nav-items']}
                  style={{ marginRight: '60px' }}
                >
                  <Nav
                    navbar
                    className={`ms-auto ${styles['mini-navbar-nav']}`}
                  >
                    <NavItem className={styles['mini-nav-items']}>
                      <a
                        href="https://www.facebook.com/Spardha.IIT.BHU/"
                        className={styles['nav-icons']}
                        onClick={() => {
                          setOpen(false);
                        }}
                        style={{
                          color: isMobile
                            ? 'black'
                            : navbar
                            ? 'white'
                            : 'rgba(255, 255, 255, 0.9)',
                        }}
                        target="_blank"
                        rel="noopener noreferrer"
                        smooth
                      >
                        <FaFacebookF className={`${styles.icons_lower}`} />
                      </a>
                    </NavItem>

                    <NavItem className={styles['mini-nav-items']}>
                      <a
                        href="https://www.linkedin.com/company/spardha/about/"
                        className={styles['nav-icons']}
                        onClick={() => {
                          setOpen(false);
                        }}
                        style={{
                          color: isMobile
                            ? 'black'
                            : navbar
                            ? 'white'
                            : 'rgba(255, 255, 255, 0.9)',
                        }}
                        target="_blank"
                        rel="noopener noreferrer"
                        smooth
                      >
                        <FaLinkedin className={`${styles.icons_lower}`} />
                      </a>
                    </NavItem>
                    <NavItem className={styles['mini-nav-items']}>
                      <a
                        href="https://twitter.com/Spardha_IITBHU"
                        className={styles['nav-icons']}
                        onClick={() => {
                          setOpen(false);
                        }}
                        style={{
                          color: isMobile
                            ? 'black'
                            : navbar
                            ? 'white'
                            : 'rgba(255, 255, 255, 0.9)',
                        }}
                        target="_blank"
                        rel="noopener noreferrer"
                        smooth
                      >
                        <FaTwitter className={`${styles.icons_lower}`} />
                      </a>
                    </NavItem>
                  </Nav>
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
