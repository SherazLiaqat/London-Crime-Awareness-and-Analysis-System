import React, { useState, useEffect } from "react";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import "./Navbar.css";
import Dropdowns from "./Dropdowns";
import { FaHome } from "react-icons/fa";
import { FaMedrt } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";

//import {fatimes} from 'react-icons/fa';

function Navbar() {
  const [Navbar, setNavbar] = useState(false);
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [dropdown, setDropdown] = useState(false);
  const [dropdowns, setDropdowns] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const changebackground = () => {
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

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  const onMouseEnters = () => {
    if (window.innerWidth < 960) {
      setDropdowns(false);
    } else {
      setDropdowns(true);
    }
  };

  const onMouseLeaves = () => {
    if (window.innerWidth < 960) {
      setDropdowns(false);
    } else {
      setDropdowns(false);
    }
  };
  window.addEventListener("scroll", changebackground);
  return (
    <>
      <nav className={Navbar ? "navbar active" : "navbar"}>
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <FaMedrt />
            HCES
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
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Awareness"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Crime Awareness
              </Link>
            </li>

            {/* <li
              className="nav-item"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <Link className="nav-links" onClick={closeMobileMenu}>
                Earthquake
                <IoMdArrowDropdown onClick />
              </Link>

              {dropdown && <Dropdown />}
            </li>
            <li
              className="nav-item"
              onMouseEnter={onMouseEnters}
              onMouseLeave={onMouseLeaves}
            >
              <Link className="nav-links" onClick={closeMobileMenu}>
                Flood <IoMdArrowDropdown onClick />
              </Link>
              {dropdowns && <Dropdowns />}
            </li> */}
            <li className="nav-item">
              <Link
                to="/CrimeStatistics"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Crime Statistics
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Live" className="nav-links" onClick={closeMobileMenu}>
                News
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Event" className="nav-links" onClick={closeMobileMenu}>
                Historical Data
              </Link>
            </li>

            {/* <li className="nav-item">
              <Link to="/Api" className="nav-links" onClick={closeMobileMenu}>
                Weather
              </Link>
            </li> */}

            <li>
              <Link
                to="/Estimation"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Estimation
              </Link>
            </li>
          </ul>

          {button && (
            <Link to="/Estimation">
              <Button buttonStyle="btn--outline">Estimation</Button>
            </Link>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
