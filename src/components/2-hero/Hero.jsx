import React from "react";
import "./hero.css";
import Lottie from "lottie-react";
import developerAnimation from "./animation/developer.json";

const Hero = () => {
  return (
    <section id="about" className="hero">
      <div className="left-section">
        <div className="parent-avatar">
          <img src="./favicon.png" className="avatar" alt="avatar" />
          <div className="icon-verified"></div>
        </div>

        <h1 className="title">
          CyberSecurity Student at PPU | Emerging frontend trainee.
        </h1>

        <p className="sub-title">
          I'm Mohammed Qashqesh, A skilled Frontend Web Developer with a
          Bachelor's Degree in Cybersecurity from Palestine Polytechnic
          University (2021). Experienced in developing responsive and fully
          integrated websites using HTML, CSS, JavaScript, and React.js. Trained
          with the Google Developer Student Club in frontend development.
        </p>

        <div className="social-icons">
          <a href="https://www.instagram.com/m7md.coder/" target="_blank">
            <div className="icon icon-instagram"></div>
          </a>
          <a href="https://github.com/M7mdQashqesh" target="_blank">
            <div className="icon icon-github"></div>
          </a>
          <a
            href="https://www.linkedin.com/in/mohammed-qashqesh/"
            target="_blank"
          >
            <div className="icon icon-linkedin"></div>
          </a>
        </div>
      </div>

      <div className="right-section animation ">
        <Lottie style={{ scale: "1.3" }} animationData={developerAnimation} />
      </div>
    </section>
  );
};

export default Hero;
