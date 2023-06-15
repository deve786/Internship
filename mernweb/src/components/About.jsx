import React from 'react';
import './About.css';
import Scrollspy from 'react-scrollspy';
import Slider from './Slider';

// Install 'react-scrollspy' package: npm install react-scrollspy

function About() {
  return (
    <div className="about-container">
      
      <div className="banner" >
      <h1>About Us</h1>
        
        <Slider />
      </div>
      <Scrollspy items={['section-mission', 'section-vision', 'section-team']} currentClassName="active">
        <nav className="navigation">
          <a href="#section-mission">Our Mission</a>
          <a href="#section-vision">Our Vision</a>
          <a href="#section-team">Our Team</a>
        </nav>
      </Scrollspy>
      <div className="container">
        <section id="section-mission" className="section">
          <h2 className="section-title">Our Mission</h2>
          <div className="mission-content">
            <div className="mission-image"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut turpis nibh. Quisque efficitur auctor
              risus, in condimentum mi maximus ut. Nullam accumsan varius lorem, non posuere enim. Donec mattis libero
              eget risus lacinia vestibulum. Aenean eu semper justo, id interdum eros. In hac habitasse platea dictumst.
            </p>
          </div>
        </section>
        <section id="section-vision" className="section">
          <h2 className="section-title">Our Vision</h2>
          <div className="vision-content">
            <div className="vision-image"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut turpis nibh. Quisque efficitur auctor
              risus, in condimentum mi maximus ut. Nullam accumsan varius lorem, non posuere enim. Donec mattis libero
              eget risus lacinia vestibulum. Aenean eu semper justo, id interdum eros. In hac habitasse platea dictumst.
            </p>
          </div>
        </section>
        <section id="section-team" className="section">
          <h2 className="section-title">Our Team</h2>
          <div className="team-members">
            <div className="team-member">
              <div className="team-member-image"></div>
              <div className="member-details">
                <h3>John Doe</h3>
                <p>CEO</p>
              </div>
            </div>
            <div className="team-member">
              <div className="team-member-image"></div>
              <div className="member-details">
                <h3>Jane Smith</h3>
                <p>CTO</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;