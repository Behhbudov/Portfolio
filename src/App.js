import { Fragment } from "react";
import Header from "./components/header/Header";
import BannerLeft from "./components/banner/BannerLeft";
import Main from "./components/main/Main";
import BannerRight from "./components/banner/BannerRight";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import "./App.css";

function App() {
  return (
    <Fragment>
      <Header />
      <div className="container">
        <BannerLeft />
        <Main />
        <BannerRight />
      </div>
      <About />
      <Experience />
      <Projects />
      <Contact />
    </Fragment>
  );
}

export default App;
