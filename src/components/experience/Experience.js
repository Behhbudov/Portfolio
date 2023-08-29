import React, { useState } from "react";
import "./Experience.css";

const Experience = () => {
  const [activeTab, setActiveTab] = useState("Digitalhands.az");

  let activeContent;

  switch (activeTab) {
    case "Digitalhands.az":
      activeContent = (
        <>
          <h3>Front-end Developer Intern @ Digitalhands.az</h3>
          <p>August 2023 – Present</p>
          <ul>
            <li>Completing projects on schedule and on time.</li>
            <li>Creating project according to design</li>
          </ul>
        </>
      );
      break;
    case "Express Bank":
      activeContent = (
        <>
          <h3>Front-end Developer Intern @ Express Bank</h3>
          <p>July 2022 – September 2022</p>
          <ul>
            <li>
              Collaborating with back-end programmers and designers to implement
              features and functionality.
            </li>
            <li>Completing projects on schedule and on time.</li>
            <li>Creating new features for the loan project.</li>
          </ul>
        </>
      );
      break;
    default:
      activeContent = null;
  }

  return (
    <div className="experience">
      <div className="experience__title">
        <h2>
          <span>02.</span>Where I've Worked
        </h2>
        <div></div>
      </div>
      <div className="experience__info">
        <div className="experience__tabs">
          <button
            className={activeTab === "Digitalhands.az" ? "active" : null}
            onClick={() => setActiveTab("Digitalhands.az")}
          >
            Digitalhands.az
          </button>
          <button
            className={activeTab === "Express Bank" ? "active" : null}
            onClick={() => setActiveTab("Express Bank")}
          >
            Express Bank
          </button>
        </div>
        <div className="experience__tabs_info">{activeContent}</div>
      </div>
    </div>
  );
};

export default Experience;
