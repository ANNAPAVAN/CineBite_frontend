import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import AdminRegister from './components/AdminRegister';
import AdminLogin from './components/AdminLogin';

import Home from './components/Home';
import Food from './components/Food';
import Sport from './components/Sport';
import Movie from './components/Movie';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Admin from './components/Admin';
import FoodAdmin from './components/FoodAdmin';
import MovieAdmin from './components/MovieAdmin';

import AdminFoodPage from './components/AdminFoodPage';
import AdminMoviePage from './components/AdminMoviePage';

import Protected from './components/Protected';

import Cart from './components/Cart';

import PublicHome from './components/PublicHome';

import Manager from './components/Manager';

import './App.css'


import HotelTimings from './components/HotelTimings';

const App = () => {


return (
  <Router>
    <Routes>
      <Route path="/" element={<PublicHome/>}/>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/adminregister" element={<AdminRegister />} />
      <Route path="/adminlogin" element={<AdminLogin/>}/>

      {/*  <Route path="/home" element={<Home />} /> */}
      <Route path="/home" element={<Protected><Home/></Protected>} />

      <Route path="/food" element={<Protected><Food/></Protected>} />
      <Route path="/sport" element={<Protected><Sport/></Protected>} />
      <Route path="/movie" element={<Protected><Movie/></Protected>} />

      <Route path="/admin" element={<Protected><Admin/></Protected>} />
      <Route path="/foodadmin" element={<Protected><FoodAdmin/></Protected>} />
      <Route path="/movieadmin" element={<Protected><MovieAdmin/></Protected>} />

      <Route path="/adminfoodpage" element={<Protected><AdminFoodPage/></Protected>} />
      <Route path="/adminmoviepage" element={<Protected><AdminMoviePage/></Protected>} />

      <Route path="/cartpage" element={<Protected><Cart/></Protected>} />

      <Route path="/manager" element={<Protected><Manager/></Protected>}/>


      <Route path="/hotel" element={<HotelTimings />} />
      
    </Routes>
  </Router>
);
};

export default App;
