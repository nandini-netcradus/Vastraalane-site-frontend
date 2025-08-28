import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import LOGOSTYLE1 from '../assets/LOGOSTYLE1.png';
import { FaHome, FaThLarge, FaInfoCircle, FaUser } from 'react-icons/fa';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={LOGOSTYLE1} alt="Vastraalane Logo" className="logo-img" />
        </Link>
      </div>

      <ul className="nav-links">
        <li className={location.pathname === '/' ? 'active' : ''}>
          <Link to="/">
            <FaHome className="nav-icon" />
          </Link>
        </li>
        <li className={location.pathname === '/collection' ? 'active' : ''}>
          <Link to="/collection">
            <FaThLarge className="nav-icon" />
          </Link>
        </li>
        <li className={location.pathname === '/about' ? 'active' : ''}>
          <Link to="/about">
            <FaInfoCircle className="nav-icon" />
          </Link>
        </li>
        <li className={location.pathname === '/myprofile' ? 'active' : ''}>
          <Link to="/myprofile">
            <FaUser className="nav-icon" />
          </Link>
        </li>

        {/* ✅ Simple Login Button */}
        <li className={location.pathname === '/auth' ? 'active' : ''}>
          <Link to="/auth" className="login-btn">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
