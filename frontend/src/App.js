import React, { useEffect, Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';
import InitializeReactGA from './helper/googleAnalytics.ts';

// Static / Fallback Components
import Preloader from './components/LandingPages/Preloader/Preloader';
import Spinner from './components/DashBoard/Spinner/Spinner';
import Footer from './components/LandingPages/Footer/footernew.js';
import NotFound from './components/LandingPages/NotFound/NotFound';
import ComingSoon from './components/LandingPages/ComingSoon/ComingSoon.js';
import ShowTable from './components/LandingPages/UserData/ShowTable';
import ShowallTable from './components/LandingPages/UserData/ShowallTable';

// Lazy Loaded Components
const LandingPages = lazy(() => import('./components/LandingPages/LandingPages'));
const DashBoard = lazy(() => import('./components/DashBoard/MainMenu/DashBoard'));
const About = lazy(() => import('./components/LandingPages/About/About'));
const Team = lazy(() => import('./components/LandingPages/Team/newteam')); // Restored Team Import
const Admin = lazy(() => import('./components/DashBoard/Admin/Admin'));
const Sponsors = lazy(() => import('./components/LandingPages/Sponsors/Sponsors'));
const Gallery = lazy(() => import('./components/LandingPages/Gallery/Gallery'));
const Guests = lazy(() => import('./components/LandingPages/Guests/Guests'));
const Register = lazy(() => import('./components/LandingPages/Register/Register'));
const Signup = lazy(() => import('./components/LandingPages/Register/Signup/Signup'));
const Login = lazy(() => import('./components/LandingPages/Register/Login/Login'));
const PrivacyPolicy = lazy(() => import('./components/LandingPages/PrivacyPolicy/PrivacyPolicy'));
const Forgot = lazy(() => import('./components/LandingPages/Register/Forgot/Forgot'));
const Reset = lazy(() => import('./components/LandingPages/Register/Reset/Reset'));
const Verify = lazy(() => import('./components/LandingPages/Register/Verify/Verify'));
const Home = lazy(() => import('./components/DashBoard/Home/Home'));
const Registration = lazy(() => import('./components/DashBoard/Registration/Registration'));
const Document = lazy(() => import('./components/DashBoard/Document/Document'));
const Profile = lazy(() => import('./components/DashBoard/Profile/Profile'));
const ContingentEdit = lazy(() => import('./components/DashBoard/Registration/ContingentEdit/ContingentEdit'));
const EventsEdit = lazy(() => import('./components/DashBoard/Registration/Events/EventsEdit/EventsEdit'));
const HomePage = lazy(() => import('./components/LandingPages/Home/HomePage/Home'));

function usePageViews() {
  const location = useLocation();

  useEffect(() => {
    InitializeReactGA(ReactGA);
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname);
  }, [location]);
}

function App() {
  usePageViews();

  return (
    <div className="routes" style={{ overflowX: 'hidden' }}>
      <Suspense fallback={<Preloader />}>
        <Routes>
          <Route path="*" element={<NotFound />} />

          {/* Landing Pages Layout */}
          <Route path="/" element={<LandingPages />}>
            <Route
              index
              element={
                <Suspense fallback={<Spinner />}>
                  <HomePage />
                  <Footer />
                </Suspense>
              }
            />
            <Route path="about" element={<About />} />
            
            {/* Restored Team Route */}
            <Route path="team" element={<Team />} />

            {/* Registration Sub-Routes */}
            <Route path="register" element={<Register />}>
              <Route path="signup" element={<Signup />} />
              <Route path="login" element={<Login />} />
              <Route path="forgot" element={<Forgot />} />
              <Route path="reset" element={<Reset />} />
              <Route path="verify" element={<Verify />} />
            </Route>

            <Route
              path="espardha"
              element={
                <>
                  <ComingSoon />
                  <Footer />
                </>
              }
            />
            <Route path="PrivacyPolicy" element={<PrivacyPolicy />} />
            <Route path="guests" element={<Guests />} />
            <Route
              path="sponsors"
              element={
                <>
                  <Sponsors />
                  <Footer />
                </>
              }
            />
            <Route path="gallery" element={<Gallery />} />
          </Route>

          {/* Admin Routes */}
          <Route
            path="admin"
            element={
              <>
                <Admin />
                <Footer />
              </>
            }
          />
          <Route
            path="admin/showtable"
            element={
              <Suspense fallback={<Spinner />}>
                <ShowTable />
              </Suspense>
            }
          />
          <Route
            path="admin/allusers"
            element={
              <Suspense fallback={<Spinner />}>
                <ShowallTable />
              </Suspense>
            }
          />

          {/* Dashboard Routes */}
          <Route path="/dashboard" element={<DashBoard />}>
            <Route
              path="home"
              element={
                <Suspense fallback={<Spinner />}>
                  <Home />
                </Suspense>
              }
            />
            <Route
              path="Document"
              element={
                <Suspense fallback={<Spinner />}>
                  <Document />
                </Suspense>
              }
            />
            <Route
              path="registration"
              element={
                <Suspense fallback={<Spinner />}>
                  <Registration />
                </Suspense>
              }
            />
            <Route
              path="contingentEdit"
              element={
                <Suspense fallback={<Spinner />}>
                  <ContingentEdit />
                </Suspense>
              }
            />
            <Route
              path="events"
              element={
                <Suspense fallback={<Spinner />}>
                  <EventsEdit />
                </Suspense>
              }
            />
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