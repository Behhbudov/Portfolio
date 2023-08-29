import React from "react";
import Img from "../../assets/photos/mainbg.png";
import "./Main.css";

const Main = () => {
  return (
    <main className="main__container">
      <div className="hero">
        <h6>Hi, my name is</h6>
        <h1>Behbudov Murad</h1>
        <h2>I build things for the web.</h2>
        <p>
          I’m a front-end developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building accessible, human-centered products at Kapital Bank.
        </p>
      </div>
      <div className="illustration">
        <img src={Img} alt="Main Background" />
      </div>
    </main>
  );
};

export default Main;
