import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import LOGOSTYLE1 from '../assets/LOGOSTYLE1.png';
import { FaHome, FaThLarge, FaInfoCircle, FaUser, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  // const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);
  console.log(menuOpen,"menuopen");
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/" onClick={closeMenu}>
          <img src={LOGOSTYLE1} alt="Logo" className="logo-img" />
        </Link>
      </div>

      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>


      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li className={location.pathname === '/' ? 'active' : ''}>
          <Link to="/" onClick={closeMenu}>
            <FaHome className="nav-icon" />
          </Link>
        </li>
        <li className={location.pathname === '/collection' ? 'active' : ''}>
          <Link to="/collection" onClick={closeMenu}>
            <FaThLarge className="nav-icon" />
          </Link>
        </li>
        <li className={location.pathname === '/about' ? 'active' : ''}>
          <Link to="/about" onClick={closeMenu}>
            <FaInfoCircle className="nav-icon" />
          </Link>
        </li>
        <li className={location.pathname === '/myprofile' ? 'active' : ''}>
          <Link to="/myprofile" onClick={closeMenu}>
            <FaUser className="nav-icon" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
