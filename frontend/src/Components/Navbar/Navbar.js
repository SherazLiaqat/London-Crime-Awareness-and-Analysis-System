import React, { useState, useEffect } from "react";
import { Button } from "../Button/Button";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const { pathname } = useLocation();
  const [Navbar, setNavbar] = useState(false);
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const changeBackground = () => {
    if (window.scrollY >= 125) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);
  window.addEventListener("scroll", changeBackground);

  return (
    <>
      <nav
        className={`navbar ${
          Navbar || pathname !== "/" ? "black" : "transparent"
        }`}
      >
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            LCES
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? (
              <FaTimes className="fa-bars" />
            ) : (
              <FaBars className="fa-bars" />
            )}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                to="/"
                exact
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/Awareness"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Crime Awareness
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/CrimeStatistics"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Crime Statistics
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/CrimeNews"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                News
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/Event"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Historical Data
              </NavLink>
            </li>
          </ul>
          {button && (
            <Link to="/Estimation">
              <Button buttonStyle="btn--background">Estimation</Button>
            </Link>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
