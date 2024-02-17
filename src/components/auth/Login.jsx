// Login.js

import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import authService from '../../services/authService';
import Dashboard from '../../dashboard';
import '../../css/login.css'; // Import the CSS file
import { Routes,Route } from 'react-router-dom';
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); // State variable to manage loading state
   const navigate=useNavigate();
  
   
   const handlleLogin = async (e) => {
    e.preventDefault();
    console.log("chlaa")
    try {
      const res = await authService({username,password});
      navigate('/Dashboard')
      alert('Login Successful')
      
      console.log(res);
    } catch (error) {
      console.error(error);
      alert('Enter Correct Password & Username')
    }
  };

  return (
    <div className="login-container">
      <form className="login-form">
        <h2 className="login-heading">Login</h2>
        <input
          className="input-field"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="input-field"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="login-button" onClick={handlleLogin}>
          Login
        </button>
      </form>
    
    </div>
  );
};

export default Login;
