import React, { useState } from "react";
import "./Dashboard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";

function Menubar() {
  const [isMobile, setIsMobile] = useState(false);

  const handleNav = () => {
    setIsMobile(!isMobile);
  };

  return (
    <>
      <div
        style={{ position: "fixed", width: "100%", backgroundColor: "white" }}
      >
        <nav className="nav">
          <h2 className="logo">MUKESH</h2>
          <ul className={isMobile ? "nav-mobile" : "nav-links"}>
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
            <button className="btn" onClick={handleNav}>
              {isMobile ? (
                <FontAwesomeIcon icon={faTimes} color="#0B77FB" size="2x" />
              ) : (
                <FontAwesomeIcon icon={faBars} color="#0B77FB" size="2x" />
              )}
            </button>
          </div>
        </nav>
      </div>

      <div
        style={{
          position: "absolute",
          zIndex: -1,
          width: "100%",
          paddingTop: "100px",
        }}
      >
        
        <div className="container" id="home" style={{ marginBottom: "700px" }}>
          <div className="row d-flex justify-content-between align-items-center 100vh">
          <h1>Home</h1>
          </div>
        </div>
        <div id="about" style={{ marginTop: "700px" }}>
          <h1>About</h1>
        </div>
        <div id="service" style={{ marginTop: "700px" }}>
          <h1>Service</h1>
        </div>
      </div>
    </>
  );
}

export default Menubar;
