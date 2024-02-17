import React, { useState, useEffect } from 'react';
import '../../css/addvideo.css';
import { addvideos } from '../../services/addvideos';
import { categoreylist } from '../../services/addcategorey';
import Dashboard from '../../dashboard';
const AddVideo = () => {
  const [categorey, setCategories] = useState([]);
  const [videoData, setVideoData] = useState({
    videoUrl: '',
    videoName: '',
    videoCategory: ''
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await categoreylist();
        setCategories(response);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const addVideo = async () => {
    try {
      const res = await addvideos(videoData);
      alert('Video added successfully ')
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setVideoData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addVideo();
    console.log("Video Data:", videoData);
  };

  return (
    <div>
        <Dashboard/>
    <div className="add-video">
     
      <h2>Add Video</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className='label' htmlFor="videoUrl">Video URL:</label>
          <input type="text" id="videoUrl" name="videoUrl" value={videoData.videoUrl} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label className='label' htmlFor="videoName">Video Name:</label>
          <input type="text" id="videoName" name="videoName" value={videoData.videoName} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label className='label' htmlFor="videoCategory">Video Category:</label>
          <select id="videoCategory" name="videoCategory" value={videoData.videoCategory} onChange={handleInputChange}>
            <option value="">Select category...</option>
            {categorey.map(cat => (
              <option key={cat._id} value={cat.categorey}>{cat.categorey}</option>
            ))}
          </select>
        </div>
        <button type="submit">Add Video</button>
      </form>
    </div>
    </div>
  );
};

export default AddVideo;
