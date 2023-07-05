import React, { useEffect, useState } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { useAuth } from '../context/auth';

const CoursePage = () => {
  const { courseId, videoId } = useParams();
  const { auth } = useAuth();
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');

//   useEffect(() => {
//     // Check if the user is authorized to access the video
//     // You can make an API request to validate the user's enrollment for the course and video
//     // Based on the response, set the `isAuthorized` state to true or false
//     const checkAuthorization = async () => {
//       try {
//         // Make an API request to validate the user's enrollment
//         const response = await fetch(`/api/check-enrollment/${courseId}/${videoId}`, {
//           headers: {
//             Authorization: `Bearer ${auth.token}`, // Pass the user's authentication token
//           },
//         });
//         if (response.ok) {
//           setIsAuthorized(true);
//           const videoData = await response.json();
//           setVideoUrl(videoData.videoUrl);
//         } else {
//           setIsAuthorized(false);
//         }
//       } catch (error) {
//         setIsAuthorized(false);
//       }
//     };

//     checkAuthorization();
//   }, [auth.token, courseId, videoId]);

  // Redirect the user if not authorized to access the video
//   if (!auth.isAuthenticated || !isAuthorized) {
//     return <Redirect to="/login" />;
//   }

  // Render the video player component with the fetched video details
  return (
    <div>
      <h1>Watch Video</h1>
      <h2>Course ID: {courseId}</h2>
      <h2>Video ID: {videoId}</h2>
      <video controls>
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default CoursePage;
