
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [validationErrors, setValidationErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND}/api/auth/register`, {
        name,
        password,
        email,
      });
      alert("Registration Successfull");
      console.log(response.data); 
      navigate('/');
    } catch (error) {
      alert("Registration Failure");
      if (error.response && error.response.data) {
        const validationErrors = Object.values(error.response.data.error.errors).map(error => error.message);
        setValidationErrors(validationErrors);
      } else {
        
        console.error('Registration failed:', error.message);
      }
    }
  };

  return (
    <div className="logreg-background">
      <div className="register-container">
        <h1>Register</h1>
        {validationErrors.length > 0 && (
          <div className="reg-validation-errors">
            {validationErrors.map((error, index) => (
              <p key={index} className="reg-error-message">{error}</p>
            ))}
          </div>
        )}
        <form onSubmit={handleSubmit} className="register-form">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="register-input"
          />
          <br />
          <br />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="register-input"
          />
          <br />
          <br />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="register-input"
          />
          <br />
          <br />
          <button type="submit" className="register-button">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
