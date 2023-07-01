import React from 'react';
import './Client.css';

const Client = () => {
  const handleReadMore1Click = () => {
    window.location.href = 'https://www.pnbindia.in';
  };
  const handleReadMore2Click = () => {
    window.location.href = 'https://bits-pilani.ac.in';
  };

  return (
    <div className="client-container">
      <div className="client-header">
        <h1>Our Clients</h1>
      </div>
      <div className="client-list">
        <div className="client-card">
          <img src="pnb.png" alt="Client 1" className="client-card-image" />
          <div className="client-card-content">
            <p>PNB | OBC | UBI</p>
            <h2>Public Sector Bank - PNB | OBC | UBI</h2>
            <p>
              Delhi - Gurgaon
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button className="read-more-button" onClick={handleReadMore1Click}>
              Read More
            </button>
          </div>
        </div>
        <div className="client-card">
          <img src="birla.png" alt="Client 2" className="client-card-image" />
          <div className="client-card-content">
            <p>Mentor for MBA FinTech</p>
            <h2>Birla Institute of Technology and Science</h2>
            <p>
              Pilani
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button className="read-more-button" onClick={handleReadMore2Click}>Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client;
