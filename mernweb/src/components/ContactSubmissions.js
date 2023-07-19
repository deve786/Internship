// frontend/src/ContactSubmissions.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ContactSubmissions.css'; // Import the CSS file for styling

const ContactSubmissions = () => {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    // Fetch contact form submissions from the backend when the component mounts
    axios
      .get('http://localhost:8080/api/v1/auth/contact')
      .then((response) => setSubmissions(response.data))
      .catch((error) => console.error('Error fetching submissions:', error));
  }, []);

  return (
    <div>
      <h1>Contact Form Submissions</h1>
      <table className="submission-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th>Submitted At</th>
          </tr>
        </thead>
        <tbody>
          {submissions.map((submission) => (
            <tr key={submission._id}>
              <td>{submission.name}</td>
              <td>{submission.email}</td>
              <td>{submission.message}</td>
              <td>{new Date(submission.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactSubmissions;
