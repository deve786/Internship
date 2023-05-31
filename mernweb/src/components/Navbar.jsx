import "./Navbar.css";
import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import client from "../client";
const Navbar = () => {
  const [service, setService] = useState([]);
  const [industry, setIndustry] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const query1 = `*[_type == "service"] { title, slug }`; // Adjust the query based on your Sanity schema
      const result1 = await client.fetch(query1);
      setService(result1);
      const query2 = `*[_type == "industry"] { title, slug }`; // Adjust the query based on your Sanity schema
      const result2 = await client.fetch(query2);
      setIndustry(result2);
    };

    fetchData();
  }, []);

  const generateGrid = () => {
    const rows = [];
    let currentColumn = [];

    industry.forEach((industry, index) => {
      currentColumn.push(
        <a key={industry.slug.current} href={`/${industry.slug.current}`}>
          {industry.title}
        </a>
      );

      if ((index + 1) % 5 === 0 || index === industry.length - 1) {
        rows.push(
          <div className="grid-column" key={rows.length}>
            {currentColumn}
          </div>
        );
        currentColumn = [];
      }
    });

    return rows;
  };


  return (
    <nav className="navbar">
      {/* <div className="navbar-logo">
        <a href="/" className="active"><img src="logoagc.png" alt="Logo" className="logo-image" /></a>
      </div> */}

      <ul className="navbar-items navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a href="/" className="active">
            <img src="logoagc.png" alt="Logo" className="logo-image" />
          </a>
        </li>
        <li className="nav-item dropdown">
          <a href="#" className="dropbtn">
            Industries
          </a>
          <div className="dropdown-content">
            <div className="grid-container">
              <div className="grid-row">
              {generateGrid()}
              </div>
              
            </div>
          </div>
        </li>

        <li className="nav-item dropdown">
          <a href="#" className="dropbtn">
            Services
          </a>

          <div className="dropdown-content">
            {service.map((service) => (
              <a key={service.slug.current} href={`/${service.slug.current}`}>
                {service.title}
              </a>
            ))}
          </div>
        </li>

        <li className="nav-item dropdown">
          <a href="#" className="dropbtn">
            Carrier
          </a>
          <div className="dropdown-content">
            <a href="/career">Home</a>
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
};

export default Navbar;
