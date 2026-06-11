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
          <form
            action="mailto:mugesh63837@gmail.com"
            method="post"
            enctype="text/plain"
            className="input-box mb-md-5 mb-3 p-md-5 p-3 col-12 col-md-8 col-lg-6 rounded shadow"
          >
            <p className="text-grey label mt-2 mb-1">Name</p>
            <input
              type="text"
              placeholder="Enter Name"
              className="input rounded col-12 py-2 py-md-3 mb-2"
              required
            />
            <p className="text-grey label mt-2 mb-1">Email</p>
            <input
              type="email"
              placeholder="Enter Email"
              className="input rounded py-2 py-md-3 mb-2"
              required
            />
            <p className="text-grey label mt-2 mb-1">Message</p>
            <input
              type="text"
              placeholder="Enter Message"
              className="msg input rounded py-2 py-md-3 mb-3"
              required
            />
            <button className="btn my-2 my-md-3">SUBMIT</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
