import React from 'react';
import './about.css';

const About = () => {
  return (
    <div className="about-container">
        <img src="aboutus.png" alt="Banner" className="banner-image" />
      <h2 className="about-heading">About Us</h2>
      <p className="about-paragraph">
        Aysdev Global Consultancy LLP is a leading global provider of professional services dedicated to helping organizations achieve growth, innovation, and success. With a team of talented professionals, we offer a wide range of services including consulting, strategy, and technology solutions.
      </p>
      <p className="about-paragraph">
        We are committed to delivering exceptional value to our clients and assisting them in solving their most complex challenges. Our expertise spans across various industries, and we strive to provide insights, guidance, and innovative solutions that drive business transformation.
      </p>
      <p className="about-paragraph">
        At Aysdev Global Consultancy LLP, we prioritize collaboration, integrity, and client satisfaction. We work closely with our clients to understand their unique needs and tailor our services to meet their specific goals. Our dedication to excellence and continuous improvement sets us apart as a trusted partner for organizations worldwide.
      </p>
      <a className="about-link" href="/contact">Contact us</a> to learn more about how we can assist your organization.
    </div>
  );
};

export default About;