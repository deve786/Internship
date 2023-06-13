import React, { useState, useEffect } from "react";
import "./Article.css";
import { useParams } from "react-router-dom";
import client from "../createClient";
import BlockContent from "@sanity/block-content-to-react";

const Article = () => {
  const { slug } = useParams();
  const [pageData, setPageData] = useState({});

  useEffect(() => {
    client
      .fetch(
        `*[slug.current=="${slug}"]{
          mainImage{
            asset ->{
              _id,
              url
            }
          },
          body,
          slug,
          title
        }`
      )
      .then((data) => setPageData(data[0]))
      .catch((err) => console.error(err));
  }, [slug]);

  if (!pageData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="article">
      <section className="banner">
        {pageData.mainImage && (
          <img src={pageData.mainImage.asset.url} alt={pageData.title} />
        )}
      </section>
      <header>
        <h1>{pageData.title}</h1>
      </header>
      <div className="content">
        <BlockContent blocks={pageData.body} />
      </div>
    </div>
  );
};

export default Article;