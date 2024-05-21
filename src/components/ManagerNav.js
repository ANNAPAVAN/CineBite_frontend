import React from 'react';
import { useState,useEffect } from 'react';
import { Navbar, Nav, Badge } from 'react-bootstrap';
import { Link ,useNavigate} from 'react-router-dom';


function ManagerNav() {

  const navigate = useNavigate();

  function handleLogout(){
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
    navigate("/");
  }

  const navItemsStyle = {
    marginLeft: 'auto',
  };

  return (
<Navbar bg="light" shadow="lg" expand="lg" className="pavan" fixed="top">
      <Navbar.Brand as={Link} to="/home">Home</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto" style={navItemsStyle}>
          
          <Nav.Link onClick={handleLogout}>LogOut</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default ManagerNav;

