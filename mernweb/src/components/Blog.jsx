import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import client from "../client";

const Blog = () => {
  const [post, setPost] = useState([]);
  const navigate = useNavigate();
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

  let postSlice = post.slice(0, 3);
  console.log(postSlice);
  return (
    <div>
      {postSlice.map((postSlice) => (
      <div className="card" key={postSlice.id}>
        <img src={postSlice.mainImage.asset.url}  alt="Card" className="card-image" />
        <div className="card-content">
          <h3 className="card-title">{postSlice.title}</h3>
          {/* <p className="card-description">{description}</p> */}
        </div>
        
      </div>))}
      {/* <section id="blog">
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-12">
              <h3 className="fs-5 text-center mb-0">Our Blogs</h3>
              <h1 className="display-6 text-center mb-4">
                Our <b>Awesome</b> Blogs
              </h1>
              <hr className="w-25 mx-auto" />
            </div>
          </div>
          <div className="row mt-5">
            {postSlice.map((postSlice) => (
              <div className="col-md-4" key={post.id}>
                <div className="card p-3 blog-card">
                  <img
                    src={postSlice.mainImage.asset.url}
                    className="card-img-top imgg"
                    alt={postSlice.title}
                  />
                  <div className="card-body text-center card-desc">
                    <h5 className="card-title mb-3 fs-4 fw-bold">
                      {postSlice.title}
                    </h5>

                    <Link
                      to={`/blog/${postSlice.slug.current}`}
                      className=" btnHvr py-2 px-6 rounded shadow text-white bg-black hover:bg-transparent border-2 border-black transition-all duration-500 hover:text-black font-bold"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <br />
          <div className="buttons d-flex justify-content-center row-md-3 center">
            <button
              onClick={() => navigate("/allblog")}
              className="btn btn-outline-primary rounded-pill px-4 py-2 ms-2"
            >
              Show All
            </button>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Blog;
