import React, { useState } from "react";
import "./Dashboard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import Skills from "../Components/Skills/Skills";
import About from "../Components/About/About";
import Projects from "../Components/Projects/Projects";
import Contact from "../Components/Contact/Contact";
import Home from "../Components/Home/Home";

function Menubar() {
  const [isMobile, setIsMobile] = useState(false);

  const handleNav = () => {
    setIsMobile(!isMobile);
  };

  return (
    <>
      <div
        className="shadoww"
        style={{
          position: "fixed",
          width: "100%",
          backgroundColor: "white",
          zIndex: 5,
        }}
      >
        <nav className="nav container-lg">
          <div className="d-flex align-items-center text-color"><h5 className="logo text-bold">&lt;WebDev /&gt;</h5></div>
          <ul className={`${isMobile ? "nav-mobile" : "nav-links"} mt-md-3`}>
            <li className="isMobile nav-bot">
              <a href="#home" aria-current="page" >
                HOME
              </a>
            </li>
            <li className="nav-bot">
              <a href="#about" aria-current="page" >
                ABOUT
              </a>
            </li>
            <li className="nav-bot">
              <a href="#skills" aria-current="page" >
                SKILLS
              </a>
            </li>
            <li className="nav-bot">
              <a href="#projects" aria-current="page" >
                PROJECTS
              </a>
            </li>
            <li>
              <a href="#contact" aria-current="page" >
                CONTACT
              </a>
            </li>
          </ul>
          <div>
            <button className="btn isMobile-btn" onClick={handleNav}>
              {isMobile ? (
                <FontAwesomeIcon icon={faTimes} color="#7843E9" size="2x" />
              ) : (
                <FontAwesomeIcon icon={faBars} color="#7843E9" size="2x" />
              )}
            </button>
          </div>
        </nav>
      </div>

      <div className="pt-5"></div>

      <div style={{ backgroundColor: "#EDEDED" }}>
        <Home />
      </div>

      <div id="about" style={{ backgroundColor: "#F9F9F9" }}>
        <About />
      </div>

      <div id="skills" style={{ backgroundColor: "#F9F9F9" }}>
        <Skills />
      </div>

      <div id="projects" style={{ backgroundColor: "#F9F9F9" }}>
        <Projects />
      </div>

      <div id="contact" style={{ backgroundColor: "#EDEDED" }}>
        <Contact />
      </div>

      <div className="d-flex justify-content-center align-items-center bg-dark">
        <p
          className="text-center pt-3 label text-white"
          style={{ fontSize: "12px" }}
        >
          &copy; Copyrights 2023. Made by Mukesh
        </p>
      </div>
    </>
  );
}

export default Menubar;
