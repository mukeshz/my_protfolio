import React from "react";
import "./Skills.scss";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import js from "../../assets/js.png";
import ts from "../../assets/ts.png";
import react from "../../assets/react.png";
import redux from "../../assets/redux.png";
import bootstrap from "../../assets/bootstrap.png";
import mui from "../../assets/mui.png";
import jest from "../../assets/jest.png";
import api from "../../assets/api.png";
import git from "../../assets/git.png";
import postman from "../../assets/postman.png";

function Skills() {
  const skills = [
    { img: html, name: "Html" },
    { img: css, name: "CSS" },
    { img: js, name: "Javascript" },
    { img: ts, name: "Typescript" },
    { img: bootstrap, name: "Bootstrap" },
    { img: react, name: "React" },
    { img: mui, name: "Material UI" },
    { img: redux, name: "Redux" },
    { img: jest, name: "Jest" },
    { img: git, name: "Git" },
    { img: api, name: "API" },
    { img: postman, name: "Postman" },
  ];

  return (
    <>
      <div className="pt-md-4"></div>
      <div className="container-md pb-5" id="about">
        <h1 className="text-bold pt-4 pt-lg-5 text-center pb-1">SKILLS</h1>
        <div className="custom-line" />
        <div className="skill-row mt-4 pt-1">
          {skills.map((item, index) => (
            <div className="col-6 col-md-3 col-lg-2 d-flex justify-content-center align-items-center mt-3">
              <div key={index} className="border shadow p-3 m-2 rounded">
                <img
                  src={item.img}
                  alt={"image" + index}
                  className="skill-img img img-fluid"
                />
                <p className="text-center text-bold pt-2 text-grey">
                  {item.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Skills;
