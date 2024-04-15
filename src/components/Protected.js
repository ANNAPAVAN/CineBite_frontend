
import React from "react";
import { Navigate } from "react-router-dom";

const Protected = ({ children }) => {
  

  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to="/" />;
  }

  return(
    <>{children}</>
  )
};

export default Protected;








// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from 'axios';

// const Protected = ({ children }) => {
//   const [authenticated, setAuthenticated] = useState(false);
//   const token = localStorage.getItem("token");
//   const userId = localStorage.getItem("user_id");

//   const navigate = useNavigate();

//   console.log(localStorage.getItem("token"),"--------------------------------------------------------------");

//   const config = {
//     headers: {
//       Authorization: `Bearer ${token}`
//     }
//   };

//   const getAuth = async () => {
//     try {
//       if (!token) {
//         setAuthenticated(false);
//         console.log("Token not found in local storage");
//         return;
//       }    
//       console.log(userId + " user id in protected")
//       const response = await axios.get(`${process.env.REACT_APP_BACKEND}/api/auth/getToken`, config);
//       // console.log(response.data);
//       if(response.data._id===userId){
//         setAuthenticated(true);
//       }else{
//         localStorage.removeItem("token");
//         localStorage.removeItem("user_id");
//         setAuthenticated(false);
//       }
//     } catch (error) {
//       console.error('Error fetching authentication data:');
//     }
//   };

//   getAuth();
   
//   return authenticated?<>{children}</>:navigate("/");
// };

// export default Protected;
