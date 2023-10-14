import React from "react";
import "./Projects.scss";
import iskcon from "../../assets/iskcon-project.png";
import archover from "../../assets/archover-project.png";
import netflix from "../../assets/netflix-project.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Projects() {
  const skills = [
    {
      img: iskcon,
      name: "ISKCON KANYAKUMARI",
      detail:
        "Temple management website, logged-in admins only add, edit, and delete contents. Integrated Redux for multi-languages and authentication.",
      link: 'https://iskcon-kanyakumari-fc9dd.web.app/'
    },
    {
      img: archover,
      name: "ARCHOVER SOLUTIONS",
      detail:
        "It is a consultancy services company website designed and developed in ReactJS with bootstrap for the responsive and user friendly interface.",
      link: 'https://archover-solutions-8ecb3.web.app/'
    },
    {
      img: netflix,
      name: "NETFLIX CLONE",
      detail:
        "I developed a Netflix clone using React.js, Bootstrap, and Material UI, showcasing my proficiency in front-end development and design.",
    ink: 'https://netflix-clone-7zru.onrender.com/'
    },
  ]

  return (
    <>
      <div className="pt-md-4"></div>
      <div className="container-md pb-5" id="about">
        <h1 className="text-bold pt-4 pt-lg-5 text-center pb-1">PROJECTS</h1>
        <div className="custom-line" />
        <div className="skill-row mt-2">
          {skills.map((item, index) => (
            <div className="col-12 col-lg-4 d-flex justify-content-center align-items-center mt-5">
              <div key={index} className="card shadow mx-lg-3">
                <img
                  src={item.img}
                  alt={"image" + index}
                  className="project-img border card-img img-fluid"
                />
                <p className="text-center text-bold pt-3 text-grey">
                  {item.name}
                </p>
                <p className="text-center text text-grey px-1">{item.detail}</p>
                <p className="text-bold text-center text-color live-link" onClick={() => {
                    window.open(
                      `${item.link}`,
                      "_blank"
                    );
                  }}>
                  Checkout Live{" "}
                  <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="pt-3 pt-lg-4"></div>
    </>
  );
}

export default Projects;
