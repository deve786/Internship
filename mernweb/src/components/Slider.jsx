import {React,useEffect, useState } from 'react';
import './Slider.css'; // Import your CSS file for styling
import { Carousel } from 'react-bootstrap';
import client from "../createClient";


const Slider = ({ images }) => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  
  const [banner, setBanner] = useState([]);
  useEffect(() => {
    client
      .fetch(
        `*[_type=='about']{
          title,
         mainImage{
            asset ->{
              _id,
              url
            },
            alt
          }
        }`
      )
      .then((data) => setBanner(data))
      .catch(console.error);
  }, []);

  return (
    
    <Carousel activeIndex={index} onSelect={handleSelect} className='about-carousel'>
      
      {banner.map((banner, index) => (

        <Carousel.Item >
          <div className="overlay">
          </div>
          <img
            className="d-block w-100"
            src={banner.mainImage.asset.url}
            alt="images"
          />
          <Carousel.Caption>
            <h3>{banner.title}</h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>    
        
      ))}

      
    </Carousel>
  );
};

export default Slider;