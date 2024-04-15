import React from 'react';
import { useState,useEffect } from 'react';
import { Navbar, Nav, Badge } from 'react-bootstrap';
import { Link ,useNavigate} from 'react-router-dom';
import { BiCart } from 'react-icons/bi';
import axios from 'axios';

function Navbar_() {

  const navigate = useNavigate();
  const [cartItemCount, setCartItemCount] = useState(0);
  const userId = localStorage.getItem('user_id');
  useEffect(() => {
    // Fetch cart item count when the component mounts
    fetchCartItemCount();
  }, []);

  const fetchCartItemCount = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND}/api/auth/getfoodcartcount/${userId}`);
      setCartItemCount(response.data.count);
    } catch (error) {
      console.error('Error fetching cart item count:', error);
    }
  };

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
          <Nav.Link as={Link} to="/food">Food</Nav.Link>
          <Nav.Link as={Link} to="/cartpage">
            <BiCart /> {cartItemCount > 0 && (
              <Badge bg="danger" className="notification-badge">
                {cartItemCount}
              </Badge>
            )}
          </Nav.Link>          
          {/* <Nav.Link as={Link} to="/sport">Sport</Nav.Link> */}
          <Nav.Link as={Link} to="/movie"> <i className="bi bi-film"></i> Movie</Nav.Link>
          <Nav.Link onClick={handleLogout}>LogOut</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navbar_;


// npm install react-bootstrap bootstrap


// Primary ("primary")
// Secondary ("secondary")
// Success ("success")
// Info ("info")
// Light ("light")
// Dark ("dark")
// Danger ("danger") 
// Warning ("warning") 
