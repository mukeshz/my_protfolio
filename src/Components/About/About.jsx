import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import resume from '../../assets/Mukesh.pdf';

function About() {
  return (
    <>
      <div className="pt-md-5"></div>
      <div className="container-md">
        <h1 className="text-bold pt-5 text-center pb-1">ABOUT</h1>
        <div className="custom-line" />
        <div className="row d-flex justify-content-between align-items-start pt-4">
          <div className="col-md-6 mt-md-5 mt-4 ">
            <h5 className="text-bold mb-2">Get to know</h5>
            <p className="text-grey mt-3 text">
              Welcome to <span className="text-bold">Miss-T Stationary</span>{" "}, your trusted destination for quality stationery and office supplies.
Proudly managed by <span className="text-bold">Thara</span>{" "}, our shop is dedicated to providing products that support learning, creativity, and productivity.
            </p>{" "}
            <p className="mt-2 text-grey text">
              {" "}
              We offer a wide range of notebooks, pens, art materials, school supplies, and office essentials.
Our goal is to deliver high-quality products at affordable prices for students, professionals, and businesses.
We believe in excellent customer service and building long-lasting relationships with our customers.
            </p>
          </div>

          <div className="col-md-5 mt-md-5 ">
            <h5 className="text-bold mb-2">Adress</h5>
            <p className="text-grey mt-3 text">
              📍 Miss-T Stationary
               123, Main Road,
               Near Bus Stand,
               Pondichery– 625001,
               India.  </p>
            <p className="text-grey text">
              📞 +91 98765 43210
              </p>
              <p className="text-grey text">
            📧 misst@gmail.com
            </p>
            <p className="mt-2 text-grey text">
              {" "}
             Thank you for choosing <span className="text-bold">Miss-T Stationary</span>{" "}✨
            </p>
            <p className="mt-2 mt-md-3 mb-5"></p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
