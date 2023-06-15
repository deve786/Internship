import React, { useEffect, useState } from "react";
import "./Industry.css";
import client from "../createClient";
import BlockContent from "@sanity/block-content-to-react";
const Industry = () => {
  const [industry, setIndustry] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "industry"]{
          mainImage{
            asset ->{
                _id,
                url
            },
          },
          body,slug, title,
        }`
      )
      .then((data) => setIndustry(data))
      .catch(console.error);
  }, []);

  console.log(industry);
  return (
    <div className="article">
      {industry.map((industry) => (
        <div>
          <section className="banner" key={industry.slug.current}>
            <img src={industry.mainImage.asset.url} alt={industry.title} />
          </section>
          <header>
            <h1>{industry}</h1>
            <img src={industry.mainImage.asset.url} alt={industry.title} />
          </header>
          <div className="content">
            <BlockContent
              blocks={industry.body}
              projectI="40rf11bs"
              dataset="production"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Industry;
