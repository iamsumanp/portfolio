import { AiFillGithub } from "react-icons/ai";
import { BiLink } from "react-icons/bi";
import { VscTriangleRight } from "react-icons/vsc";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

const baatCheethImg = require("../assets/vaatcheeth.png");
const purlieuImg = require("../assets/purlieu.PNG");

const hirestationImg = require("../assets/hirestation.png");

export const Projects = () => {
  const projectsRef = useRef<HTMLDivElement>(null);
  const tl2: gsap.TimelineVars | undefined = useRef();
  // gsap.registerPlugin(ScrollTrigger);

  const q = gsap.utils.selector(projectsRef);
  useEffect(() => {
    tl2.current = gsap
      .timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
          trigger: ".aboutMeSection",
          start: "top center",
          markers: true,
          // toggleActions: "play none none reverse",
        },
      })
      .fromTo(q(".h2textabout"), { y: 10, opacity: 0 }, { y: 0, opacity: 1 });
  });
  return (
    <div className="projectsSection" id="projectSection" ref={projectsRef}>
      <h2 className="h2textabout">My Recent Projects</h2>
      <div className="Project1Container">
        <div className="nameLabelLine">
          <span className="projectLabel">1. HireStation</span>
          <div className="vl"></div>
        </div>
        <div className="projectContentAndImage">
          <div className="projContent">
            <span className="projectDiscription">
              Hirestation is an webapp for buying and selling services with
              stripe as payment method. This is an heroku deployed web app.
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </span>
            <div className="linksContainer">
              <a
                href="https://hirestation.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                <BiLink
                  fill="#575454"
                  size={40}
                  style={{ marginRight: "1rem" }}
                />
              </a>
              <a
                href="https://github.com/iamsumanp/hirestation-heroku"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillGithub fill="#575454" size={40} />
              </a>
            </div>

            <span style={{ fontWeight: "bold" }}>Tools used :</span>
            <div className="frontEndTools">
              <div className="fnTools1">
                <div className="fnTool">
                  <VscTriangleRight className="triangleRight" />
                  <span className="techName">React</span>
                </div>

                <div className="fnTool">
                  <VscTriangleRight className="triangleRight" />
                  <span className="techName">ExpressJS</span>
                </div>
              </div>
              <div className="fnTools2">
                <div className="fnTool">
                  <VscTriangleRight className="triangleRight" />
                  <span className="techName">MONGODB</span>
                </div>
              </div>
            </div>
          </div>
          <img
            src={hirestationImg}
            alt="hirestationImg"
            className="hirestationImg"
          />
        </div>
      </div>
      <div className="Project2Container">
        <div className="nameLabelLine2">
          <div className="vl"></div>
          <span className="projectLabel">2. BaathCheeth</span>
        </div>
        <div className="projectContentAndImage1">
          <img
            src={baatCheethImg}
            alt="hirestationImg"
            className="baathcheethImg"
          />
          <div className="projContent">
            <span className="projectDiscription">
              Hirestation is an webapp for buying and selling services with
              stripe as payment method. This is an heroku deployed web app.
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </span>
            <div className="linksContainer">
              <a
                href="https://baatcheeth.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <BiLink
                  fill="#575454"
                  size={40}
                  style={{ marginRight: "1rem" }}
                />
              </a>
              <a
                href="https://github.com/iamsumanp/BaatCheeth"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillGithub fill="#575454" size={40} />
              </a>
            </div>

            <span style={{ fontWeight: "bold" }}>Tools used :</span>
            <div className="frontEndTools">
              <div className="fnTools1">
                <div className="fnTool">
                  <VscTriangleRight className="triangleRight" />
                  <span className="techName">React</span>
                </div>
              </div>
              <div className="fnTools2">
                <div className="fnTool">
                  <VscTriangleRight className="triangleRight" />
                  <span className="techName">FireBase/Firestore</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Project1Container">
        <div className="nameLabelLine">
          <span className="projectLabel">3. Purlieu</span>
          <div className="vl"></div>
        </div>
        <div className="projectContentAndImage">
          <div className="projContent">
            <span className="projectDiscription">
              Hirestation is an webapp for buying and selling services with
              stripe as payment method. This is an heroku deployed web app.
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </span>
            <div className="linksContainer">
              <a
                href="https://purlieu-users-front.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <BiLink
                  fill="#575454"
                  size={40}
                  style={{ marginRight: "1rem" }}
                />
              </a>
              <a
                href="https://github.com/shresthaoshan/purlieu_users_frontend"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillGithub fill="#575454" size={40} />
              </a>
            </div>

            <span style={{ fontWeight: "bold" }}>Tools used :</span>
            <div className="frontEndTools">
              <div className="fnTools1">
                <div className="fnTool">
                  <VscTriangleRight className="triangleRight" />
                  <span className="techName">React</span>
                </div>

                <div className="fnTool">
                  <VscTriangleRight className="triangleRight" />
                  <span className="techName">StyledComponents</span>
                </div>
              </div>
              <div className="fnTools2">
                <div className="fnTool">
                  <VscTriangleRight className="triangleRight" />
                  <span className="techName">PostgreSQL</span>
                </div>
                <div className="fnTool">
                  <VscTriangleRight className="triangleRight" />
                  <span className="techName">Figma</span>
                </div>
              </div>
            </div>
          </div>
          <img
            src={purlieuImg}
            alt="hirestationImg"
            className="hirestationImg"
          />
        </div>
      </div>
    </div>
  );
};
