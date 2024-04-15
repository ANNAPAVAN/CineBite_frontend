import React,{useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons CSS
import { Navbar, Nav } from 'react-bootstrap'; // Import Bootstrap components as needed
import AdNav from './AdNav';
import axios from "axios";

function Admin() {
  


  useEffect(() => {
    // console.log("home");
    const fetchTokenData = async () => {
      try {
        // Get the token from local storage
        const token = localStorage.getItem("token");
        if (!token) {
          console.log("Token not found in local storage");
          return;
        }       
  
        const config = {
          headers: {
            Authorization: `Bearer ${token}`
          }
        };   
        const response = await axios.get(`${process.env.REACT_APP_BACKEND}/api/auth/getAdminToken`, config);
        console.log(response.data);
        localStorage.setItem("hotel",response.data.hotel)
        localStorage.setItem("address",response.data.address)
 
  
      } catch (error) {
        console.error('Error fetching data:');
        
      }
    };
  
    fetchTokenData();
  }, []);


  return (
    <>
      <AdNav/>
      <div className="admin-container">
        {/* <h1 className="admin-head">Admin Dashboard</h1> */}
        
        <div className="admin-section">
          <h2 className="admin-head"><strong>Manage Food Items</strong></h2>
          <p>
            In the Food section, you can perform actions such as adding new food items, editing existing ones, or deleting items from the menu. Ensure that the food menu remains updated with the latest offerings to provide users with a delightful dining experience.
          </p>
        </div>
        <div className="admin-section">
          <h2 className="admin-head"><strong>Manage Movie Listings</strong></h2>
          <p>
            In the Movies section, you can manage movie listings by adding new releases, updating showtimes, or removing outdated information. Keep the movie listings up-to-date to help users plan their entertainment activities effectively.
          </p>
        </div>
        
      </div> 
    </>
  );
}

export default Admin;

