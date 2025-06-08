import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/AILI-LOGO.png";
import SearchBox from "./SearchBox";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="navbar">
      {/* Logo */}
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="YTTA Logo" className="logo" />
        </Link>
      </div>

      {/* Search Box */}
      <div className="search-container">
        <SearchBox />
      </div>

      {/* Hamburger Menu */}
      <button className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      {/* Navbar Links */}
      <nav className={`navbar-links ${isOpen ? "active" : ""}`}>
        <ul>
          <li><Link to="/contact">Contact us</Link></li>
          <li><Link to="/training-menu">Training Menu</Link></li>
          <li><Link to="/webinar">Webinars</Link></li>
          <li><Link to="/aboutus">About us</Link></li>
          <li>
            <Link to="/career">Career</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
