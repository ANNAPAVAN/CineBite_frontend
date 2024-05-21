// Movie.js
import React, { useEffect, useState } from 'react';
import MovieAdminNav from './MovieAdminNav';
import Navbar_ from './Navbar_';

function Movie() {
  const [cats, setCats] = useState([
    {
      image: '',
      price: '',
      theatre: '',
      movie:'',
      area:'',
      showtime:'',
    },
  ]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND}/api/auth/getmovie`)
      .then((res) => res.json())
      .then((jsonRes) => setCats(jsonRes));
  }, []);


  return (
    <>
      <Navbar_ />
      <div >
      <br></br>
      <br></br>
      <br></br>
      <h1 className="food-hotel-head">MOVIE PAGE</h1>
        <div className="movie-container">
          {cats.map((cat) => (
            <div key={cat._id} className="movie-item">
              <img src={cat.image} alt="Movie" className="movie-image" />
              <h5 className="movie-price">Price: <strong>₹ {cat.price}</strong></h5> 
              <h5 className="theatre-price">Movie: <strong>{cat.movie}</strong></h5>
              <h5 className="theatre-price">Theatre: <strong>{cat.theatre}</strong></h5>
              <h5 className="theatre-price">Timings: <strong>{cat.showtime}</strong></h5>
              <h5 className="theatre-price">Area: <strong>{cat.area}</strong></h5>
              
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Movie;
