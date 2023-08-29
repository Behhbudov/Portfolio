import React from "react";
import Img from "../../assets/photos/Murad.jpg";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <div className="about__title">
        <h2>
          <span>01.</span>About Me
        </h2>
        <div></div>
      </div>
      <div className="about__description">
        <div>
          <p>
            Hello! My name is Murad and I enjoy creating things that live on the
            internet. My interest in web development started early in 2022 when
            I decided to try editing custom landing pages. This taught me a lot
            about HTML & CSS!
          </p>
          <p>Here are a few technologies I’ve been working with recently:</p>
          <div>
            <ul>
              <li>HTML</li>
              <li>CSS - SCSS</li>
              <li>Bootstrap / Material UI</li>
              <li>Styled Components</li>
              <li>JavaScript</li>
              <li>jQuery</li>
              <li>React JS (Hooks, Context API)</li>
              <li>Figma</li>
            </ul>
          </div>
        </div>
        <div className="about__img_container">
          <img src={Img} alt="Profile" />
        </div>
      </div>
    </div>
  );
};

export default About;
