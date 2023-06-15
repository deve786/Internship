import React, { useEffect, useState } from 'react';
import './Industry.css';
import client from '../createClient';
import BlockContent from '@sanity/block-content-to-react';

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
          body,
          slug,
          title,
        }`
      )
      .then((data) => setIndustry(data))
      .catch(console.error);
  }, []);

  return (
    <div className="industry-container">
      {industry.map((industry) => (
        <div className="industry-item" key={industry.slug.current}>
          <section className="banner">
            <img src={industry.mainImage.asset.url} alt={industry.title} />
          </section>
          <div className="content">
            <header>
              <h1>{industry.title}</h1>
            </header>
            <BlockContent
              blocks={industry.body}
              projectId="40rf11bs"
              dataset="production"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Industry;
