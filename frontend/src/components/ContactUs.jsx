/** @format */

import React from "react";

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic here
    console.log("Form submitted!");
  };

  return (
    <div className="vh-82">
      <div className="col-11 col-sm-11 col-xs-11 col-md-8 col-lg-7 mt-5 py-3 pb-3 bg-white rounded-2 shadow-sm m-auto border border-grey text-center">
        <h1 className="mb-4 fw-bold">Contact Us</h1>

        <form onSubmit={handleSubmit} className="col-11 m-auto text-start">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input type="text" className="form-control" id="name" required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input type="email" className="form-control" id="email" required />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              className="form-control"
              id="message"
              rows="5"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-dark">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
