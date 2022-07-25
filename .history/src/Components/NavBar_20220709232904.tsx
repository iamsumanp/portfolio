import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { HashLink } from "react-router-hash-link";
const myLogo = require("../assets/logo.png");
export const NavBar = () => {
  const [active, setActive] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const q = gsap.utils.selector(navRef);
  const tl: any = useRef(); // gsap.TimelineVars | undefined

  const burgerClick = () => {
    setActive(!active);
  };

  // useEffect(() => {
  //   tl.current = gsap
  //     .timeline()
  //     .from(q(".logoImg"), {
  //       y: 20,
  //       opacity: 0,
  //       duration: 0.7,
  //       ease: "Power3.easeIn",
  //     })
  //     .from(q(".navUl"), {
  //       y: 20,
  //       opacity: 1,
  //       duration: 0.7,
  //       stagger: 0.5,
  //     });
  // });

  useEffect(() => {
    let tlm = tl.current;
    tlm = gsap.timeline();
    tlm.to(q(".logoImg"), {
      rotate: 360,
      height: "50px",
    });
    tlm.to(q(".navUl"), {
      // x: 100,
    });
  }, [q]);

  return (
    <nav className="navBar" ref={navRef}>
      <HashLink to="#heroSection" className="linkHash" smooth>
        <img
          src={myLogo}
          alt="SP"
          className="logoImg"
          onClick={active ? burgerClick : undefined}
        />
      </HashLink>

      <ul className={active ? "navUl nav-active" : "navUl"}>
        <li className="navLinks" onClick={active ? burgerClick : undefined}>
          <HashLink to="#aboutMe" className="linkHash" smooth>
            About me
          </HashLink>
        </li>
        <li className="navLinks" onClick={active ? burgerClick : undefined}>
          <HashLink to="#projectSection" className="linkHash" smooth>
            Projects
          </HashLink>
        </li>
        <li className="navLinks" onClick={active ? burgerClick : undefined}>
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
