import React from "react";
import { HashLink } from "react-router-hash-link";
const myLogo = require("../assets/logo.png");
export const NavBar = () => {
  return (
    <nav>
      <HashLink to="#heroSection" className="linkHash" smooth>
        <img src={myLogo} alt="SP" className="logoImg" />
      </HashLink>

      <ul className="navUl">
        <li className="navLinks">
          <HashLink to="#aboutMe" className="linkHash" smooth>
            About me
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
    </nav>
  );
};
