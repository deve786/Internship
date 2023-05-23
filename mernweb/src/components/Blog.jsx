import React, { useEffect, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import client from "../client";


const Blog = () => {
  const [post, setPost] = useState([]);
  const navigate=useNavigate();
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
      <section id="blog">
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
                <div className="col-md-4" >
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
                          className="py-2 px-6 rounded shadow text-white bg-black hover:bg-transparent border-2 border-black transition-all duration-500 hover:text-black font-bold"
                        >
                          Read More
                        </Link>
                      </div>
                    {/* <article key={postSlice.slug.current}>
                      
                    </article> */}
                  </div>
                </div>
              ))}
            
            {/* <div className="col-md-4">
                            <div class="card p-3">

                                <img src="blog1.jpg" className="card-img-top" alt="Blog" />
                                <div class="card-body text-center">
                                    <h5 class="card-title mb-3 fs-4 fw-bold">Blog 1</h5>
                                    <p class="card-text lead">
                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                                    </p>
                                    <a href="/" className="btn btn-primary">Read More</a>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="card p-3">
                                <img src="blog2.jpg" className="card-img-top" alt="Blog" />
                                <div class="card-body text-center">
                                    <h5 class="card-title mb-3 fs-4 fw-bold">Blog 2</h5>
                                    <p class="card-text lead">
                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                                    </p>
                                    <a href="/" className="btn btn-primary">Read More</a>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="card p-3">
                                <img src="blog3.jpg" className="card-img-top" alt="Blog" />
                                <div class="card-body text-center">
                                    <h5 class="card-title mb-3 fs-4 fw-bold">Blog 3</h5>
                                    <p class="card-text lead">
                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                                    </p>
                                    <a href="/" className="btn btn-primary">Read More</a>

                                </div>

                            </div>
                        </div> */}
          </div>
          <br />
          <div className="buttons d-flex justify-content-center row-md-3 center">
            <button onClick={()=>navigate("/allblog")} className="btn btn-outline-primary rounded-pill px-4 py-2 ms-2" >
              Show All
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
