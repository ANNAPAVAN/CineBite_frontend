import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons CSS
import { Navbar, Nav ,Badge} from 'react-bootstrap'; // Import Bootstrap components as needed
import { Link ,useNavigate} from 'react-router-dom'; // Import Link from react-router-dom
import { BiCart } from 'react-icons/bi';
import { useState,useEffect } from 'react';
import axios from 'axios';


function MovieAdminNav() {
  const navItemsStyle = {
    marginLeft: 'auto', // Align items to the right
  };

  const [orderCount, setOrderCount] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    // Fetch cart item count when the component mounts
    fetchOrdersCount();
  }, []);

  const fetchOrdersCount = async () => {
    const token = localStorage.getItem('token');
    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND}/api/auth/getorderscount`,{
        headers: {
          'Authorization': token
      }
      });
      setOrderCount(response.data.count);
    } catch (error) {
      console.error('Error fetching cart item count:', error);
    }
  };

  function handleLogout(){
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
    navigate("/");
  }

  return (
    <Navbar bg="light" shadow="lg" expand="lg" fixed="top">
      <Navbar.Brand style={{ fontSize: '24px', color: 'blue' }} as={Link} to="/movieadminpage">
        Admin
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto" style={navItemsStyle}> 

          <Nav.Link as={Link} to="/adminmoviepage">Movie</Nav.Link> 
          <Nav.Link as={Link} to="/movieAdmin">PostMovie</Nav.Link>

          <Nav.Link onClick={handleLogout}>LogOut</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MovieAdminNav;
