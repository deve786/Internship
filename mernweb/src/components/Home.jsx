import React from "react";
import About from "./About";
import Contact from "./Contact";
import { NavLink } from "react-router-dom";
import Blog from "./Blog";
import { useState } from "react";
import { useEffect } from "react";
import client from "../client";
import BlockContent from "@sanity/block-content-to-react";
const Home = () => {
  const [banner, setBanner] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "banner"]{
          body, title,mainImage{
                asset ->{
                    _id,
                    url
                },
              },
        }`
      )
      .then((data) => setBanner(data))
      .catch(console.error);
  }, []);

  return (
    <div>
      {banner.map((banner) => (
        <div>
          <section
            className="banner"
            style={{ backgroundImage: `url(${banner.mainImage.asset.url})` }}
          >
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-8 mt-5">
                  <h1 className="display-4 fw-bolder mb-4 text-center text-white">
                    {banner.title}
                  </h1>
                  <h1 className="lead text-center fs-4 mb-5 text-white">
                    <BlockContent
                      blocks={banner.body}
                      projectI="40rf11bs"
                      dataset="production"
                    />
                  </h1>
                  <div className="buttons d-flex justify-content-center">
                    <NavLink
                      to="/contact"
                      className="btn btn-light me-4 rounded-pill px-4 py-2"
                    >
                      Get Quote
                    </NavLink>
                    <NavLink
                      to="/services"
                      className="btn btn-outline-light rounded-pill px-4 py-2"
                    >
                      Our Services
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      ))}

      
      <About />
      <Blog />
      <Contact />
    </div>
  );
};

export default Home;
