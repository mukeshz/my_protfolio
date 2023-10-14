import React from "react";
import "./Contact.scss";

function Contact() {
  return (
    <>
      <div className="pt-md-4"></div>
      <div className="container-md pb-5" id="about">
        <h1 className="text-bold pt-5 pt-lg-5 text-center pb-1">CONTACT</h1>
        <div className="custom-line" />
        <div className="mt-md-5 mt-4 py-3 d-flex justify-content-center align-items-center">
          <div className="input-box p-md-5 p-3 col-12 col-md-8 col-lg-6 rounded">
            <input
              type="text"
              placeholder="Enter Name"
              className="input rounded col-12 py-2 py-md-3 my-1 "
              required
            />
            <input
              type="email"
              placeholder="Enter Email"
              className="input rounded py-2 py-md-3 my-1 my-lg-2"
              required
            />
            <input
              type="text"
              placeholder="Enter Message"
              className="msg input rounded py-2 py-md-3 my-1"
              required
            />
            <button className="btn my-2 my-md-3">SUBMIT</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
