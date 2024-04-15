import React from 'react';
import { Link } from 'react-router-dom';

function PublicHome() {
  return ( 
    <>
      <div className="container">
        <h1 className='publichome-head'>Welcome to CineBite</h1>
        <p className="intro">Your one-stop destination for movies and delicious food!</p>
        <div className="sections">
          <div className="section">
            <h2>Cinema</h2>
            <p>Experience the magic of movies with our latest releases and comfortable theaters.</p>
          </div>
          <div className="section">
            <h2>Food</h2>
            <p>Indulge in a variety of tasty treats and refreshments while enjoying your favorite movie.</p>
          </div>
        </div>
        <nav>
          <ul className='publichome-links'>
            <li>
              <Link to="/login">User Login</Link>
            </li>
            <li>
              <Link to="/register">User Register</Link>
            </li>
            <li>
              <Link to="/adminlogin">Admin Login</Link>
            </li>
            <li>
              <Link to="/adminregister">Admin Register</Link>
            </li>
            <li>
              <Link to="/manager">Manager</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default PublicHome;
