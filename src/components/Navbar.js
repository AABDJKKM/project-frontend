import React, { useState } from "react";
import "./NavbarStyles.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);




  return (
    <div className="header">
      <Link to="/">
        <img className="logo" src="https://cdn4.iconfinder.com/data/icons/social-productivity-line-art-4/128/checkbox-square-unchecked-1024.png" alt="box"/>
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
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{color : "#fff"}} /> 
        ) : (
          <FaBars size={20} style={{color : "#fff"}} />
        )}
        
        
      </div>
    </div>
  )
}

export default Navbar
