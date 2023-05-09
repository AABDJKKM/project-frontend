import React, { useState } from 'react';
import './NavbarStyles.css';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../assets/logo.svg';
import userIcon from '../../assets/user-icon.svg';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <header className="header">
      <div>
        <Link to="/">
          <img src={logo} alt="The Digital Mosaic Logo" />
        </Link>
      </div>
      <nav>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/community">Community</Link>
          </li>
          <li>
            <Link to="/Explore">Explore</Link>
          </li>
          <li>
            <Link to="/opportunities">Opportunities</Link>
          </li>
          <li>
            <Link to="/quiz">Quiz</Link>
          </li>
        </ul>
        <div className="profile">
          <img src={userIcon} alt="" />
        </div>
      </nav>

      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: '#fff' }} />
        ) : (
          <FaBars size={20} style={{ color: '#fff' }} />
        )}
      </div>
    </header>
  );
};

export default Navbar;
