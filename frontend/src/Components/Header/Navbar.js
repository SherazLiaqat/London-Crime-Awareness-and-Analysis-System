import React, { useState, useEffect, Fragment, useLayoutEffect } from "react";

//import { Link } from 'react-router-dom';
import { Link as LinkS } from "react-scroll";

import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { FiMap } from "react-icons/fi";

function Navbar() {
  const [click, setClick] = useState(false);
  const [Navbar, setNavbar] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const changebackground = () => {
    if (window.scrollY >= 120) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changebackground);
  return (
    <>
      <nav className={Navbar ? "navbar active" : "navbar"}>
        <div className="navbar-container">
          <LinkS
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to="Home"
            className="navbar-logo"
            onClick={closeMobileMenu}
          >
            HCES
            <FiMap />
          </LinkS>
          <div className="menu-icon" onClick={handleClick}>
            {click ? (
              <FaTimes className="fa-bars" />
            ) : (
              <FaBars className="fa-bars" />
            )}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <LinkS
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Home"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Home
              </LinkS>
            </li>
            <li className="nav-item">
              <LinkS
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Service"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Services
              </LinkS>
            </li>

            <li className="nav-item">
              <LinkS
                spy={true}
                smooth={true}
                offset={-70}
                duration={100}
                to="Portfolio"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Portfolio
              </LinkS>
            </li>

            <li className="nav-item">
              <LinkS
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Blog"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Technology
              </LinkS>
            </li>
            <li className="nav-item">
              <LinkS
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="About"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                About
              </LinkS>
            </li>
            <li className="nav-item">
              <LinkS
                spy={true}
                smooth={true}
                offset={-70}
                to="Contact"
                duration={500}
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact
              </LinkS>
            </li>

            <li></li>
            <nav></nav>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
