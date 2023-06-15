import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import client from "../createClient";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    client
      .fetch(
        `*[_type=='post']{
          title,
          slug,
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
      .then((data) => setPosts(data))
      .catch(console.error);
  }, []);

  let postSlice = posts.slice(0, 3);

  return (
    <div>
      <section id="blog" className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-4">
            <h3 className="fs-4 text-muted">Our Blogs</h3>
            <h1 className="display-5">Explore Our Awesome Blogs</h1>
            <hr className="w-25 mx-auto mt-4" />
          </div>
          <div className="row">
            {postSlice.map((post, index) => (
              <InView key={post.slug.current} triggerOnce>
                {({ inView, ref }) => (
                  <div className="col-md-4 mb-4" ref={ref}>
                    <motion.div
                      className="card p-3 blog-card h-100 border-0 shadow"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                    >
                      <motion.img
                        src={post.mainImage.asset.url}
                        className="card-img-top img-fluid rounded mb-3"
                        alt={post.title}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      />
                      <div className="card-body text-center">
                        <motion.h5
                          className="card-title mb-3 fs-5 fw-bold"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: inView ? 1 : 0 }}
                          transition={{ duration: 0.4, delay: index * 0.2 + 0.2 }}
                        >
                          {post.title}
                        </motion.h5>
                        <Link
                          to={`/blog/${post.slug.current}`}
                          className="btn btn-primary rounded-pill py-2 px-4 fw-bold"
                        >
                          Read More
                        </Link>
                      </div>
                    </motion.div>
                  </div>
                )}
              </InView>
            ))}
          </div>
          <div className="row justify-content-center mt-4">
            <motion.button
              onClick={() => navigate("/allblog")}
              className="btn btn-outline-primary rounded-pill px-4 py-2"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              View All Blogs
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
