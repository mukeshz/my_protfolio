import React, { useState } from "react";
import "./Home.scss";
import MyImage from "../../assets/MyImage.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

function Home() {
  return (
    <>
      <div className="container" id="home">
        <div className="row d-flex justify-content-between align-items-center mx-lg-5 vh pt-5 pb-5">
          <div className="col-md-6 justify-content-center mt-5 pt-md-5">
            <div>
              <h1
                className="text-bold text-md-center"
                style={{
                  backgroundColor: "#7843E9",
                  display: "inline-block",
                  padding: "5px 10px",
                  borderRadius: "5px",
                  color:"white"
                }}
              >
                WELCOME
              </h1>
              <p
                className=" my-3 my-md-4 text"
                style={{
                  backgroundColor: "#7843E9",
                  display: "inline-block",
                  padding: "5px 10px",
                  borderRadius: "5px",
                  color:"white"
                }}
              >
                Miss-T stationary Founded & Managing by Thara. Explore for more ❤️
              </p>
              <div className="d-md-flex ">
                {
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="icon"
                    onClick={() => {
                      window.open(
                        "https://www.instagram.com/thanooes/",
                        "_blank",
                      );
                    }}
                  />
                }
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="icon mx-2"
                  onClick={() => {
                    window.open(
                      "https://api.whatsapp.com/send?phone=919488426920",
                      "_blank",
                    );
                  }}
                />
              </div>
            </div>
          </div>

          <div className="col-md-5 justify-content-center mt-5 p-3 pt-md-5">
            <div className="float-animation">
              <svg
                className="img-fluid"
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
        </div>

        <div className="pb-4"></div>
      </div>
    </>
  );
}

export default Home;
