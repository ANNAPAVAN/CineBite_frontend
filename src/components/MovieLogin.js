
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const MovieLogin = () => {
  const [email, setName] = useState('');
  const [password, setPassword] = useState('');
  const [tokenExists, setTokenExists] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();


  
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND}/api/auth/movieadminlogin`, {
        email,
        password,
      });

      // console.log(response.data); // Success message or handle as needed

      if (response.status === 200 && response.data.redirect) {
        localStorage.setItem("token", response.data.JWTtoken);
        localStorage.setItem("user_id", response.data.user_id);
        

        navigate(response.data.redirect);
      }
    } catch (error) {
      console.error('Login failed:', error.response.data.message);
      alert("Login Failure")
    }
  };

  return (
    <div className="logreg-background">
      {tokenExists ? null : ( // Conditionally render the login form 
        <div className="login-container mt-5">
          <h1 className="login-title">Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="text"
                className="login-input"
                id="email"
                placeholder="Enter your name"
                value={email}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="login-input"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="login-button">Login</button>
            <br />
            <h5 className="login-link">If you're not registered, <Link to="/adminregister">click here</Link></h5>
          </form>
        </div>
      )}
    </div>
  );
};

export default MovieLogin;
