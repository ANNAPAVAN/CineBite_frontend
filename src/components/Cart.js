import React, { useEffect, useState } from 'react';
import Navbar_ from './Navbar_';
import axios from "axios"

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [orders,setOrders] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      const userId = localStorage.getItem('user_id');
      if (!userId) {
        console.error('User not authenticated');
        return;
      }

      try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND}/api/auth/getfoodcart/${userId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch cart items');
        }
        const cartItemsData = await response.json();
        setCartItems(cartItemsData);
        setLoading(false);
      } catch (error) {
        console.error('Error:', error);
        // Handle error
        setLoading(false);
      }
    };

    fetchCartItems();
  }, []);

  useEffect(()=> {
    const userId = localStorage.getItem('user_id');
    fetch(`${process.env.REACT_APP_BACKEND}/api/auth/getuserorders/${userId}`)
    .then((res) => res.json())
    .then((jsonRes) => setOrders(jsonRes));
  },[])

  const handleRemoveFromCart = async (item_id) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND}/api/auth/removefromfoodcart/${item_id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to remove item from cart');
      }
      // Remove the item from the local state
      setCartItems(prevCartItems => prevCartItems.filter(item => item._id !== item_id));
      console.log('Item removed from cart successfully');
    } catch (error) {
      console.error('Error:', error);
      // Handle error
    }
  };

  const handleOrderNow = async (item) => {
    
    try {
      // console.log(item);
      const item_id = item._id;
      const user_id = localStorage.getItem('user_id');

      const usermobile = prompt('Please enter your phone number:');
      if (!usermobile) {
        throw new Error('Phone number is required');
      }

      const itemWithUserId = { ...item, user_id, item_id,usermobile };
  
      const response = await fetch(`${process.env.REACT_APP_BACKEND}/api/auth/foodorder`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(itemWithUserId),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      console.log(data.message);
      alert(data.message);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`${process.env.REACT_APP_BACKEND}/api/auth/order_received_delete/${id}`);
      console.log(response);
      alert("Thank U... Order Again !!!");
      
      // After deleting, fetch and update the food items
      const userId = localStorage.getItem('user_id');
      const fetchResponse = await fetch(`${process.env.REACT_APP_BACKEND}/api/auth/getuserorders/${userId}`);
      const jsonRes = await fetchResponse.json();
      setOrders(jsonRes);
    } catch (error) {
      alert("Food Item Not Deleted");
      console.error(error);
    }
  }
  
  
  

  return (
    <>
      <Navbar_ />
      <div>
        <br />
        <br />
        <br />
        <h1 className="food-hotel-head">Cart Items</h1>

        <div className="food-container">
          {loading ? (
            <p>Loading...</p>
          ) : (
            cartItems.map((item) => (
              <div key={item._id} className="food-item">
                <h5 className="food-price">Item: <strong>{item.name}</strong></h5>
                <h5 className="food-price">Price: <strong>{item.price}</strong>$</h5>
                <h5 className="food-price">Hotel: <strong>{item.hotel}</strong></h5>
                <h5 className="food-price">Address: <strong>{item.address}</strong></h5>
                <img src={item.image} alt="Food" className="food-image" />
                <button onClick={() => handleOrderNow(item)} className='food-ordernow'>OrderNow</button>
                <button onClick={() => handleRemoveFromCart(item._id)} className='food-cart-remove'>Remove From Cart</button>
                
              </div>
            ))
          )}
        </div>

      <h1>Ordered Items</h1>
      <div className="food-container">
        {orders.map((order) => (
          <div key={order._id} className="food-item">
            <h3 className="food-price">Price: <strong>₹ {order.price}</strong></h3>
            <h3 className="food-price">Item: <strong>{order.name}</strong></h3>
            <h3 className="HOtel-price">hotel: <strong>{order.hotel}</strong></h3>
            <h3 className="food-price">Address: <strong>{order.address}</strong></h3>
            <img src={order.image} alt="Food" className="food-image" />     
            <h3 className="food-price">Mobile: <strong>{order.mobile}</strong></h3>  
            <button onClick={() => handleDelete(order._id)} className='food-cart-remove'>Order Received</button>    
          </div>
        ))}
      </div>


      </div>
    </>
  );
};

export default Cart;
