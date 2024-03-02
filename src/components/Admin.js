import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons CSS
import { Navbar, Nav } from 'react-bootstrap'; // Import Bootstrap components as needed
import AdNav from './AdNav';

function Admin() {
  const navItemsStyle = {
    marginLeft: 'auto', // Align items to the right
  };

  return (
    <>
      <AdNav/>
      <div className="container">
        <h1 className="home-head">Admin Dashboard</h1>
        <h5>
          Welcome to the Admin Dashboard! As an admin, you have access to various functionalities to manage the platform efficiently.
        </h5>
        <div className="home-section">
          <h2><strong>Manage Food Items</strong></h2>
          <p>
            In the Food section, you can perform actions such as adding new food items, editing existing ones, or deleting items from the menu. Ensure that the food menu remains updated with the latest offerings to provide users with a delightful dining experience.
          </p>
        </div>
        <div className="home-section">
          <h2><strong>Manage Movie Listings</strong></h2>
          <p>
            In the Movies section, you can manage movie listings by adding new releases, updating showtimes, or removing outdated information. Keep the movie listings up-to-date to help users plan their entertainment activities effectively.
          </p>
        </div>
        
      </div> 
    </>
  );
}

export default Admin;

