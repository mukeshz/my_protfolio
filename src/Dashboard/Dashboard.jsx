import React, { useState } from "react";
import "./Dashboard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";

function Menubar() {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <>
    <div>
      <nav className="nav">
        <h2 className="logo">MUKESH</h2>
        <ul className={isMobile ? "nav-mobile" : "nav-links"}>
          <li className="isMobile">
          <a href="#home" aria-current="page">Home</a>
          </li>
          <li>About Us</li>
          <li>
          <a href="#service" aria-current="page">service</a>
          </li>
          <li>It Staff</li>
          <li>Careers</li>
          <li>Contact Us</li>
        </ul>
        <div>
          <button className="btn" onClick={() => setIsMobile(!isMobile)}>
            {isMobile ? (
              <FontAwesomeIcon icon={faTimes} color="#0B77FB" size="2x" />
            ) : (
              <FontAwesomeIcon icon={faBars} color="#0B77FB" size="2x" />
            )}
          </button>
        </div>
      </nav>
    </div>

    <div id='home' style={{marginBottom:'700px'}}>
      <h1>Home</h1>
    </div>
    <div id='about'style={{marginTop:'700px'}}>
      <h1>About</h1>
    </div>
    <div id='service'style={{marginTop:'700px'}}>
      <h1>Service</h1>
    </div>
    </>
  );
}

export default Menubar;
