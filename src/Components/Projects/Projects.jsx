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
      name: "Ravi Kumar",
      detail:
        "I bought a set of pencils from this shop and the quality is very good. They write smoothly and are perfect for daily use.",
    },
    {
      name: "Priya",
      detail:
        "The pen set I purchased works really well and feels comfortable to use. The ink flow is smooth and consistent.",
    },
    {
      name: "Arun Raj",
      detail:
        "I bought a pack of erasers and they erase neatly without damaging the paper. The quality is excellent for students.",
    },
  ];

  return (
    <>
      <div className="pt-md-4"></div>
      <div className="container-md pb-5" id="about">
        <h1 className="text-bold pt-4 pt-lg-5 text-center pb-1">REVIEWS</h1>
        <div className="custom-line" />
        <div className="skill-row mt-2">
          {skills.map((item, index) => (
            <div className="col-12 col-lg-4 d-flex justify-content-center align-items-center mt-5">
              <div key={index} className="card shadow mx-lg-3">
                <p className="text-center text-bold pt-3 text-grey">
                  {item.name}
                </p>
                <p className="text-center text text-grey px-1">{item.detail}</p>
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
