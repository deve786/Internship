import React from "react";
import "./Article.css"; // Import the CSS file for Article component
import { useState } from "react";
import { useEffect } from "react";
import client from "../client";
import BlockContent from "@sanity/block-content-to-react";

const Article = () => {
  const [service, setService] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "service"]{
          body,slug, title,mainImage{
                asset ->{
                    _id,
                    url
                },
              },
        }`
      )
      .then((data) => setService(data))
      .catch(console.error);
  }, []);
  return (
    <div className="article">
      {service.map((service) => (
        <>
          <section className="banner" key={service.slug.current}>
            <img src={service.mainImage.asset.url} alt="Banner" />
          </section>
          <header>
            <h1>{service.title}</h1>
            <p className="date">Published: May 30, 2023</p>
          </header>
          <div className="content">
            <p>
              <BlockContent
                blocks={service.body}
                projectI="40rf11bs"
                dataset="production"
              />
            </p>
          </div>
        </>
      ))}
    </div>
  );
};

export default Article;
