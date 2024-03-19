// Food.js
import React, { useEffect, useState } from 'react';
import Navbar_ from './Navbar_';

function Food() {
  const [cats, setCats] = useState([
    {
      image: '',
      price: '',
      hotel: '',
    },
  ]);

  useEffect(() => {
    console.log('Backend URL:', process.env.REACT_APP_BACKEND);
    fetch(`${process.env.REACT_APP_BACKEND}/api/auth/getfood`)
      .then((res) => res.json())
      .then((jsonRes) => setCats(jsonRes));
  }, []);

  return (
    <>
    <Navbar_/>
    <div>
      <br></br>
      <br></br>
      <br></br>
    <h1>FOOD PAGE</h1>
      <div className="food-container">
        
        {cats.map((cat) => (
          <div key={cat._id} className="food-item">
            <h3 className="food-price">Price: {cat.price}</h3>
            <h3 className="HOtel-price">hotel: {cat.hotel}</h3>
            <img src={cat.image} alt="Food" className="food-image" />
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default Food;
