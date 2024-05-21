import React, { useEffect, useState } from 'react';
import axios from "axios"
import AdNav from './AdNav';

const Orders = () => {

  const [orders,setOrders] = useState([]);

  useEffect(()=> {
    const token = localStorage.getItem('token');
    fetch(`${process.env.REACT_APP_BACKEND}/api/auth/gethotelorders/`, {
        headers: {
            'Authorization': token
        }
    })
    .then((res) => res.json())
    .then((jsonRes) => setOrders(jsonRes));
},[]);




  return (
    <>
      <AdNav/>
      <div>
        <br />
        <br />
        <br />
      <h1>Orders</h1>
      <div className="food-container">
        {orders.map((order) => (
          <div key={order._id} className="food-item">
            <h3 className="food-price">Price: <strong>₹ {order.price}</strong></h3>
            <h3 className="food-price">Item: <strong>{order.name}</strong></h3>
            <h3 className="HOtel-price">hotel: <strong>{order.hotel}</strong></h3>
            <h3 className="food-price">Address: <strong>{order.address}</strong></h3>
            <img src={order.image} alt="Food" className="food-image" />     
            <h3 className="food-price">Mobile: <strong>{order.mobile}</strong></h3>  
          </div>
        ))}
      </div>
      </div>
    </>
  );
};

export default Orders;
