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
          I've always been curious about fixing problems, a technophile who is
          fixated on the newest gadgets. Though it was always more of a hobby
          than a professional emphasis. I began learning to code when I first
          began my studies at university. After a few months, I came to the
          conclusion that programming was the correct career choice for me.
          JavaScript, HTML, CSS (as well as frameworks) are just programming
          languages I'm familiar with, but I'm continually learning new things,
          so that is it.
        </p>
      </div>
      <div className="illustration">
        <img src={Img} alt="Main Background" />
      </div>
    </main>
  );
};

export default Main;
