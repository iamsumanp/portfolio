import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
const myLogo = require("../assets/logo.png");
export const NavBar = () => {
  const [active, setActive] = useState(false);

  const burgerClick = () => {
    setActive(!active);
  };

  return (
    <nav className="navBar">
      <HashLink to="#heroSection" className="linkHash" smooth>
        <img src={myLogo} alt="SP" className="logoImg" />
      </HashLink>

      <ul className={active ? "navUl" : "navUl nav-active"}>
        <li className="navLinks">
          <HashLink to="#aboutMe" className="linkHash" smooth>
            About mea
          </HashLink>
        </li>
        <li className="navLinks">
          <HashLink to="#projectSection" className="linkHash" smooth>
            Projects
          </HashLink>
        </li>
        <li className="navLinks">
          <HashLink to="#contact" className="linkHash" smooth>
            Contact
          </HashLink>
        </li>
        <li className="navLinks resume">Resume</li>
      </ul>
      <div className="burgerMenu" onClick={() => burgerClick()}>
        <div className={active ? "line1" : "line1 toggle"}></div>
        <div className={active ? "line2" : "line2 toggle2"}></div>
        <div className={active ? "line3" : "line3 toggle3"}></div>
      </div>
    </nav>
  );
};
