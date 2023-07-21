import { Link, Outlet, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Cross as Hamburger } from 'hamburger-react';
import '../styles/Navbar.css';
import { fetchAuth } from '../redux/auths/authsSlice';
import { setAuth, setAdmin } from '../redux/auths/userauthSlice';

const Navbar = () => {
  const { isAuth, isAdmin } = useSelector((state) => state.userAuth);
  const { message, isLoading, error } = useSelector((state) => state.auths);
  const dispatch = useDispatch();
  const location = useLocation();
  const [showSidebar, setShowSidebar] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(
    window.innerWidth <= 767.98
  );

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1100);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (isSmallScreen) {
      setShowSidebar(false);
    }
  }, [location, isSmallScreen]);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  useEffect(() => {
    dispatch(setAuth());
    dispatch(setAdmin());
  }, [dispatch, isLoading]);

  const handleLogout = () => {
    const data = {
      sign_in: false,
      end_point: 'users/sign_out',
      method_data: {
        method: 'DELETE',
        headers: {
          Authorization: localStorage.getItem('authToken'),
          'Content-Type': 'application/json',
        },
      },
    };
    dispatch(fetchAuth(data));
  };

  return (
    <div className="container-fluid p-0" style={{ position: 'fixed' }}>
      <div className="row">
        <nav
          className={`col-lg-2 col-md-3 col-sm-4 col-12 bg-light sidebar ${
            showSidebar ? 'show' : ''
          }`}
        >
          <div className="sidebar-sticky">
            <h1 className="main-title">RideEase</h1>
            <ul className="nav flex-column">
              <li
                className={`nav-item ${
                  location.pathname === '/' ? 'active' : ''
                }`}
              >
                <Link
                  to="/"
                  className="nav-link"
                  onClick={() => setShowSidebar(false)}
                >
                  Cars
                </Link>
              </li>
              {isAuth && (
                <li
                  className={`nav-item ${
                    location.pathname === '/reserve' ? 'active' : ''
                  }`}
                >
                  <Link
                    to="/reserve"
                    className="nav-link"
                    onClick={() => setShowSidebar(false)}
                  >
                    Reserve
                  </Link>
                </li>
              )}
              {isAuth && (
                <li
                  className={`nav-item ${
                    location.pathname === '/myreservations' ? 'active' : ''
                  }`}
                >
                  <Link
                    to="/myreservations"
                    className="nav-link"
                    onClick={() => setShowSidebar(false)}
                  >
                    My Reservations
                  </Link>
                </li>
              )}
              {isAuth && isAdmin && (
                <li
                  className={`nav-item ${
                    location.pathname === '/addcars' ? 'active' : ''
                  }`}
                >
                  <Link
                    to="/addcars"
                    className="nav-link"
                    onClick={() => setShowSidebar(false)}
                  >
                    Add Cars
                  </Link>
                </li>
              )}
              {isAuth && isAdmin && (
                <li
                  className={`nav-item ${
                    location.pathname === '/deletecars' ? 'active' : ''
                  }`}
                >
                  <Link
                    to="/deletecars"
                    className="nav-link"
                    onClick={() => setShowSidebar(false)}
                  >
                    Delete Cars
                  </Link>
                </li>
              )}
            </ul>
            <div className="d-flex gap-3 mt-3">
              {!isAuth && (
                <>
                  <Link to="sign_up" className="btn btn-primary">
                    SignUp
                  </Link>
                  <Link to="sign_in" className="btn btn-primary">
                    SignIn
                  </Link>
                </>
              )}
              {isAuth && (
                <>
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="btn btn-primary"
                  >
                    SignOut
                  </button>
                </>
              )}
            </div>
            {isLoading && <small>Please wait....</small>}
            <small className="text-success">{message}</small>
            <small className="text-danger">{error}</small>
          </div>
        </nav>
        <main className="col-lg-10 col-12">
          <Outlet />
        </main>
        {isSmallScreen && (
          <div className="hamburger-container">
            <Hamburger toggled={showSidebar} toggle={toggleSidebar} size={20} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
