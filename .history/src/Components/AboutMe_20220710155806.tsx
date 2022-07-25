import gsap from "gsap";
// import {} from "gsap/EasePack"
import { useEffect, useRef } from "react";
import { VscTriangleRight } from "react-icons/vsc";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const mePhoto = require("../assets/mePhoto.jpg");

export const AboutMe = () => {
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const tl: gsap.TimelineVars | undefined = useRef();
  // gsap.registerPlugin(ScrollTrigger);

  const q = gsap.utils.selector(aboutMeRef);
  useEffect(() => {
    tl.current = gsap
      .timeline({
        defaults: { duration: 0.7 },
        scrollTrigger: {
          trigger: ".aboutMeSection",
          start: "-200 center",
          // markers: true,
          // toggleActions: "play none none reverse",
        },
      })
      .fromTo(
        q(".h2textabout"),
        {
          y: 10,
          opacity: 0,
          // stagger: 0.4,
        },
        {
          y: 0,
          opacity: 1,
          ease: "Power3.easeOut",
        }
      )
      .fromTo(
        q(".spanText"),
        {
          y: 10,
          opacity: 0,
          // stagger: 0.4,
        },
        {
          y: 0,
          opacity: 1,
          ease: "Power3.easeOut",
        },
        "-=0.4"
      )
      .fromTo(
        q(".imgContainer"),
        {
          x: 10,
          opacity: 0,
          stagger: 0.4,
        },
        {
          x: 0,
          // duration: 0.5,
          opacity: 1,
          ease: "Power3.easeOut",
        },
        "-=0.7"
      )
      .fromTo(
        q(".backEndFrontEndContainer"),
        {
          y: 10,
          opacity: 0,
          // stagger: 0.4,
        },
        {
          y: 0,
          opacity: 1,
          ease: "Power3.easeOut",
        },
        "-=0.8"
      );
  }, []);

  return (
    <div className="aboutMeSection" id="aboutMe" ref={aboutMeRef}>
      <h2 className="h2textabout">About Me</h2>
      <div className="contentAndImage">
        <div className="aboutMeContent">
          <span className="spanText">
            Hello, My name is Suman Pokharel and Lorem Ipsum is simply dummy
            text of the printing and typesetting industry. I like to code things
            from scratch, and enjoy bringing ideas to life in the browser, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book.I value simple content structure, clean design
            patterns, and thoughtful interactions.
          </span>
        </div>
        <div className="imgContainer">
          <img src={mePhoto} alt="profilePic" className="imgProfile" />
        </div>
      </div>
      <span className="spanText tech">
        Here are the technologies i am working with recently :
      </span>
      <div className="backEndFrontEndContainer">
        <div className="frontEndBox">
          <div className="spanTitle">Frontend</div>

          <div className="frontEndTools">
            <div className="fnTools1">
              <div className="fnTool">
                <VscTriangleRight className="triangleRight" />
                <span className="techName">React</span>
              </div>
              <div className="fnTool">
                <VscTriangleRight className="triangleRight" />
                <span className="techName">JavaScript</span>
              </div>
              <div className="fnTool">
                <VscTriangleRight className="triangleRight" />
                <span className="techName">HTML</span>
              </div>
              <div className="fnTool">
                <VscTriangleRight className="triangleRight" />
                <span className="techName">Git</span>
              </div>
              <div className="fnTool">
                <VscTriangleRight className="triangleRight" />
                <span className="techName">PHP</span>
              </div>
            </div>
            <div className="fnTools2">
              <div className="fnTool">
                <VscTriangleRight className="triangleRight" />
                <span className="techName">FIGMA</span>
              </div>
              <div className="fnTool">
                <VscTriangleRight className="triangleRight" />
                <span className="techName">TypeScript</span>
              </div>
              <div className="fnTool">
                <VscTriangleRight className="triangleRight" />
                <span className="techName">CSS</span>
              </div>
              <div className="fnTool">
                <VscTriangleRight className="triangleRight" />
                <span className="techName">BootStrap</span>
              </div>
            </div>
          </div>
        </div>
        <div className="frontEndBox">
          <div className="spanTitle">Backend</div>

          <div className="frontEndTools">
            <div className="fnTools1">
              <div className="fnTool">
                <VscTriangleRight className="triangleRight" />
                <span className="techName">NODEJS</span>
              </div>
              <div className="fnTool">
                <VscTriangleRight className="triangleRight" />
                <span className="techName">ExpressJS</span>
              </div>
              <div className="fnTool">
                <VscTriangleRight className="triangleRight" />
                <span className="techName">MongoDB</span>
              </div>
            </div>
            <div className="fnTools2">
              <div className="fnTool">
                <VscTriangleRight className="triangleRight" />
                <span className="techName">FireBase</span>
              </div>
              <div className="fnTool">
                <VscTriangleRight className="triangleRight" />
                <span className="techName">mySql</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
