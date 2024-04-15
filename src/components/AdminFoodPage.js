
import React, { useEffect, useState } from 'react';
import { Button, Form } from "react-bootstrap";
import axios from "axios"
import AdNav from './AdNav';

function AdminFoodPage() {

  const [cats, setCats] = useState([]);

  const [newPrice,setNewPrice] = useState(0);

  const user_Id = localStorage.getItem("user_id");

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND}/api/auth/gethotelfood/${user_Id}`)
      .then((res) => res.json())
      .then((jsonRes) => setCats(jsonRes));
  }, []);



  const deletePost = (id) => {
    axios
      .delete(`${process.env.REACT_APP_BACKEND}/api/auth/deletefood/${id}`)
      .then((res) => {
        console.log(res);
        alert("Food Item Deleted");
        // After deleting, fetch and update the food items
        fetch(`${process.env.REACT_APP_BACKEND}/api/auth/gethotelfood/${user_Id}`)
          .then((res) => res.json())
          .then((jsonRes) => setCats(jsonRes));
      })
      .catch((err) => { 
        alert("Food Item Not Deleted");
        console.log(err);
      });
  };

  const updatePrice = (id, newPrice) => {
    axios
      .put(`${process.env.REACT_APP_BACKEND}/api/auth/updatefood/${id}`, { price: newPrice })
      .then((res) => {
        console.log(res);
        alert("Food Price Updated");
        // After updating, fetch and update the food items
        fetch(`${process.env.REACT_APP_BACKEND}/api/auth/gethotelfood/${user_Id}`)
          .then((res) => res.json())
          .then((jsonRes) => setCats(jsonRes));
      })
      .catch((err) => {
        alert("Food Price Not Updated");
        console.log(err);
      });
  };

  const [searchTerm,setSearchTerm] = useState("");


 

  const filteredHotels = cats.filter(cat => {
    return(
      cat.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });




  return (
    <>
    <AdNav/>
    <div >
    <br></br>
      <br></br>
      <br></br>
      <h1 className="food-hotel-head">FOOD PAGE</h1>
      <input 
        type="text"
        placeholder="search Item"
        value={searchTerm}
        onChange={e=>setSearchTerm(e.target.value)}
        className='food-hotels-search-bar'
      />
      <h1>Food Items</h1>
      <div className="food-container">
        {filteredHotels.map((cat) => (
          <div key={cat._id} className="food-item">
            <h3 className="food-price">Price: <strong>₹ {cat.price}</strong></h3>
            <h3 className="food-price">Item: <strong>{cat.name}</strong></h3>
            <h3 className="HOtel-price">hotel: <strong>{cat.hotel}</strong></h3>
            <h3 className="food-price">Address: <strong>{cat.address}</strong></h3>
            <img src={cat.image} alt="Food" className="food-image" />
            <Button
              onClick={() => deletePost(cat._id)}
              variant="outline-danger"
              style={{ width: "100%" }}
            >
              DELETE
            </Button>
            <Form.Group controlId="formBasicPrice">
              <Form.Control
                type="text"
                placeholder="Enter new price"
                onChange={(e) => setNewPrice(e.target.value)}
              />
            </Form.Group>
            <Button
              onClick={() => updatePrice(cat._id, newPrice)}
              variant="outline-primary"
              style={{ width: "100%" }}
            >
              UPDATE PRICE
            </Button>
          </div>
        ))}
      </div>
     
    </div>
    </>
  );
}

export default AdminFoodPage;
