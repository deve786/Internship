import React, { useState } from 'react';
import './Slider.css'; // Import your CSS file for styling
import { Carousel } from 'react-bootstrap';

const Slider = ({ images }) => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  

  return (
    
    <Carousel activeIndex={index} onSelect={handleSelect} className='about-carousel'>
      
        

        <Carousel.Item >
          <div className="overlay">
          </div>
          <img
            className="d-block w-100"
            src="logo192.png"
            alt="images"
          />
          <Carousel.Caption>
            <h3>image1</h3>
            <p>wsedrftgyhujikoijhgf</p>
          </Carousel.Caption>
        </Carousel.Item>    
        <Carousel.Item >
          <div className="overlay">
          </div>
          <img
            className="d-block w-100"
            src="image/ image.jpg"
            alt="images"
          />
          <Carousel.Caption>
            <h3>image1</h3>
            <p>wsedrftgyhujikoijhgf</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item >
          <div className="overlay">
          </div>
          <img
            className="d-block w-100"
            src="image.jpg"
            alt="images"
          />
          <Carousel.Caption>
            <h3>image1</h3>
            <p>wsedrftgyhujikoijhgf</p>
          </Carousel.Caption>
        </Carousel.Item>


      
    </Carousel>
  );
};

export default Slider;