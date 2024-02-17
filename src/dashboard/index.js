// Dashboard.js

import React from 'react';
import { Link, Route, Routes ,useNavigate} from 'react-router-dom';
import AddVideo from    '../../src/components/video/AddVieo'; // Corrected typo in file name
import AddCategory from '../../src/components/video/AddCategorey'; // Corrected typo in file name
import ShowVideos from '../../src/components/video/ShowVideos';
import Login from '../../src/components/auth/Login';
import '../css/navbar.css';
const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/dashboard/add-video">Add Video</Link>
          </li>
          <li>
            <Link to="/dashboard/add-category">Add Category</Link>
          </li>
          <li>
            <Link to="/dashboard/show-videos">Videos List</Link>
          </li>
          <li>
            <button className="logout-button" onClick={handleLogout}>Logout</button>
          </li>
        </ul>
      </nav>

    </div>
  );
};
export default Dashboard;
