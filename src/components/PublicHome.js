import React from 'react';
import HomeNav from './HomeNav';
import {useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';


function PublicHome() {


  const location = useLocation();
  const [displayText, setDisplayText] = useState('');
  useEffect(() => {
    // if (location.pathname === '/') {
    //   localStorage.removeItem("token");
    // }
    const text = "Experience Something New!";

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        currentIndex = 0; 
      }
    }, 200); 

    return () => clearInterval(interval);
  }, [location.pathname]);

  return ( 
    <>
<HomeNav/>

    <div className="home-para1">
    <div>
        <h1 className="hp">Enjoy Food and Movies Like Never Before!<br/>
            <span className='sp'>{displayText}</span>
        </h1>

        <p>Our mission is to revolutionize the way you experience entertainment and dining. Imagine a world where you can savor delicious meals while immersing yourself in the latest blockbuster or timeless classic. Our platform brings together the best of both worlds, offering a seamless fusion of culinary delights and cinematic wonders. Join us as we redefine the art of indulgence and create unforgettable experiences for movie buffs and food enthusiasts alike.</p>
    </div>
    <div>
        <img src="https://media1.giphy.com/media/3o7rc0qU6m5hneMsuc/giphy.gif" alt="image1" id="pic"/>
    </div>
    </div>
    <div className="home-para2">
    <div>
        <h1 className="hp1">Users</h1>
        <p>
          <strong>Food Enthusiasts:</strong> Users actively explore culinary experiences offered within the application, discovering new dishes and cuisines to indulge in.<br/>
          <strong>Adaptable:</strong> Users quickly adapt to navigating between food menus and movie listings, seamlessly switching between different offerings.<br/>
          <strong>Feedback-Driven:</strong> Many users provide valuable feedback on food quality, delivery experience, and movie selections, contributing to the enhancement of the application's offerings.<br/>
          <strong>Collaborative:</strong> Users often share their dining and movie experiences with friends and family, recommending restaurants and films, and planning outings together.<br/>
          <strong>Exploratory:</strong> Driven by curiosity, users explore various food options and movie genres within the application, broadening their culinary and cinematic horizons.<br/>
      </p>

        <Link to="/login" className='log'>Login</Link>
        <Link to="/register" className='reg'>Register</Link>
        
    </div>
    <div>
        <img src="https://www.jaypeehotels.com/blog/wp-content/uploads/2021/06/Food-Delivery-1.jpg" alt="image1" id="pic"/>
    </div>
</div>

<div className="home-para3">
    <div>
        <img src="https://keystoneacademic-res.cloudinary.com/image/upload/q_auto,f_auto,w_743,c_limit/element/13/138508_EMlyonhospHL.jpg" alt="image1" id="pic"/>
    </div>
    <div>
        <h1 className="hp1">Hotel Admin People</h1>
        <p>
            <strong>Strategic Managers:</strong> Hotel admin people strategically manage the operations and services within the hotel.<br/>
            <strong>Resourceful:</strong> Hotel admin people are resourceful problem-solvers, adept at addressing challenges efficiently.<br/>
            <strong>Quality Control:</strong> They ensure quality standards are maintained in all aspects of hotel management and service delivery.<br/>
            <strong>Communication Skills:</strong> Hotel admin people possess strong communication skills, facilitating smooth interactions with guests and staff.<br/>
            <strong>Efficiency:</strong> They focus on optimizing processes and workflows to enhance efficiency and customer satisfaction.<br/>
        </p>
        <Link to="/adminlogin" className='log'>Login</Link>
        <Link to="/adminregister" className='reg'>Register</Link>
    </div>
</div>

<div className="home-para2">
    <div>
        <h1 className="hp1">Third Party Delivery System</h1>
        <p>
            <strong>Reliable Service:</strong> The third-party delivery system offers reliable and efficient delivery services to users.<br/>
            <strong>Wide Reach:</strong> They have a broad network, reaching various locations to fulfill delivery requests.<br/>
            <strong>Timely Delivery:</strong> Ensuring timely delivery of orders is a priority for the third-party delivery system.<br/>
            <strong>Customer Support:</strong> They provide excellent customer support, addressing queries and concerns promptly.<br/>
            <strong>Integration:</strong> They seamlessly integrate with the application, facilitating smooth order placement and tracking.<br/>
        </p>
        <Link to="/login" className='log'>Login</Link>
    </div>
    <div>
        <img src="https://static.vecteezy.com/system/resources/previews/008/555/076/non_2x/food-delivery-man-with-scooter-holding-fast-food-box-on-mobile-phone-background-fast-food-delivery-service-in-cartoon-design-concept-illustration-vector.jpg" alt="image1" id="pic"/>
    </div>
</div>

<div className="home-para3">
    <div>
        <img src="https://g.foolcdn.com/editorial/images/577464/a-full-movie-theater-with-a-blank-screen.jpg" alt="image1" id="pic"/>
    </div>
    <div>
        <h1 className="hp1">Movie Admin People</h1>
        <p>
            <strong>Creative Directors:</strong> Movie admin people are creative minds behind the selection and curation of films within the application.<br/>
            <strong>Content Management:</strong> They manage the content library, ensuring a diverse range of movies for users to enjoy.<br/>
            <strong>Engagement Strategies:</strong> They develop engagement strategies to keep users interested and coming back for more.<br/>
            <strong>Technical Expertise:</strong> Movie admin people possess technical knowledge to optimize streaming and viewing experiences.<br/>
            <strong>Community Building:</strong> They foster a sense of community among users, creating forums for discussion and interaction.<br/>
        </p>
        <Link to="/movielogin" className='log'>Login</Link>
        <Link to="/movieregister" className='reg'>Register</Link>
    </div>
</div>

    <div>
      <h1 className="hp2">JOIN US NOW !!</h1>
      <div className="home-para5">
        <div>
          <img src="https://tse2.mm.bing.net/th?id=OIP.Sx2nWXlHxa9ayFE_-F4CYQHaEo&pid=Api&P=0&h=180" alt="image1" id="pic1"/>
        </div>
        <div>
          <img src="http://hdqwalls.com/download/titanic-movie-full-hd-3840x2160.jpg" alt="image1" id="pic1"/>
        </div>
      </div>
    </div>

    </>
  );
}

export default PublicHome;


