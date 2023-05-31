import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  

  return (
    <nav className="navbar">
      {/* <div className="navbar-logo">
        <a href="/" className="active"><img src="logoagc.png" alt="Logo" className="logo-image" /></a>
      </div> */}
      
        <ul className="navbar-items navbar-nav me-auto mb-2 mb-lg-0" >
          <li className="nav-item">
            <a href="/" className="active"><img src="logoagc.png" alt="Logo" className="logo-image" /></a>
          </li>
          <li className="nav-item dropdown">
            <a href="#" className="dropbtn">Industries</a>
            <div className="dropdown-content">
              <div className="grid-container">
                <div className="grid-row">
                  <a href="#">Banking and Finance</a>
                  <a href="#">Defense</a>
                  <a href="#">EduTech</a>
                  <a href="#">Pharmaceuticals</a>
                  <a href="#">Industrial Automation</a>
                </div>
                <div className="grid-row">
                  <a href="#">FMCG</a>
                  <a href="#">Project Management</a>
                  <a href="#">Cloud Computing</a>
                  <a href="#">Blockchain</a>
                  <a href="#">Data Science</a>
                </div>
                <div className="grid-row">
                  <a href="#">AI/ML projects</a>
                </div>
              </div>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a href="#" className="dropbtn">Services</a>
            <div className="dropdown-content">
              <a href="#">Management Consulting</a>
              <a href="#">Technology Consulting</a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a href="#" className="dropbtn">Carrier</a>
            <div className="dropdown-content">
              <a href="#">Home</a>
              <a href="#">Students</a>
              <a href="/job">Jobs</a>
            </div>
          </li>
          <li className="nav-item">
            <a href="/about">About</a>
          </li>
          <li className="nav-item">
            <a href="#">Contact</a>
          </li>
        </ul>
      
      

    </nav>
  );
}

export default Navbar;

