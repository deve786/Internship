import React, { useEffect, useState } from 'react';
import './Industry.css';
import client from "../client";
import BlockContent from "@sanity/block-content-to-react";
const Industry = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [industry, setIndustry] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "industry"]{
          body,slug, title,mainImage{
                asset ->{
                    _id,
                    url
                },
              },
        }`
      )
      .then((data) => setIndustry(data))
      .catch(console.error);
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.pageYOffset / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  


console.log(industry)
  return (
    <div className="article">
    {industry.map((industry) => (
      <>
        <section className="banner" key={industry.slug.current}>
          <img src={industry.mainImage.asset.url} alt="Banner" />
        </section>
        <header>
          <h1>{industry.title}</h1>
          
        </header>
        <div className="content">
          <p>
            <BlockContent
              blocks={industry.body}
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

export default Industry;
