import { Link, Outlet } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => (
  <nav className="nav">
    <h1 className="main-title">RideEase</h1>
    <ul>
      <li>
        <Link to="/">Cars</Link>
      </li>
      <li>
        <Link to="/reserve">Reserve</Link>
      </li>
      <li>
        <Link to="/myreservations">My Reservations</Link>
      </li>
      <li>
        <Link to="/addcars">Add Cars</Link>
      </li>
      <li>
        <Link to="/deletecars">Delete Cars</Link>
      </li>
    </ul>
    <Outlet />
  </nav>
);

export default Navbar;
