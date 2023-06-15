import React, { useEffect, useState } from 'react';
import './CareerHome.css';

const CareerHome = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (scrollTop / windowHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <header className='header'>
        <h1>Welcome to Our Careers Page</h1>
      </header>

      <section className="main-content">
        <div className="container">
          <div className="company-description">
            <h2>About Our Company</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius rhoncus lacus, et fringilla eros finibus id.
              Fusce ut volutpat est, in tincidunt sem. Suspendisse sed leo lectus. Integer varius turpis non orci tristique, et accumsan risus commodo.
              Nulla tincidunt dui ut lectus aliquet, at gravida urna venenatis. Sed et iaculis turpis, id rutrum nulla. Suspendisse tincidunt tortor purus, ut hendrerit tellus posuere in.
            </p>
          </div>

          <div className="image-container">
            <img src="./carrer1.jpg" alt="Image 1" />
            <img src="./carrer2.jpg" alt="Image 2" />
            {/* Additional images */}
          </div>

          <div className="content-data">
            <h2>Our Values</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius rhoncus lacus, et fringilla eros finibus id.
              Fusce ut volutpat est, in tincidunt sem. Suspendisse sed leo lectus. Integer varius turpis non orci tristique, et accumsan risus commodo.
              Nulla tincidunt dui ut lectus aliquet, at gravida urna venenatis. Sed et iaculis turpis, id rutrum nulla. Suspendisse tincidunt tortor purus, ut hendrerit tellus posuere in.
            </p>
          </div>

          <div className="content-data">
            <h2>Employee Benefits</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius rhoncus lacus, et fringilla eros finibus id.
              Fusce ut volutpat est, in tincidunt sem. Suspendisse sed leo lectus. Integer varius turpis non orci tristique, et accumsan risus commodo.
              Nulla tincidunt dui ut lectus aliquet, at gravida urna venenatis. Sed et iaculis turpis, id rutrum nulla. Suspendisse tincidunt tortor purus, ut hendrerit tellus posuere in.
            </p>
          </div>
        </div>
      </section>

      <div className="join-us">
        <button>Join Us</button>
      </div>

      <footer>
        <div className="progress-bar" style={{ width: `${scrollProgress}%` }}></div>
      </footer>
    </div>
  );
};

export default CareerHome;