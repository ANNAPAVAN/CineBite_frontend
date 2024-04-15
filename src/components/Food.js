
// Food.js
import React, { useEffect, useState } from 'react';
import Navbar_ from './Navbar_';

function Food() {
  const [cats, setCats] = useState([]);
  const [hotels, setHotels] = useState([]);
  const [selectedHotel, setSelectedHotel] = useState("SriRama");

  useEffect(() => {
    console.log('Backend URL:', process.env.REACT_APP_BACKEND);
    fetch(`${process.env.REACT_APP_BACKEND}/api/auth/getfood`)
      .then((res) => res.json())
      .then((jsonRes) => {
        setCats(jsonRes);
        const uniqueHotels = Array.from(new Set(jsonRes.map((cat) => cat.hotel)));
        setHotels(uniqueHotels);
      });
  }, []);

  const handleCardClick = (hotelName) => {
    setSelectedHotel(hotelName);
  };

  const handleAddToCart = (item) => {
    const user_id = localStorage.getItem('user_id');
    const item_id = item._id;
    // console.log(item_id,"------------")
    const itemWithUserId = { ...item, user_id,item_id };

    console.log(itemWithUserId);

    fetch(`${process.env.REACT_APP_BACKEND}/api/auth/addtofoodcart`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(itemWithUserId),
    })
      .then((res) => {
        console.log('Response:', res);
        return res.json();
      })
      .then((data) => {
        alert("Item added to cart")
        console.log(data.message)})
      .catch((error) => console.error('Error:', error));
  };
  

  return (
    <>
      <Navbar_ />
      <div>
        <br />
        <br />
        <br />
        <h1 className="food-hotel-head">Available Hotels for Food Items</h1>

        <div className="food-container">
          {hotels.map((hotel) => (
            <div key={hotel} className="food-hotel-card" onClick={() => handleCardClick(hotel)}>
              <div className="food-hotel-button"><strong>{hotel}</strong></div>
            </div>
          ))}
        </div>
      </div>
      {selectedHotel && (
        <div>
          <br />
          <br />
          <h1 className="food-hotel-head2">Food Items In {selectedHotel}</h1>
          <div className="food-container">
            {cats
              .filter((cat) => cat.hotel === selectedHotel)
              .map((cat) => (
                <div key={cat._id} className="food-item">
                  <h5 className="food-price">Item: <strong>{cat.name}</strong></h5>
                  <h5 className="food-price">Price: <strong>{cat.price}</strong>$</h5>
                  {/* <h5 className="food-price">Hotel: <strong>{cat.hotel}</strong>$</h5> */}
                  <h5 className="food-price">Address: <strong>{cat.address}</strong></h5>
                  <img src={cat.image} alt="Food" className="food-image" />
                  <button onClick={() => handleAddToCart(cat)} className="food-ordernow" >Add to Cart</button>
                </div>
              ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Food;
