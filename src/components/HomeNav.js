import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import { Link ,useNavigate} from 'react-router-dom';


function HomeNav() {

  const navigate = useNavigate();


  const navItemsStyle = {
    marginLeft: 'auto',
  };

  return (
    <Navbar bg="light" shadow="lg" expand="lg" className="pavan" fixed="top">
      <Navbar.Brand as={Link} to="/home">CineBite</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto" style={navItemsStyle}>
          <Nav.Link as={Link} to="/home">About Us</Nav.Link>
          <Nav.Link as={Link} to="/home">Contact Us</Nav.Link>
          {/* <Nav.Link as={Link} to="/login">User Login</Nav.Link> */}
          {/* <Nav.Link as={Link} to="/register">User Register</Nav.Link>          
          <Nav.Link as={Link} to="/adminlogin">Hotel Login</Nav.Link>
          <Nav.Link as={Link} to="/adminregister">Hotel Register</Nav.Link>
          <Nav.Link as={Link} to="/movielogin">Movie Login</Nav.Link>
          <Nav.Link as={Link} to="/movieregister">Movie Register</Nav.Link>
          <Nav.Link as={Link} to="/login">Manager Login</Nav.Link> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default HomeNav;

// import React from 'react';
// import { Link } from 'react-router-dom';

// function HomeNav() {
//   return (
//     <nav className="navbar">
      
//       <Link to="/" className="nav-link">Home</Link>
//       <Link to="/login" className="nav-link">User Login</Link>
//       <Link to="/register" className="nav-link">User Register</Link>
//       <Link to="/adminlogin" className="nav-link">Admin Login</Link>
//       <Link to="/adminregister" className="nav-link">Admin Register</Link>
//       <Link to="/login" className="nav-link">Manager Login</Link>
//     </nav>
//   );
// }

// export default HomeNav;

