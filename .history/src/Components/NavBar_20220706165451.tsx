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
      {active ? (
        <HashLink to="#heroSection" className="linkHash" smooth>
          <img
            src={myLogo}
            alt="SP"
            className="logoImg"
            onClick={burgerClick}
          />
        </HashLink>
      ) : (
        <HashLink to="#heroSection" className="linkHash" smooth>
          <img src={myLogo} alt="SP" className="logoImg" />
        </HashLink>
      )}

      <ul className={active ? "navUl nav-active" : "navUl"}>
        {active ? (
          <li className="navLinks" onClick={burgerClick}>
            <HashLink to="#aboutMe" className="linkHash" smooth>
              About me
            </HashLink>
          </li>
        ) : (
          <li className="navLinks">
            <HashLink to="#aboutMe" className="linkHash" smooth>
              About me
            </HashLink>
          </li>
        )}
        <li
          className="navLinks"
          // onClick={() => (!active ? burgerClick() : undefined)}
        >
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
        <div className={active ? "line1 toggle" : "line1"}></div>
        <div className={active ? "line2 toggle2" : "line2"}></div>
        <div className={active ? "line3 toggle3" : "line3"}></div>
      </div>
    </nav>
  );
};
