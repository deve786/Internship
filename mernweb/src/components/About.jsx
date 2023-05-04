import React from "react";

const About = () => {
    return(
        <div>
            <section id="about">
                <div className="container my-5 py-5">
                    <div className="row">
                        <div className="col-md-6">
                            <img src="about.png" alt="About" className="w-75 mt-5" />
                        </div>
                        <div className="col-md-6">
                           <h3 className="fs-5 mb-0">About</h3>
                           <h1 className="display-6 mb-2">Who <b>We</b> Are</h1> 
                           <hr className="w-50" />
                           <p className="lead mb-4">
                            Lorem ipsum, dolar sit amet consectetur adipisicing elit. possimus, inventore voluptates voluptatibus sed doloremque a voluptate fuga in error adipisci autem sint accusamus minima iste officia reiciendis cupiditate eum tempora perferendis quis assumenda? quasi repellat, incidunt at natus quia hic ut officiis, optio id molestiae explicabo vero eos, numquam doloremaque.
                            Lorem ipsum, dolar sit amet consectetur adipisicing elit. possimus, inventore voluptates voluptatibus sed doloremque a voluptate fuga in error adipisci autem sint accusamus minima iste officia reiciendis cupiditate eum tempora perferendis quis assumenda? quasi repellat, incidunt at natus quia hic ut officiis, optio id molestiae explicabo vero eos, numquam doloremaque.
                           </p>
                           <button className="btn btn-primary rounded-pill px-4 py-2">Get Started</button>
                           <button className="btn btn-outline-primary rounded-pill px-4 py-2 ms-2">Contact Us</button>
                        </div>
                    </div>
                </div>
            </section>   
        </div>
        
    );
}

export default About;