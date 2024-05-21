
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setName] = useState('');
  const [password, setPassword] = useState('');
  const [tokenExists, setTokenExists] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  

  useEffect(() => {
    // console.log("home");
    const fetchTokenData = async () => {
      try {
        // Get the token from local storage
        const token = localStorage.getItem("token");
        if (!token) {
          console.log("Token not found in local storage");
          return;
        }       
  
        const config = {
          headers: {
            Authorization: `Bearer ${token}`
          }
        };
        // const atoken = localStorage.getItem("atoken");
        // const aconfig = {
        //   headers: {
        //     Authorization: `Bearer ${atoken}`
        //   }
        // };
        // const response2 = await axios.get(`${process.env.REACT_APP_BACKEND}/api/auth/getToken`, aconfig);
        // console.log(response2.data,"-------------------------");
   
        const response = await axios.get(`${process.env.REACT_APP_BACKEND}/api/auth/getToken`, config);
        // console.log(response.data);
        const myuser_id = localStorage.getItem("user_id");
        if(response.data._id === myuser_id)
        {
          if(response.data.email==="admin@gmail.com"){
            navigate("/manager")
            return;
          }
          navigate("/home");
          return;
        }
        alert("Invalid User");
        localStorage.removeItem("token");
        localStorage.removeItem("user_id");
        
  
      } catch (error) {
        console.error('Error fetching data:');
        if (error.response && error.response.status === 401) {
          alert("Token is invalid");
          localStorage.removeItem("token");
          localStorage.removeItem("user_id");
          navigate("/");
        }
      }
    };
  
    fetchTokenData();
  }, [navigate]);
  
  
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND}/api/auth/login`, {
        email,
        password,
      });

      // console.log(response.data); // Success message or handle as needed

      if (response.status === 200 && response.data.redirect) {
        localStorage.setItem("token", response.data.JWTtoken);
        localStorage.setItem("user_id", response.data.user_id);
        if (email === 'admin@gmail.com') {
          // alert("Admin Login Success")
          navigate('/manager');
          return;
        }
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
            <h5 className="login-link">If you're not registered, <Link to="/register">click here</Link></h5>
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;
