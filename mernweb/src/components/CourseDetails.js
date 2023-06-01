import React from "react";
import "./Article.css"; // Import the CSS file for Article component
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import client from "../client";
import BlockContent from "@sanity/block-content-to-react";
import Courses from "./Courses";

const CourseDetails = () => {
  const { slug } = useParams();
  const [pageData, setPageData] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[slug.current=="${slug}"]{
          title,
          
          body,
          
          
          mainImage {
            asset -> {
              _id,
              url
            },
            
            alt
          }
          
    }`
      )
      .then((data) => setPageData(data[0]))
      .catch((err) => console.error(err));
  }, [slug]);
  return (
    <div className="article">
      <>
        <section className="banner">
          {/* <img src={pageData.mainImage.asset.url} alt={pageData.title} /> */}
        </section>
        <header>
          <h1>{pageData.title}</h1>
          <p className="date">Published: May 30, 2023</p>
        </header>
        <div className="content">
          <p>
            <BlockContent
              blocks={pageData.body}
              projectI="40rf11bs"
              dataset="production"
            />
          </p>
        </div>
      </>
    </div>
  );
};

export default CourseDetails;
