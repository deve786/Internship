import React from "react";
import {  useNavigate } from "react-router-dom";


const Services = () => {
    const navigate = useNavigate();

    const redirectToAllBlog = () => {
        //Redirect to the home page
        navigate("/allblog");
    };
    return (
        <div>
            <section id="blog">
                <div className="container my-5 py-5">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="fs-5 text-center mb-0">Our Blogs</h3>
                            <h1 className="display-6 text-center mb-4">Our <b>Awesome</b> Blogs</h1>
                            <hr className="w-25 mx-auto" />
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-4">
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
                        </div>
                    </div>
                    <br />
                    <div className="buttons d-flex justify-content-center row-md-3 center">
                        <button onClick={redirectToAllBlog} className="btn btn-outline-primary rounded-pill px-4 py-2 ms-2">Show All</button>

                    </div>

                </div>
                

            </section>
        </div>
    );
}

export default Services;






