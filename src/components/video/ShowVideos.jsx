import React, { useState, useEffect } from 'react';
import '../../css/videolist.css';
import { getvideos } from '../../services/addvideos';
import { deletevideo } from '../../services/addvideos';
import Dashboard from '../../dashboard';
const ShowVideos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const fetchedVideos = await getvideos();
        setVideos(fetchedVideos);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, []);

  const handleDelete = async (id) => {
    console.log('=======' + id);
    try {
      // Show confirmation alert before deleting
      const confirmDelete = window.confirm('Are you sure you want to delete this video?');
      if (confirmDelete) {
        // Delete the video and update the list
        await deletevideo(id);
        setVideos(videos.filter((video) => video._id !== id));
      }
    } catch (error) {
      console.error('Error deleting video:', error);
    }
  };

  return (
    <div>
      <Dashboard/>
    <div className="show-videos">
      <h2>Video List</h2>
      <ul className="video-list">
        {videos?.map((video, index) => (
          <li key={index} className="video-item">
            <h3>{video?.videoname}</h3>
            <p>Category: {video?.videoCategorey}</p>
            <a href={video?.videourl} target="_blank" rel="noopener noreferrer">Watch Video</a>
            {/* Delete button */}
            <button className="delete-button" onClick={() => handleDelete(video._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default ShowVideos;
