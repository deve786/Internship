import React, { useState, useEffect } from "react";
import axios from "axios";
import Video from "./Video";

const VideoPage = () => {
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const productId = "product-id"; // Replace this with the actual product ID or slug
        const response = await axios.get(`http://localhost:8080/api/v1/product/64b657f40990cd01aee8a68b`);
        setProductData(response.data);
        console.log("resss",response.data)
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchProductData();
  }, []);

  return (
    <div>
      <h1>Video Page</h1>
      <Video productData={productData} />
    </div>
  );
};

export default VideoPage;
