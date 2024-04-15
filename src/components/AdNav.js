import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons CSS
import { Navbar, Nav } from 'react-bootstrap'; // Import Bootstrap components as needed
import { Link ,useNavigate} from 'react-router-dom'; // Import Link from react-router-dom



function AdNav() {
  const navItemsStyle = {
    marginLeft: 'auto', // Align items to the right
  };

  const navigate = useNavigate();

  function handleLogout(){
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
    navigate("/");
  }

  return (
    <Navbar bg="light" shadow="lg" expand="lg" fixed="top">
      <Navbar.Brand style={{ fontSize: '24px', color: 'blue' }} as={Link} to="/admin">
        Admin
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto" style={navItemsStyle}>

          <Nav.Link as={Link} to="/adminfoodpage">Food</Nav.Link>
          {/* <Nav.Link as={Link} to="/adminmoviepage">Movie</Nav.Link> */}
          <Nav.Link as={Link} to="/foodAdmin">PostFood</Nav.Link>
          {/* <Nav.Link as={Link} to="/movieAdmin">PostMovie</Nav.Link> */}

          <Nav.Link onClick={handleLogout}>LogOut</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default AdNav;
