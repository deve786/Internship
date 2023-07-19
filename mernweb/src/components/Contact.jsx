import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form data to the backend using Axios or any other library
    axios.post("http://localhost:8080/api/v1/auth/contact", formData)
      .then((res) => {
        // Handle success response if needed
        console.log("Form submitted successfully:", res.data);
        // Optionally, you can show a success message to the user
      })
      .catch((err) => {
        // Handle error if needed
        console.error("Error submitting form:", err);
        // Optionally, you can show an error message to the user
      });
  };

  return (
    <div>
      <section id="contact">
        <div className="container my-5 py-5">
          <div className="row mb-5">
            <div className="col-12 text-center">
              <h3 className="fs-5 mb-0">Contact Us</h3>
              <h1 className="display-6 mb-4">Have Some <b>Questions?</b></h1>
              <hr className="w-25 mx-auto" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <img src="contact1.jpg" alt="Contact" style={{ width: "100%", height: "auto" }} />
            </div>
            <div className="col-md-6">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Your Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email Id</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter Your Email Id"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Your Message</label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary rounded-pill px-4">
                  Send Message <i className="fa fa-paper-plane ms-2"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
