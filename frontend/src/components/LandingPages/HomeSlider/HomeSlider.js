import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './HomeSlider.css';
import { HashLink } from 'react-router-hash-link';

function HomeSlider() {
  return (
    <>
      <OwlCarousel
        id="home-slider"
        className="owl-theme home-slider active"
        loop
        items={1}
        animateIn="fadeIn"
        animateOut="fadeOut"
        autoplay
      >
        <div id="home-slider-item-1" className="home-slider-item js-fullheight">
          <div className="home-overlay"></div>
          <div
            className="container"
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              className="row home-slider-text js-fullheight justify-content-center align-items-center home-spardha-mainlogo"
              data-scrollax-parent="true"
            >
              <div
                className="col-md-12 col-sm-12 col-12 ftco-animate text-center mt-5"
                style={{ width: '78vw' }}
              >
                <div id="row" className="">
                  {/* <a href="https://myrankers.com">
                    <img id="column1" src="/images/logo/powered.svg" alt="Rankers" />
                  </a> */}
                  <img
                    id="columnLogo"
                    src="/images/logo/spardha26.jpeg"
                    alt="spardha"
                  />
                  {/* <a href="https://iitiantrader.in/">
                    <img id="column2" src="/images/logo/co-powered.svg" alt="Iitian Traders" />
                  </a> */}
                </div>
                <h1 className="mb-1 text-overflow-center spardha-21">
                  Spardha&nbsp;2023
                </h1>
                <h2 className="text-overflow-center home-spardha-subheading">
                  IIT (BHU), Varanasi
                </h2>
                <h2
                  className="text-overflow-center home-spardha-subheading"
                  style={{ color: '#fdcc07' }}
                >
                  13th - 15th october
                </h2>
                <div className="container mt-5 pt-3 home-large-screen">
                  <div className="row">
                    <div className="col-6 ca">
                      <HashLink to="/ca#ca" className="home-button1">
                        CAMPUS AMBASSADOR
                      </HashLink>
                    </div>
                    <div className="col-6 reg">
                      <HashLink
                        // to="/register/signup#register"
                        to="/register/login"
                        className="home-button"
                      >
                        REGISTER&nbsp;/&nbsp;LOGIN
                      </HashLink>
                    </div>
                  </div>
                </div>
                <div className="container mt-5 pt-3 home-large-screen">
                  &nbsp;
                </div>
                <div className="home-small-screen container">
                  <div className="reg">
                    <HashLink
                      // to="/register/signup#register"
                      to="/register/login"
                      className="home-button"
                    >
                      REGISTER&nbsp;/&nbsp;LOGIN
                    </HashLink>
                  </div>
                  <div className="ca">
                    <HashLink to="/ca#ca" className="home-button1">
                      CAMPUS AMBASSADOR
                    </HashLink>
                  </div>
                  <div className="container mt-5">&nbsp;</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="home-slider-item-2" className="home-slider-item js-fullheight">
          <div className="home-overlay"></div>
          <div
            className="container"
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              className="row home-slider-text js-fullheight justify-content-center align-items-center home-spardha-mainlogo"
              data-scrollax-parent="true"
            >
              <div
                className="col-md-12 col-sm-12 col-12 ftco-animate text-center mt-5"
                style={{ width: '78vw' }}
              >
                <div id="row" className="">
                  {/* <a href="https://myrankers.com">
                    <img id="column1" src="/images/logo/powered.svg" alt="Rankers" />
                  </a> */}
                  <img
                    id="columnLogo"
                    src="/images/logo/spardha-white-home.png"
                    alt="spardha"
                  />
                  {/* <a href="https://iitiantrader.in/">
                    <img id="column2" src="/images/logo/co-powered.svg" alt="Iitian Traders" />
                  </a> */}
                </div>
                <h1 className="mb-1 text-overflow-center spardha-21">
                  Spardha&nbsp;2023
                </h1>
                <h2 className="text-overflow-center home-spardha-subheading">
                  IIT (BHU), Varanasi
                </h2>
                <div id="rowM" className="">
                  {/* <a href="https://myrankers.com">
                    <img id="column1M" src="/images/logo/powered.svg" alt="Rankers" />
                  </a> */}
                  {/* <a href="https://iitiantrader.in/">
                    <img id="column2M" src="/images/logo/co-powered.svg" alt="Iitian Traders" />
                  </a> */}
                </div>
                <h2
                  className="text-overflow-center home-spardha-subheading"
                  style={{ color: '#fdcc07' }}
                >
                  13th - 15th october
                </h2>
                <div className="container mt-5 pt-3 home-large-screen">
                  <div className="row">
                    <div className="col-6 ca">
                      <HashLink to="/ca#ca" className="home-button1">
                        CAMPUS AMBASSADOR
                      </HashLink>
                    </div>
                    <div className="col-6 reg">
                      <HashLink
                        //to="/register/signup#register"
                        to="/register/login"
                        className="home-button"
                      >
                        REGISTER&nbsp;/&nbsp;LOGIN
                      </HashLink>
                    </div>
                  </div>
                </div>
                <div className="container mt-5 pt-3 home-large-screen">
                  &nbsp;
                </div>
                <div className="home-small-screen container">
                  <div className="reg">
                    <HashLink
                      // to="/register/signup#register"
                      to="/register/login"
                      className="home-button"
                    >
                      REGISTER&nbsp;/&nbsp;LOGIN
                    </HashLink>
                  </div>
                  <div className="ca">
                    <HashLink to="/ca#ca" className="home-button1">
                      CAMPUS AMBASSADOR
                    </HashLink>
                  </div>
                  <div className="container mt-5">&nbsp;</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="home-slider-item-3" className="home-slider-item js-fullheight">
          <div className="home-overlay"></div>
          <div
            className="container"
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              className="row home-slider-text js-fullheight justify-content-center align-items-center home-spardha-mainlogo"
              data-scrollax-parent="true"
            >
              <div
                className="col-md-12 col-sm-12 col-12 ftco-animate text-center mt-5"
                style={{ width: '78vw' }}
              >
                <div id="row" className="">
                  {/* <a href="https://myrankers.com">
                    <img id="column1" src="/images/logo/powered.svg" alt="Rankers" />
                  </a> */}
                  <img
                    id="columnLogo"
                    src="/images/logo/spardha-white-home.png"
                    alt="spardha"
                  />
                  {/* <a href="https://iitiantrader.in/">
                    <img id="column2" src="/images/logo/co-powered.svg" alt="Iitian Traders" />
                  </a> */}
                </div>
                <h1 className="mb-1 text-overflow-center spardha-21">
                  Spardha&nbsp;2023
                </h1>
                <h2 className="text-overflow-center home-spardha-subheading">
                  IIT (BHU), Varanasi
                </h2>
                <div id="rowM" className="">
                  {/* <a href="https://myrankers.com">
                    <img id="column1M" src="/images/logo/powered.svg" alt="Rankers" />
                  </a>
                  <a href="https://iitiantrader.in/">
                    <img id="column2M" src="/images/logo/co-powered.svg" alt="Iitian Traders" />
                  </a> */}
                </div>
                <h2
                  className="text-overflow-center home-spardha-subheading"
                  style={{ color: '#fdcc07' }}
                >
                  13th - 15th october
                </h2>
                <div className="container mt-5 pt-3 home-large-screen">
                  <div className="row">
                    <div className="col-6 ca">
                      <HashLink to="/ca#ca" className="home-button1">
                        CAMPUS AMBASSADOR
                      </HashLink>
                    </div>
                    <div className="col-6 reg">
                      <HashLink
                        //to="/register/signup#register"
                        to="/register/login"
                        className="home-button"
                      >
                        REGISTER&nbsp;/&nbsp;LOGIN
                      </HashLink>
                    </div>
                  </div>
                </div>
                <div className="container mt-5 pt-3 home-large-screen">
                  &nbsp;
                </div>
                <div className="home-small-screen container">
                  <div className="reg">
                    <HashLink
                      //to="/register/signup#register"
                      to="/register/login"
                      className="home-button"
                    >
                      REGISTER&nbsp;/&nbsp;LOGIN
                    </HashLink>
                  </div>
                  <div className="ca">
                    <HashLink to="/ca#ca" className="home-button1">
                      CAMPUS AMBASSADOR
                    </HashLink>
                  </div>
                  <div className="container mt-5">&nbsp;</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="home-slider-item-4" className="home-slider-item js-fullheight">
          <div className="home-overlay"></div>
          <div
            className="container"
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              className="row home-slider-text js-fullheight justify-content-center align-items-center home-spardha-mainlogo"
              data-scrollax-parent="true"
            >
              <div
                className="col-md-12 col-sm-12 col-12 ftco-animate text-center mt-5"
                style={{ width: '78vw' }}
              >
                <div id="row" className="">
                  {/* <a href="https://myrankers.com">
                    <img id="column1" src="/images/logo/powered.svg" alt="Rankers" />
                  </a> */}
                  <img
                    id="columnLogo"
                    src="/images/logo/spardha-white-home.png"
                    alt="spardha"
                  />
                  {/* <a href="https://iitiantrader.in/">
                    <img id="column2" src="/images/logo/co-powered.svg" alt="Iitian Traders" />
                  </a> */}
                </div>
                <h1 className="mb-1 text-overflow-center spardha-21">
                  Spardha&nbsp;2023
                </h1>
                <h2 className="text-overflow-center home-spardha-subheading">
                  IIT (BHU), Varanasi
                </h2>
                <div id="rowM" className="">
                  {/* <a href="https://myrankers.com">
                    <img id="column1M" src="/images/logo/powered.svg" alt="Rankers" />
                  </a>
                  <a href="https://iitiantrader.in/">
                    <img id="column2M" src="/images/logo/co-powered.svg" alt="Iitian Traders" />
                  </a> */}
                </div>
                <h2
                  className="text-overflow-center home-spardha-subheading"
                  style={{ color: '#fdcc07' }}
                >
                  13th - 15th october
                </h2>
                <div className="container mt-5 pt-3 home-large-screen">
                  <div className="row">
                    <div className="col-6 ca">
                      <HashLink to="/ca#ca" className="home-button1">
                        CAMPUS AMBASSADOR
                      </HashLink>
                    </div>
                    <div className="col-6 reg">
                      <HashLink
                        //to="/register/signup#register"
                        to="/register/login"
                        className="home-button"
                      >
                        REGISTER&nbsp;/&nbsp;LOGIN
                      </HashLink>
                    </div>
                  </div>
                </div>
                <div className="container mt-5 pt-3 home-large-screen">
                  &nbsp;
                </div>
                <div className="home-small-screen container">
                  <div className="reg">
                    <HashLink
                      //to="/register/signup#register"
                      to="/register/login"
                      className="home-button"
                    >
                      REGISTER&nbsp;/&nbsp;LOGIN
                    </HashLink>
                  </div>
                  <div className="ca">
                    <HashLink to="/ca#ca" className="home-button1">
                      CAMPUS AMBASSADOR
                    </HashLink>
                  </div>
                  <div className="container mt-5">&nbsp;</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </OwlCarousel>
    </>
  );
}

export default HomeSlider;
