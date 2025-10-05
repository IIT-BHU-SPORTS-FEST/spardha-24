import React, { useState } from 'react';
import './Admin.css'
import './AdminSideBar.css'
import Navbar from '../Navbar/Navbar';
import { NavItem, NavLink, Nav } from 'reactstrap';
import { Link } from 'react-router-dom';
import './AdminSideBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaEdit } from 'react-icons/fa';
import { HiUsers } from "react-icons/hi";
import { MdPostAdd } from "react-icons/md";
import { CgFileDocument } from "react-icons/cg";
import { IoMdBasketball } from "react-icons/io";
import AllUsers from '../Pages/AllUsers';
import SportsRegistrations from '../Pages/SportsRegistrations';
import DocumentVerification from '../Pages/DocumentVerification';
import AllGames from '../Pages/AllGames';
import Fixtures from '../Pages/Fixtures';
import Dnufixtures from '../Pages/dnufixtures';
import AllFixtures from '../Pages/showfixtures';
// import Updatefixtures from '../Pages/updateFixtures';

const Admin = () => {
  const [sidebarIsOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);
  const [page, setPage] = useState('alluser');

  return (<>
    <div className='sidebar' style={{ marginLeft: sidebarIsOpen ? '0px' : '-250px' }}>

      <div

        id="navigation"
      >
        <div className="sidebar-header">
          <span color="info" style={{ color: '#fff' }}>
            &times;
          </span>
          <div className="logo_db">
            <Link to="/">
              <img
                src="/images/white_logo_25.png"
                alt="spardha-logo"
                className="hidden-sm spardha-logo"
              />
              {/* <img src="/images/logo/spardha-small-white.png" alt="spardha-logo" className="visible-xs visible-sm circle-logo"/> */}
            </Link>
          </div>
        </div>
        <div className="side-menu">
          <Nav vertical className="list-unstyled pb-3 navi">
            <NavItem className="item_nav">
              <NavLink
                tag={Link}

                onClick={() => {
                  setPage('allUser');
                }}
              >
                <HiUsers />

                All Users
              </NavLink>
            </NavItem>
            <NavItem className="item_nav">
              <NavLink
                tag={Link}
                //   to={'/sportsRegistrations'}
                onClick={() => {
                  setPage('sportRegistration');
                }}
              >
                <FaEdit />
                Sports Registration
              </NavLink>
            </NavItem>
            <NavItem className="item_nav">
              <NavLink
                tag={Link}
                //   to={'/documentVerification'}
                onClick={() => {
                  setPage('docVerification');
                }}
              >
                <CgFileDocument />
                Doc Verification
              </NavLink>
            </NavItem>
            <NavItem className="item_nav">
              <NavLink
                tag={Link}
                //   to={'/allGames'}
                onClick={() => {
                  setPage('allGames');
                }}
              >
                {/* <FontAwesomeIcon icon={faImage} className="mr-2 icon_bar" /> */}
                <IoMdBasketball />
                All Games
              </NavLink>
            </NavItem>
            {/* <NavItem className="item_nav">
              <NavLink
                tag={Link}
                //   to={'/allGames'}
                onClick={() => {
                  setPage('fixtures');
                }}
              >
                {/* <FontAwesomeIcon icon={faImage} className="mr-2 icon_bar" /> *
                <MdPostAdd />
                Add Fixtures
              </NavLink>
            </NavItem>
            <NavItem className="item_nav">
              <NavLink
                tag={Link}
                //   to={'/allGames'}
                onClick={() => {
                  setPage('dnufixtures');
                }}
              >
                <MdPostAdd />
                Delete and Update Fixtures
              </NavLink>
            </NavItem> */}
            <NavItem className="item_nav">
              <NavLink
                tag={Link}
                //   to={'/allGames'}
                onClick={() => {
                  setPage('Showfixtures');
                }}
              >
                <MdPostAdd />
                Fixtures
              </NavLink>
            </NavItem>
           
          </Nav>
        </div>
      </div>
    </div>
    <div className="course1">
      <div className='topbar'>
        <button className='oc' onClick={toggleSidebar}>
          {sidebarIsOpen ? <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.7722 11H6.11979L7.37496 9.71C7.55677 9.5217 7.65891 9.2663 7.65891 9C7.65891 8.7337 7.55677 8.47831 7.37496 8.29C7.19315 8.1017 6.94656 7.99591 6.68944 7.99591C6.43233 7.99591 6.18574 8.1017 6.00393 8.29L3.10738 11.29C3.01688 11.383 2.94505 11.4936 2.89603 11.6154C2.84701 11.7373 2.82178 11.868 2.82178 12C2.82178 12.132 2.84701 12.2627 2.89603 12.3846C2.94505 12.5064 3.01688 12.617 3.10738 12.71L6.00393 15.71C6.09368 15.8037 6.20047 15.8781 6.31813 15.9289C6.43579 15.9797 6.56199 16.0058 6.68944 16.0058C6.8169 16.0058 6.9431 15.9797 7.06076 15.9289C7.17842 15.8781 7.2852 15.8037 7.37496 15.71C7.46546 15.617 7.53729 15.5064 7.58631 15.3846C7.63532 15.2627 7.66056 15.132 7.66056 15C7.66056 14.868 7.63532 14.7373 7.58631 14.6154C7.53729 14.4936 7.46546 14.383 7.37496 14.29L6.11979 13H19.7722C20.0117 12.9879 20.2383 12.8839 20.4078 12.7083C20.5773 12.5327 20.6777 12.298 20.6894 12.05V12C20.6898 11.7432 20.5947 11.4962 20.4239 11.31C20.2532 11.1238 20.0198 11.0128 19.7722 11Z" fill="white" />
            <path d="M19.7721 18H4.2273C3.72072 18 3.31006 18.4253 3.31006 18.95V19.05C3.31006 19.5747 3.72072 20 4.2273 20H19.7721C20.2787 20 20.6894 19.5747 20.6894 19.05V18.95C20.6894 18.4253 20.2787 18 19.7721 18Z" fill="white" />
            <path d="M19.7721 4H4.2273C3.72072 4 3.31006 4.42533 3.31006 4.95V5.05C3.31006 5.57467 3.72072 6 4.2273 6H19.7721C20.2787 6 20.6894 5.57467 20.6894 5.05V4.95C20.6894 4.42533 20.2787 4 19.7721 4Z" fill="white" />
          </svg>
            : '->'}
        </button>
        <div className="right">
          <div><Navbar /></div>
          <div className='admininfo'>
            <div className="spardha_admin_text"><div className='text1'>Spardha</div><div className='text2'>Admin</div> </div>
            <div className="logo"></div>
          </div>
        </div>
      </div>
      <section className="course">

        {(() => {
          switch (page) {
            case 'allUser':
              return <AllUsers />;
            case 'sportRegistration':
              return <SportsRegistrations />
            case 'allGames':
              return <AllGames />
            case 'docVerification':
              return <DocumentVerification />
            case "fixtures":
              return <Fixtures/>
            case "dnufixtures":
              return <Dnufixtures/>
            case "Showfixtures":
              return <AllFixtures/>
            default:
              return <AllUsers />;
          }
        })()}




      </section >
    </div></>
  )
}

export default Admin
