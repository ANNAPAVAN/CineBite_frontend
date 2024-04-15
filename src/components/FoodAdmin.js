// FoodAdmin.js

import React, { useState } from 'react';
import { Form, FormGroup } from 'react-bootstrap';
import axios from 'axios';
import AdNav from './AdNav';

function FoodAdmin() {

  const owner = localStorage.getItem("user_id");
  const hotel = localStorage.getItem("hotel");
  const address = localStorage.getItem("address");

  const [post, setPost] = useState({
    ownerid: owner,
    name:"",
    image: "",
    price: "",
    hotel: hotel,
    address: address,
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setPost((prev) => {
        return {
          ...prev,
          image: reader.result,
        };
      });
    };
  };

  const createPost = (e) => {
    e.preventDefault();
  
    axios
      .post(`${process.env.REACT_APP_BACKEND}/api/auth/postfood`, post)
      .then((res) => {
        console.log(res);
        console.log("posteddddddddd");
        alert("Food item Posted Successfully")
      })
      .catch((err) => {
        console.log(err);
        alert("Food item not Posted");
      });
  };
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <>
    <AdNav/>
    <div className="food-admin-container">
      <div className="food-admin-main">
        <div className="food-admin-form">
          <div className="food-admin-text">Upload Food Item</div>
          <Form action="#">
            <FormGroup>
            <div className="food-admin-input-row">
                <div className="food-admin-input-data">
                  <Form.Control type="text" required name="name" value={post.name} onChange={handleChange} />
                  <div className="food-admin-underline"></div>
                  <label htmlFor="name">Item</label>
                </div>
              </div>

              <div className="food-admin-input-row">
                <div className="food-admin-input-data">
                  <Form.Control type="text" required name="price" value={post.price} onChange={handleChange} />
                  <div className="food-admin-underline"></div>
                  <label htmlFor="price">Price</label>
                </div>
              </div>

              <div className="food-admin-input-row">
                <div className="food-admin-input-data">
                  <Form.Control type="text" required name="hotel" value={post.hotel} onChange={handleChange} disabled/>
                  <div className="food-admin-underline"></div>
                  <label htmlFor="hotel">Hotel</label>
                </div>
              </div>

              <div className="food-admin-input-row">
                <div className="food-admin-input-data">
                  <Form.Control type="text" required name="address" value={post.address} onChange={handleChange} disabled/>
                  <div className="food-admin-underline"></div>
                  <label htmlFor="address">Address</label>
                </div>
              </div>

              <div className="food-admin-input-row">
                <div className="food-admin-input-data">
                  <Form.Control
                    type="file"
                    name="image"
                    onChange={handleImageChange}
                    accept="image/*"
                    required
                  />
                  <img src={post.image} alt="Preview" className="food-admin-preview-image" />
                </div>
              </div>

              <div className="food-admin-input-row food-admin-submit-btn">
                <div className="food-admin-input-data">
                  <div className="food-admin-inner"></div>
                  <Form.Control type="submit" value="Submit" onClick={createPost} />
                </div>
              </div>
            </FormGroup>
          </Form>
        </div>
      </div>
    </div>
    </>
  );
}

export default FoodAdmin;
