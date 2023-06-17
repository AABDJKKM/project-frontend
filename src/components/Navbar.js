import React, { useState } from "react";
import "../styles/NavbarStyles.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/Logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';



const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);




  return (
    <div className="header">
      <Link to="/">
        <img className="logo" src= {Logo} alt="box"/>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
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
        <li>
            <FontAwesomeIcon icon={faUserCircle} />
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{color : "black"}} /> 
        ) : (
          <FaBars size={20} style={{color : "black"}} />
        )}
        
        
      </div>
    </div>
  )
}

export default Navbar
