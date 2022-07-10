import { gsap } from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { HashLink } from "react-router-hash-link";
const myLogo = require("../assets/logo.png");
export const NavBar = () => {
  const [active, setActive] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const q = gsap.utils.selector(navRef);
  const tl: any = useRef(null); // gsap.TimelineVars | undefined
  const imgRef = useRef(null);
  const burgerClick = () => {
    setActive(!active);
  };

  useEffect(() => {
    // tl.current = gsap
    //   .timeline()
    //   .from(q(".linkHash"), {
    //     y: 20,
    //     opacity: 0,
    //     duration: 0.7,
    //     ease: "Power3.easeIn",
    //   })
    //   .from(q(".navUl"), {
    //     y: 20,
    //     opacity: 0,
    //     duration: 0.7,
    //     stagger: 0.5,
    //   });
    const el = imgRef.current;
    gsap.from(el, { rotation: 360, duration: 1 });
  });

  // useEffect(() => {
  //   tl.current = gsap.timeline();
  // }, [q]);

  return (
    <nav className="navBar" ref={navRef}>
      <HashLink to="#heroSection" className="linkHash" smooth>
        <img
          src={myLogo}
          alt="SP"
          className="logoImg"
          onClick={active ? burgerClick : undefined}
          ref={imgRef}
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
