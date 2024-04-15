// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';
import Navbar_ from './Navbar_';




import React from 'react';
import {useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from './Footer';

function Home() {
  // console.log(process.env.REACT_APP_BACKEND);
  const location = useLocation();
  const [displayText, setDisplayText] = useState('');
  useEffect(() => {
    if (location.pathname === '/') {
      localStorage.removeItem("token");
    }
    const text = "JOIN US NOW !!";

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
<Navbar_ className="home-navbar" />


<div>
      {/* <h1 className="hp2">JOIN US NOW !!</h1> */}
      {/* <div className="home-para5">
        <div>
          <img src="https://wallpapercave.com/wp/wp3509196.jpg" alt="image1" id="pic1"/>
        </div>
        <div>
          <img src="https://www.healthcareradius.in/public/images/2021/06/25/Sports-Nutrition.jpg" alt="image1" id="pic1"/>
        </div>
      </div> */}
    </div>

    <div className="home-para2">
    <div>
        <h1 className="hp1">Food Enthusiasts</h1>
        <p>
            <strong>Culinary Explorers:</strong> Food enthusiasts are always eager to explore new cuisines and dishes from around the world.<br></br>
            <strong>Gourmet Taste:</strong> With a refined palate, food enthusiasts appreciate the finer aspects of cooking and dining experiences.<br></br>
            <strong>Creative Cooks:</strong> Many food enthusiasts enjoy experimenting in the kitchen and creating unique recipes.<br></br>
            <strong>Community of Foodies:</strong> Food enthusiasts often enjoy sharing their culinary experiences and recommendations with others in online communities or social media platforms.<br></br>
            <strong>Passion for Food:</strong> Driven by their love for food, enthusiasts are passionate about discovering the stories behind different culinary traditions and ingredients.<br></br>
        </p>
    </div>
    <div>
        <img src="http://static1.businessinsider.com/image/59c9763224884966f6225939-1190-625/11-fast-food-items-that-are-surprisingly-under-300-calories.jpg" alt="Food Image" id="pic"/>
    </div>
</div>


{/* <div className="home-para2">
    <div>
        <img src="https://etimg.etb2bimg.com/photo/74881928.cms" alt="Sports Image" id="pic"/>
    </div>
    <div>
        <h1 className="hp1">Sports API Enthusiasts</h1>
        <p>
            <strong>Data-Driven:</strong> Sports API enthusiasts rely on data-driven insights to analyze player performance, team statistics, and game outcomes.<br></br>
            <strong>Innovative Solutions:</strong> They seek innovative ways to leverage sports data for fantasy leagues, sports betting platforms, and performance analytics.<br></br>
            <strong>Real-Time Updates:</strong> Sports API enthusiasts thrive on real-time updates and access to live sports data for instant analysis and engagement.<br></br>
            <strong>Passionate Fans:</strong> They are passionate about sports and use APIs to access information about their favorite teams, players, and events.<br></br>
            <strong>Community Engagement:</strong> Sports API enthusiasts often engage with online communities to discuss sports data, share insights, and collaborate on projects.<br></br>
        </p>
    </div>
</div> */}


<div className="home-para3">
    <div>
        <img src="https://tse2.explicit.bing.net/th?id=OIP.GkTtpFdYaLCgbCg8WLZ-1wHaFB&pid=Api&P=0&h=180" alt="Movie Image" id="pic"/>
    </div>
    <div>
        <h1 className="hp1">Movie Buffs</h1>
        <p>
            <strong>Film Enthusiasts:</strong> Movie buffs have a deep passion for cinema, eagerly exploring diverse genres, directors, and cinematic styles.<br></br>
            <strong>Critical Eye:</strong> They possess a critical eye for evaluating films, analyzing elements such as plot, character development, cinematography, and sound.<br></br>
            <strong>Cinematic Experience:</strong> Movie buffs appreciate the immersive experience of watching films in theaters or through streaming platforms, seeking out high-quality audiovisual experiences.<br></br>
            <strong>Discussion and Analysis:</strong> They enjoy discussing and analyzing films with fellow movie enthusiasts, sharing insights, interpretations, and recommendations.<br></br>
            <strong>Exploring Filmography:</strong> Many movie buffs delve into the filmographies of their favorite directors, actors, or production companies, exploring their contributions to cinema.<br></br>
        </p>
    </div>

</div>

<Footer/>
    </>
  );
}

export default Home;