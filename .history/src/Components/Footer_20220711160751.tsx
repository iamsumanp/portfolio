import React from "react";
import { AiFillGithub, AiFillTwitterCircle } from "react-icons/ai";
import { BsLinkedin, BsFacebook } from "react-icons/bs";

export const Footer = () => {
  return (
    <div className="footerSection">
      <div className="footerContainer">
        <div className="socialMediaAndQuote">
          <span className="spSpan">Designed And Built By Suman Pokhrel</span>
          <div className="socialMedia">
            <a
              href="https://www.linkedin.com/in/suman-pokharel-2a4b61206/"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin size={30} className="icons" fill="#2867B2" />
            </a>

            <a
              href="https://www.facebook.com/summan.pokharel/"
              target="_blank"
              rel="noreferrer"
            >
              <BsFacebook size={30} className="icons" fill="	#4267B2" />
            </a>
            <a
              href="https://github.com/iamsumanp"
              target="_blank"
              rel="noreferrer"
              style={{ color: "black" }}
            >
              <AiFillGithub size={34} className="icons" />
            </a>
            <a
              href="https://twitter.com/Itsmesuman2"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillTwitterCircle size={35} className="icons" fill="#00acee" />
            </a>
          </div>
        </div>
        <span className="spSpan">&copy; 2022 - Suman</span>
      </div>
    </div>
  );
};
