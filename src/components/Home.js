import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navbar_ from './Navbar_';

function Home() {
  return (
    <>
      <Navbar_ className="home-navbar" />
      <div className="container">
        <h1 className="home-head">Welcome to Our Platform!</h1>
        <h5>
          Welcome to our platform where you can explore various sections to satisfy your interests and preferences.
        </h5>
        <div className="home-section">
          <h2><strong>Food</strong></h2>
          <p>
            In our Food section, you can discover a variety of delicious dishes from different cuisines. Each food item is accompanied by detailed information including an image, the name of the restaurant or hotel, and the price. Whether you're craving savory or sweet, you'll find something to tantalize your taste buds.
          </p>
        </div>
        <div className="home-section">
          <h2><strong>Movies</strong></h2>
          <p>
            Dive into the world of cinema with our Movies section. Here, you'll find a collection of the latest movie releases, complete with vibrant posters, ticket prices, and information about nearby theaters. Whether you're a film buff or just looking for some entertainment, you'll discover everything you need to plan your next movie night.
          </p>
        </div>
        <div className="home-section">
          <h2><strong>Sports</strong></h2>
          <p>
            Are you a sports enthusiast? Explore our Sports section to stay updated on the latest sports news, scores, and highlights. Simply enter the name of your favorite sport, and we'll fetch real-time data for you. Whether it's football, basketball, cricket, or tennis, we've got you covered.
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
