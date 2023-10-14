import React, { useState } from "react";
import "./Dashboard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import MyImage from "../assets/MyImage.png";
import Skills from "../Components/Skills/Skills";
import About from "../Components/About/About";
import Projects from "../Components/Projects/Projects";
import Contact from "../Components/Contact/Contact";

function Menubar() {
  const [isMobile, setIsMobile] = useState(false);

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
          <h2 className="logo"></h2>
          <ul className={`${isMobile ? "nav-mobile" : "nav-links"} mt-md-3`}>
            <li className="isMobile nav-bot">
              <a href="#home" aria-current="page">
                HOME
              </a>
            </li>
            <li className="nav-bot">
              <a href="#about" aria-current="page">
                ABOUT
              </a>
            </li>
            <li className="nav-bot">
              <a href="#skills" aria-current="page">
                SKILLS
              </a>
            </li>
            <li className="nav-bot">
              <a href="#projects" aria-current="page">
                PROJECTS
              </a>
            </li>
            <li>
              <a href="#contact" aria-current="page">
                CONTACT
              </a>
            </li>
          </ul>
          <div>
            <button
              className="btn isMobile-btn"
              onClick={() => setIsMobile(!isMobile)}
            >
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
        <div className="container" id="home">
          <div className="row d-flex justify-content-between align-items-center mx-lg-5 vh pt-5 pb-5">
            <div className="col-md-6 justify-content-center mt-5 pt-md-5">
              <div>
                <h1 className="text-bold text-md-center">HEY, I'M MUKESH</h1>
                <p className="text-md-center my-3 my-md-4 text">
                  A Passionate Frontend Web Developer, with a focus on React JS.
                  I create interactive and user-friendly Web Apps that meet your
                  needs and deliver exceptional user experience.
                </p>
                <div className="d-md-flex justify-content-center">
                  <button className="btn text-bold mt-2">
                    DOWNLOAD RESUME
                  </button>
                </div>
              </div>
            </div>

            <div className="col-md-5  justify-content-center mt-5 p-3 pt-md-5">
              <svg
                className="img-fluid "
                width="360px"
                style={{ fill: "#7843E9" }}
                viewBox="0 0 479 467"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <mask id="mask0" mask-type="alpha">
                  <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" />
                </mask>
                <g mask="url(#mask0)">
                  <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" />
                  <image
                    className="img-fluid"
                    width="360px"
                    x="55"
                    y="30"
                    xlinkHref={MyImage}
                  />
                </g>
              </svg>
            </div>
          </div>

          <div className="pb-4"></div>
        </div>
      </div>

      <div id="about" style={{ backgroundColor: "#F9F9F9" }}>
        <About />
      </div>

      <div id="skills" style={{ backgroundColor: "#F9F9F9" }}>
        <Skills />
      </div>

      <div id="skills" style={{ backgroundColor: "#F9F9F9" }}>
        <Projects />
      </div>

      <div id="skills" style={{ backgroundColor: "#EDEDED" }}>
        <Contact />
      </div>
    </>
  );
}

export default Menubar;
