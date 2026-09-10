import React, { useEffect, Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Preloader from './components/LandingPages/Preloader/NewLoader';
import Spinner from './components/DashBoard/Spinner/Spinner';
import Footer from './components/LandingPages/Footer/footernew.js';

import ReactGA from 'react-ga';
import InitializeReactGA from './helper/googleAnalytics.ts';

import NotFound from './components/LandingPages/NotFound/NotFoundnew';

import ShowTable from './components/LandingPages/UserData/ShowTable';
import ShowallTable from './components/LandingPages/UserData/ShowallTable';

// ==================== LAZY IMPORTS ====================

const LandingPages = lazy(() =>
  import('./components/LandingPages/LandingPages')
);

const DashBoard = lazy(() =>
  import('./components/DashBoard/MainMenu/DashBoard')
);

const About = lazy(() =>
  import('./components/LandingPages/About/AboutNew')
);

const Events = lazy(() =>
  import('./components/LandingPages/Events/Events26')
);

const Admin = lazy(() =>
  import('./components/DashBoard/Admin/Admin')
);

const Team = lazy(() =>
  import('./components/LandingPages/Team/newteam')
);

const Sponsors = lazy(() =>
  import('./components/LandingPages/Sponsors/NewSponsors')
);

const Gallery = lazy(() =>
  import('./components/LandingPages/Gallery/Gallery')
);

const Guests = lazy(() =>
  import('./components/LandingPages/Guests/Guests')
);

const Register = lazy(() =>
  import('./components/LandingPages/Register/Register')
);

const Signup = lazy(() =>
  import('./components/LandingPages/Register/Signup/Signup')
);

const Login = lazy(() =>
  import('./components/LandingPages/Register/Login/Login')
);

const PrivacyPolicy = lazy(() =>
  import('./components/LandingPages/PrivacyPolicy/PrivacyPolicy')
);

const Forgot = lazy(() =>
  import('./components/LandingPages/Register/Forgot/Forgot')
);

const Reset = lazy(() =>
  import('./components/LandingPages/Register/Reset/Reset')
);

const Verify = lazy(() =>
  import('./components/LandingPages/Register/Verify/Verify')
);

const Home = lazy(() =>
  import('./components/DashBoard/Home/Home')
);

const Registration = lazy(() =>
  import('./components/DashBoard/Registration/Registration')
);

const Document = lazy(() =>
  import('./components/DashBoard/Document/Document')
);

const Profile = lazy(() =>
  import('./components/DashBoard/Profile/Profile')
);

const ContingentEdit = lazy(() =>
  import(
    './components/DashBoard/Registration/ContingentEdit/ContingentEdit'
  )
);

const EventsEdit = lazy(() =>
  import(
    './components/DashBoard/Registration/Events/EventsEdit/EventsEdit'
  )
);

const HomePage = lazy(() =>
  import('./components/LandingPages/Home/HomePage/Home')
);

const Matches = lazy(() =>
  import('./components/LandingPages/matches/matches')
);

const Espardhanew = lazy(() =>
  import('./components/LandingPages/Espardha/Espardhanew')
);

// ==================== GOOGLE ANALYTICS ====================

function usePageViews() {
  const location = useLocation();

  useEffect(() => {
    InitializeReactGA(ReactGA);

    ReactGA.set({
      page: location.pathname,
    });

    ReactGA.pageview(location.pathname);
  }, [location]);
}

// ==================== APP ====================

function App() {
  usePageViews();

  return (
    <div
      className="routes"
      style={{ overflowX: 'hidden' }}
    >
      <Suspense fallback={<Preloader />}>
        <Routes>

          {/* =================================================
              404
          ================================================= */}
          <Route path="*" element={<NotFound />} />


          {/* =================================================
              LANDING PAGES
              /
              /about
              /team
              /register/*
          ================================================= */}

          <Route path="/" element={<LandingPages />}>

            {/* HOME */}
            <Route
              index
              element={
                <Suspense fallback={<Spinner />}>
                  <>
                    <HomePage />
                    <Footer />
                  </>
                </Suspense>
              }
            />


            {/* ABOUT */}
            <Route
              path="about"
              element={
                <Suspense fallback={<Spinner />}>
                  <About />
                </Suspense>
              }
            />


            {/* TEAM */}
            <Route
              path="team"
              element={
                <Suspense fallback={<Spinner />}>
                  <Team />
                </Suspense>
              }
            />


            {/* REGISTER */}
            <Route
              path="register"
              element={
                <Suspense fallback={<Spinner />}>
                  <Register />
                </Suspense>
              }
            >

              {/* /register/signup */}
              <Route
                path="signup"
                element={
                  <Suspense fallback={<Spinner />}>
                    <Signup />
                  </Suspense>
                }
              />

              {/* /register/login */}
              <Route
                path="login"
                element={
                  <Suspense fallback={<Spinner />}>
                    <Login />
                  </Suspense>
                }
              />

              {/* /register/forgot */}
              <Route
                path="forgot"
                element={
                  <Suspense fallback={<Spinner />}>
                    <Forgot />
                  </Suspense>
                }
              />

              {/* /register/reset */}
              <Route
                path="reset"
                element={
                  <Suspense fallback={<Spinner />}>
                    <Reset />
                  </Suspense>
                }
              />

              {/* /register/verify */}
              <Route
                path="verify"
                element={
                  <Suspense fallback={<Spinner />}>
                    <Verify />
                  </Suspense>
                }
              />

            </Route>

          </Route>


          {/* =================================================
              OTHER LANDING PAGE ROUTES
          ================================================= */}

          {/* ESPARDHA */}
          <Route
            path="/espardha"
            element={
              <Suspense fallback={<Preloader />}>
                <>
                  <Espardhanew />
                  <Footer />
                </>
              </Suspense>
            }
          />


          {/* EVENTS */}
          <Route
            path="/events"
            element={
              <Suspense fallback={<Preloader />}>
                <>
                  <Events />
                  <Footer />
                </>
              </Suspense>
            }
          />


          {/* PRIVACY POLICY */}
          <Route
            path="/PrivacyPolicy"
            element={
              <Suspense fallback={<Preloader />}>
                <PrivacyPolicy />
              </Suspense>
            }
          />


          {/* MATCHES */}
          <Route
            path="/matches"
            element={
              <Suspense fallback={<Preloader />}>
                <>
                  <Matches />
                  <Footer />
                </>
              </Suspense>
            }
          />


          {/* GUESTS */}
          <Route
            path="/guests"
            element={
              <Suspense fallback={<Preloader />}>
                <Guests />
              </Suspense>
            }
          />


          {/* SPONSORS */}
          <Route
            path="/sponsors"
            element={
              <Suspense fallback={<Preloader />}>
                <>
                  <Sponsors />
                  <Footer />
                </>
              </Suspense>
            }
          />


          {/* GALLERY */}
          <Route
            path="/gallery"
            element={
              <Suspense fallback={<Preloader />}>
                <Gallery />
              </Suspense>
            }
          />


          {/* =================================================
              ADMIN
          ================================================= */}

          {/* /admin */}
          <Route
            path="/admin"
            element={
              <Suspense fallback={<Preloader />}>
                <>
                  <Admin />
                  <Footer />
                </>
              </Suspense>
            }
          />


          {/* /admin/showtable */}
          <Route
            path="/admin/showtable"
            element={
              <Suspense fallback={<Spinner />}>
                <ShowTable />
              </Suspense>
            }
          />


          {/* /admin/allusers */}
          <Route
            path="/admin/allusers"
            element={
              <Suspense fallback={<Spinner />}>
                <ShowallTable />
              </Suspense>
            }
          />


          {/* =================================================
              DASHBOARD
              /dashboard/*
          ================================================= */}

          <Route
            path="/dashboard"
            element={
              <Suspense fallback={<Preloader />}>
                <>
                  <DashBoard />
                  <Footer />
                </>
              </Suspense>
            }
          >

            {/* /dashboard/home */}
            <Route
              path="home"
              element={
                <Suspense fallback={<Spinner />}>
                  <Home />
                </Suspense>
              }
            />


            {/* /dashboard/Document */}
            <Route
              path="Document"
              element={
                <Suspense fallback={<Spinner />}>
                  <Document />
                </Suspense>
              }
            />


            {/* /dashboard/registration */}
            <Route
              path="registration"
              element={
                <Suspense fallback={<Spinner />}>
                  <Registration />
                </Suspense>
              }
            />


            {/* /dashboard/contingentEdit */}
            <Route
              path="contingentEdit"
              element={
                <Suspense fallback={<Spinner />}>
                  <ContingentEdit />
                </Suspense>
              }
            />


            {/* /dashboard/events */}
            <Route
              path="events"
              element={
                <Suspense fallback={<Spinner />}>
                  <EventsEdit />
                </Suspense>
              }
            />


            {/* /dashboard/Profile */}
            <Route
              path="Profile"
              element={
                <Suspense fallback={<Spinner />}>
                  <Profile />
                </Suspense>
              }
            />

          </Route>

        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
