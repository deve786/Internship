import React, { useState } from 'react';
import axios from 'axios';
import config from "../configUrl";
const AdminPanel = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const backendURL = config.backendURL;
  async function handleSubmit(event) {
    event.preventDefault();

    const newCourse = {
      title,
      description,
    };

    try {
      const response = await axios.post('http://localhost:8080/api/courses', newCourse);
      console.log('Course created:', response.data);
      // Reset form fields
      setTitle('');
      setDescription('');
    } catch (error) {
      console.log('Error creating course:', error);
    }
  }
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <p>Welcome to the admin dashboard!</p>
      <div>
      <h2>Add Course</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <label>Description:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
        <button type="submit">Add Course</button>
      </form>
    </div>
    </div>
  );
}

export default AdminPanel;
