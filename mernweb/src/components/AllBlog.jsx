import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import client from "../createClient";

const AllBlog = () => {
  const [post, setPost] = useState([]);
  const cardsRef = useRef([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type=='post']{
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
      .then((data) => setPost(data))
      .catch(console.error);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      cardsRef.current.forEach((card, index) => {
        const cardPosition = card.getBoundingClientRect().top;
        const scrollPosition = window.pageYOffset;
        const speed = 0.4; // Adjust the parallax effect speed here
        const translateY = (cardPosition - scrollPosition) * speed;

        // Apply the translation with a limit to prevent excessive scrolling
        const maxTranslation = 50; // Adjust the maximum translation value here
        const clampedTranslateY = Math.max(
          -maxTranslation,
          Math.min(maxTranslation, translateY)
        );

        card.style.transform = `translateY(${clampedTranslateY}px)`;
        card.style.transition = "transform 0.3s ease-out"; // Add a transition effect
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Set initial opacity to 0 and animate it to 1 after a short delay
    const delay = 300; // Delay in milliseconds
    cardsRef.current.forEach((card, index) => {
      card.style.opacity = 0;
      setTimeout(() => {
        card.style.opacity = 1;
      }, index * delay);
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const containerPosition = cardsRef.current[0]?.getBoundingClientRect().top;
      const scrollPosition = window.pageYOffset;

      if (containerPosition && scrollPosition > containerPosition - window.innerHeight / 2) {
        cardsRef.current.forEach((card, index) => {
          const delay = 100; // Delay in milliseconds
          card.style.transition = `transform 0.5s ease ${index * delay}ms`;
          card.style.transform = "translateY(0)";
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <section id="allblog">
        <div className="row mt-1">
          {post.map((post, index) => (
            <div
              className="col-md-4 allblog"
              key={post.slug.current}
              ref={(el) => (cardsRef.current[index] = el)}
              style={{
                opacity: 1, // Start with opacity 1
                transform: "translateY(100px)", // Start with initial translateY value
              }}
            >
              <div className="card p-3 blog-card">
                <div className="card-image">
                  <img
                    src={post.mainImage.asset.url}
                    className="card-img-top cardImg"
                    alt={post.title}
                  />
                </div>
                <div className="card-body text-center card-desc">
                  <h5 className="card-title mb-3 fs-4 fw-bold">{post.title}</h5>
                  <Link
                    to={`/blog/${post.slug.current}`}
                    className="btnHvr py-2 px-6 rounded shadow text-white bg-black hover:bg-transparent border-2 border-black transition-all duration-500 hover:text-black font-bold"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <br />
        <br />
      </section>
    </div>
  );
};

export default AllBlog;
