import React from "react";
// import "./Article.css"; // Import the CSS file for Article component
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import client from "../createClient";
import BlockContent from "@sanity/block-content-to-react";
import Courses from "./Courses";

const CourseDetails = () => {
  const { slug } = useParams();
  const [pageData, setPageData] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type=='courses']{
          title,
          slug,body,mainImage{
              asset ->{
                  _id,
                  url
              },
              alt
          }
      }`
      )
      .then((data) => setPageData(data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="article1">
      {pageData.map((pageData) => (
        <div key={pageData.slug.current}>
        <div className="crd">
          <div class="card p-3 crds">

            <img src="blog1.jpg" className="card-img-top" alt={pageData.title} />
            <div class="card-body text-center">
              <h5 class="card-title mb-3 fs-4 fw-bold">{pageData.title}</h5>
              <p class="card-text lead">
                <BlockContent
                  blocks={pageData.body}
                  projectI="40rf11bs"
                  dataset="production"
                />
              </p>
              <a href="/" className="btn btn-primary">Read More</a>

            </div>
          </div>
        </div></div>
      ))}





    </div>
  );
};

export default CourseDetails;
