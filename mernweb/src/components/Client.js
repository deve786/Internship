import React from 'react';
import './Client.css';

const Client = () => {
  return (
    <div className="client-container">
      <div className="client-header">
        <h1>Our Clients</h1>
      </div>
      <div className="client-list">
        <div className="client-card">
          <img src="client1.jpg" alt="Client 1" className="client-card-image" />
          <div className="client-card-content">
            <h2>Client 1</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button className="read-more-button">Read More</button>
          </div>
        </div>
        <div className="client-card">
          <img src="client2.jpg" alt="Client 2" className="client-card-image" />
          <div className="client-card-content">
            <h2>Client 2</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button className="read-more-button">Read More</button>
          </div>
        </div>
        <div className="client-card">
          <img src="client3.jpg" alt="Client 3" className="client-card-image" />
          <div className="client-card-content">
            <h2>Client 3</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button className="read-more-button">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client;
