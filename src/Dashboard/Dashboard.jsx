import React, { useState } from "react";
import "./Dashboard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";

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
                <FontAwesomeIcon icon={faTimes} color="#0B77FB" size="2x" />
              ) : (
                <FontAwesomeIcon icon={faBars} color="#0B77FB" size="2x" />
              )}
            </button>
          </div>
        </nav>
      </div>

      <div className="pt-5"></div>

   <div style={{backgroundColor:'#FAFAFA'}}>

      <div className="container" id="home">
        <div class="row d-flex justify-content-between align-items-center mx-lg-5 vh">
          <div class="col-md-6 d-lg-flex justify-content-center">
            <div>
              <h1 className="text-bold text-center">HEY, I'M MUKESH </h1>
              <p className="text-center my-4 text">
              A passionate Frontend Web Developer, with a focus on React JS. I create interactive and user-friendly Web Apps that meet your needs and deliver exceptional user experience.
              </p>
              <div className="d-flex justify-content-center">
              <button className="btn text-bold mt-2">DOWNLOAD RESUME</button>
              </div>
            </div>
          </div>

          <div class="col-md-6 d-lg-flex justify-content-center">
            <div>
              <h1>Hi I'm Mukesh </h1>{" "}
            </div>
          </div>
        </div>
      </div>

      </div>
    </>
  );
}

export default Menubar;
