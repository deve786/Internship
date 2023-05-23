import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import client from "../client";

const AllBlog = () => {
  const [post, setPost] = useState([]);

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

  return (
    <div>
      <section id="allblog">
        <div className="row mt-1">
          {post.map((post) => (
            <div className="col-md-4 allblog" key={post.slug.current}>
            <div className="card p-3 blog-card">

                <img src={post.mainImage.asset.url} className="card-img-top"  alt={post.title} />
                <div className="card-body text-center card-desc">
                    <h5 className="card-title mb-3 fs-4 fw-bold">{post.title}</h5>
                    {/* <p className="card-text lead">
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </p> */}
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
