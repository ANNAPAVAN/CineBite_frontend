
import React, { useEffect, useState } from 'react';
import { Button, Form } from "react-bootstrap";
import axios from "axios"
import ManagerNav from './ManagerNav';
function Manager() {


  const [orders,setOrders] = useState([]);


  const [mobile,setMobile] = useState(0);



  useEffect(()=> {
    fetch(`${process.env.REACT_APP_BACKEND}/api/auth/getfoodorders`)
    .then((res) => res.json())
    .then((jsonRes) => setOrders(jsonRes));
  },[])



  const [searchTerm,setSearchTerm] = useState("");

  const updatePhoneNumber = (id,mobile) => {
    axios
      .put(`${process.env.REACT_APP_BACKEND}/api/auth/updatenumber/${id}`, { mobile: mobile })
      .then((res) => {
        // console.log(res);
        alert("Mobile Number Updated");
        // After updating, fetch and update the food items
        fetch(`${process.env.REACT_APP_BACKEND}/api/auth/getfoodorders`)
          .then((res) => res.json())
          .then((jsonRes) => setOrders(jsonRes));
      })
      .catch((err) => {
        alert("Food Price Not Updated");
        console.log(err);
      });
  }
 

  const filteredOrders = orders.filter(order => {
    return(
      order.hotel.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });



  return (
    <>
    <ManagerNav/>
    <div >
    <br></br>
      <br></br>
      <br></br>
      <h1 className="food-hotel-head">FOOD PAGE</h1>
      <input 
        type="text"
        placeholder="search hotelname"
        value={searchTerm}
        onChange={e=>setSearchTerm(e.target.value)}
        className='food-hotels-search-bar'
      />
      <br></br>
      <h1>Ordered Items</h1>
      <div className="food-container">
        {filteredOrders.map((order) => (
          <div key={order._id} className="food-item">
            <h3 className="food-price">Price: <strong>₹ {order.price}</strong></h3>
            <h3 className="food-price">Item: <strong>{order.name}</strong></h3>
            <h3 className="HOtel-price">hotel: <strong>{order.hotel}</strong></h3>
            <h3 className="food-price">Address: <strong>{order.address}</strong></h3>
            <h3 className="food-price">UserMobile: <strong>{order.usermobile}</strong></h3>
            <img src={order.image} alt="Food" className="food-image" />   
            <Form.Group controlId="formBasicPrice">
              <Form.Control
                type="text"
                placeholder={order.mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </Form.Group>
            <Button
              onClick={() => updatePhoneNumber(order._id, mobile)}
              variant="outline-primary"
              style={{ width: "100%" }}
            >
              UPDATE Number
            </Button>

          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default Manager;
