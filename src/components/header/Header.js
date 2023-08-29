import React from "react";
import CV from "../../assets/media/MuradBehbudov.pdf";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="header__container">
        <div className="logo">
          <a href="#top">BM</a>
        </div>
        <ul>
          <li>
            <span>01.</span>About
          </li>
          <li>
            <span>02.</span>Experience
          </li>
          <li>
            <span>03.</span>Work
          </li>
          <li>
            <span>04.</span>Contact
          </li>
          <li>
            <a className="link" href={CV} target="_blank" rel="noreferrer">
              Resume
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
