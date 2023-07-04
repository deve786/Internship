import React, { useState } from 'react';
import axios from 'axios';
import './CourseUpload.css';
import config from "../configUrl";
const CourseUpload = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [video, setVideo] = useState(null);
  const backendURL = config.backendURL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('description', description);
      formData.append('category', category);
      formData.append('video', video);

      const response = await axios.post(`${backendURL}/api/courses`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log(response.data);
      // Handle success, e.g., show success message or redirect
    } catch (error) {
      console.error(error.response.data.error);
      // Handle error, e.g., show error message
    }
  };

  return (
    <div>
      <h2>Upload Course</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div>
          <label>Category:</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div>
          <label>Video:</label>
          <input
            type="file"
            accept="video/*"
            onChange={(e) => setVideo(e.target.files[0])}
          />
        </div>
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default CourseUpload;
