// AdminMoviePage.js
import React, { useEffect, useState } from 'react';
import { Button, Form } from "react-bootstrap";
import axios from "axios"
import MovieAdminNav from './MovieAdminNav';

function AdminMoviePage() {
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

      console.log(cats);

  }, []);

  console.log(cats);

  const deletePost = (id) => {
    console.log("delete------movie-------qwerty");
    console.log(id);

    axios
      .delete(`${process.env.REACT_APP_BACKEND}/api/auth/deletemovie/${id}`)
      .then((res) => 
      {
        alert("Movie Deleted")
        console.log(res)})
      .catch((err) => {
        alert("Movie Not Deleted")
        console.log(err)
      });

  };

  return (
    <>
    <MovieAdminNav/>
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
            <Button
                    onClick={() => deletePost(cat._id)}
                    variant="outline-danger"
                    style={{ width: "100%" }}
                  >
                    DELETE
            </Button>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default AdminMoviePage;
