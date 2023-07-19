import { Link, Outlet, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import { Cross as Hamburger } from 'hamburger-react';
import '../styles/Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const [showSidebar, setShowSidebar] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 767.98);

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

  return (
    <div className="container-fluid" style={{ position: 'fixed' }}>
      <div className="row">
        <nav className={`col-lg-2 col-md-3 col-sm-4 col-12 bg-light sidebar ${showSidebar ? 'show' : ''}`}>
          <div className="sidebar-sticky">
            <h1 className="main-title">RideEase</h1>
            <ul className="nav flex-column">
              <li className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
                <Link to="/" className="nav-link" onClick={() => setShowSidebar(false)}>
                  Cars
                </Link>
              </li>
              <li className={`nav-item ${location.pathname === '/reserve' ? 'active' : ''}`}>
                <Link to="/reserve" className="nav-link" onClick={() => setShowSidebar(false)}>
                  Reserve
                </Link>
              </li>
              <li className={`nav-item ${location.pathname === '/myreservations' ? 'active' : ''}`}>
                <Link to="/myreservations" className="nav-link" onClick={() => setShowSidebar(false)}>
                  My Reservations
                </Link>
              </li>
              <li className={`nav-item ${location.pathname === '/addcars' ? 'active' : ''}`}>
                <Link to="/addcars" className="nav-link" onClick={() => setShowSidebar(false)}>
                  Add Cars
                </Link>
              </li>
              <li className={`nav-item ${location.pathname === '/deletecars' ? 'active' : ''}`}>
                <Link to="/deletecars" className="nav-link" onClick={() => setShowSidebar(false)}>
                  Delete Cars
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <main className="col-lg-10 col-md-9 col-sm-8 col-12">
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
