import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AddVideo from '../components/video/AddVieo';
import AddCategory from '../components/video/AddCategorey';
import ShowVideos from '../components/video/ShowVideos';
import Login from '../components/auth/Login';
import Dashboard from '../dashboard';
import '../css/navbar.css';


const Navigation = () => {
  const DefaultRoute = () => {
    return (
      <div>
        <h2>404 - Not Found</h2>
        <p>The page you are looking for does not exist.</p>
      </div>
    );
  };

  return (
    <div>
      {/* <AppNavigation /> Render the navigation component */}
      <Routes>
        {/* Redirect to login page by default */}
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" index element={<Login />} /> 
        <Route path="/dashboard/add-video" element={<AddVideo />} />
        <Route path="/dashboard/add-category" element={<AddCategory />} />
        <Route path="/dashboard/show-videos" element={<ShowVideos />} />
        <Route path="/dashboard" element={<Dashboard />} /> 
        <Route path="*" element={<DefaultRoute />} /> 
      </Routes>
    </div>
  );
};

export default Navigation;
