import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import resume from '../../assets/Mukesh.pdf';

function About() {
  return (
    <>
      <div className="pt-md-5"></div>
      <div className="container-md">
        <h1 className="text-bold pt-5 text-center pb-1">ABOUT ME</h1>
        <div className="custom-line" />
        <div className="row d-flex justify-content-between align-items-start pt-4">
          <div className="col-md-6 mt-md-5 mt-4 ">
            <h5 className="text-bold mb-2">Get to know me</h5>
            <p className="text-grey mt-3 text">
              I possess <span className="text-bold">1 Year and 3 Months</span>{" "}
              of professional experience working as a{" "}
              <span className="text-bold">Frontend Web Developer.</span> During
              this period, I collaborated on diverse projects, encompassing
              small business websites to intricate{" "}
              <span className="text-bold"> Web Apps.</span>
            </p>{" "}
            <p className="mt-2 text-grey text">
              {" "}
              I adeptly craft intuitive, visually appealing UI from client
              requirements. Actively, I am in search of{" "}
              <span className="text-bold">Job</span> opportunities to
              contribute, learn, and advance. If a suitable opportunity aligns
              with my skills and experience, please{" "}
              <span className="text-bold">Contact</span> me.
            </p>
            <a href={resume} download="Mukesh-Software-Developer">
            <button
              className="btn text-bold mt-3 mb-5"
            > 
              DOWNLOAD RESUME{" "}
              <FontAwesomeIcon icon={faDownload} style={{ marginLeft: 5 }} /> 
            </button>
            </a>
          </div>

          <div className="col-md-5 mt-md-5 ">
            <h5 className="text-bold mb-2">Education</h5>
            <p className="text-grey mt-3 text">
              Graduated{" "}
              <span className="text-bold">
                Bachelors in Mechanical Engineering
              </span>{" "}
              at Rohini College of Engineering & Technology affliated to Anna
              University with <span className="text-bold">7.89 CGPA</span> on
              July 2022.
            </p>
            <p className="text-grey text">
              Completed my 12th class with 60.4% on April 2018 and 10th class
              with 76.4% on April 2016 at SM.SM highier secondary school,
              TamilNadu.
            </p>
            <p className="mt-2 mt-md-3 mb-5"></p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
