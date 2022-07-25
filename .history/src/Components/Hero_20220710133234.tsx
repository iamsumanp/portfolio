import gsap from "gsap";
import { useEffect, useRef } from "react";
import SvgImg from "./IconComponent/SvgImg";

export const Hero = () => {
  const heroRef = useRef();
  const tl: gsap.TimelineVars | undefined = useRef();
  const q = gsap.utils.selector(heroRef);
  useEffect(() => {
    tl.current = gsap.timeline().fromTo(
      q(".content"),
      {
        y: 20,
        opacity: 0,
        duration: 1,
      },
      {
        y: 0,
        opacity: 1,
      }
    );
  });
  return (
    <div className="heroSection" id="heroSection" ref={heroRef}>
      <div className="content">
        <h4 className="h4text">Hi, My name is</h4>
        <h1 className="h1text">Suman Pokharel.</h1>
        <h2 className="h2text">I design and code web applications.</h2>
        <h5 className="h5text">
          I am a full stack web developer focused on bringing beautiful ideas
          into web apps and building experiences.
        </h5>
      </div>
      {/* <div className="svgImgg"> */}
      <SvgImg height={221} className="svgImgg" />
      {/* </div> */}
    </div>
  );
};
