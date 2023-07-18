// VideoDisplay.js

import React from "react";


const Video = ({ productData }) => {
  if (!productData) {
    return <div>Loading...</div>;
  }

  const { name, description, video } = productData;

  return (
    <div>
      <h1>{name}</h1>
      <p>{description}</p>
      <h2>Video Player</h2>
      <video controls>
        <source src={`data:${video.contentType};base64,${video.data}`} />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;
