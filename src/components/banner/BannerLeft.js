import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./BannerLeft.css";

const BannerLeft = () => {
  return (
    <div className="bannerLeft__container">
      <div className="icons">
        <a href="https://github.com/Behhbudov" target="_blank" rel="noreferrer">
          <GitHubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/murad-behbudov-843503216/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon />
        </a>
        <a
          href="https://www.instagram.com/behhbudov"
          target="_blank"
          rel="noreferrer"
        >
          <InstagramIcon />
        </a>
      </div>
    </div>
  );
};

export default BannerLeft;
