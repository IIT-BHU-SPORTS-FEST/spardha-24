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
  const isMobile = useMediaQuery({ maxWidth: 993});
  const [active,setActive]=useState(false);

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
        }}
      >
        <div className="nav-contain" style={{ display: 'flex' }}>
          <NavbarBrand>
            <NavHashLink exact="true" to="/" smooth>
              <img
                src={`/images/logo/spardha-logo-${
                  navbar ? (isMobile ? 'white' : 'black') : 'white'
                }.png`}
                alt="Sparhda Logo"
                height="70px"
                style={{ marginLeft: '2px' }}
                // width="80px"
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
                    exact="true"
                    to="/"
                    className={styles['nav-links']}
                    onClick={() => {
                      setOpen(false);
                    }}
                    // style={({ isActive }) => {
                    //   return {
                    //     color: isActive
                    //       ? '#6db549'
                    //       : navbar
                    //       ? '#000'
                    //       : 'rgba(255, 255, 255, 0.9)',
                    //   };
                    // }}
                    style={({ isActive }) => {
                      return {
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
                    // style={({ isActive }) => {
                    //   return {
                    //     color
                    //     // : isActive
                    //     //   ? '#6db549'
                    //       : navbar
                    //       ? '#000'
                    //       : 'rgba(255, 255, 255, 0.9)',
                    //   };
                    // }}
                    style={({ isActive }) => {
                      if (isActive) {
                        setActive(true);
                      }
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
                    onClick={() => {
                      setOpen(false);
                    }}
                    style={({ isActive }) => {
                      if (isActive) {
                        setActive(true);
                      }
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
                </NavItem>
                <NavItem className={styles['nav-items']}>
                  <NavHashLink
                    exact="true"
                    to="/espardha#espardha"
                    className={styles['nav-links']}
                    onClick={() => {
                      setOpen(false);
                    }}
                    // style={({ isActive }) => {
                    //   return {
                    //     color
                    //     // : isActive
                    //     //   ? '#6db549'
                    //       : navbar
                    //       ? '#000'
                    //       : 'rgba(255, 255, 255, 0.9)',
                    //   };
                    // }}
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
                    ESPARDHA
                  </NavHashLink>
                </NavItem>
                {/* <NavItem className={styles['nav-items']}>
                  <a
                    href="/pdf/RuleBook.pdf"
                    target="_blank"
                    className={styles['nav-links']}
                    onClick={() => {
                      setOpen(false);
                    }}
                    style={{
                      color: isMobile
                        ? '#000'
                        : navbar
                        ? '#000'
                        : 'rgba(255, 255, 255, 0.9)',
                    }}
                  >
                    RuleBook
                  </a>
                </NavItem> */}
                {/* <NavItem className={styles['nav-items']}>
                  <NavHashLink
                    exact="true"
                    to="/guests#guests"
                    className={styles['nav-links']}
                    onClick={() => {
                      setOpen(false);
                    }}
                    // style={({ isActive }) => {
                    //   return {
                    //     color
                    //     // : isActive
                    //     //   ? '#6db549'
                    //       : navbar
                    //       ? '#000'
                    //       : 'rgba(255, 255, 255, 0.9)',
                    //   };
                    // }}
                    style={({ isActive }) => {
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
                    Guests
                  </NavHashLink>
                </NavItem> */}
                <NavItem className={styles['nav-items']}>
                  <NavHashLink
                    exact="true"
                    to="/sponsors#sponsors"
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
                            ? '#000'
                            : navbar
                            ? '#000'
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
                            ? '#000'
                            : navbar
                            ? '#000'
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
                            ? '#000'
                            : navbar
                            ? '#000'
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
