import React from 'react';
// import { Link } from "react-router-dom"; 
import Banner from './Banner';
import CategoryCards from './CategoryCards';
import PopularProducts from './PopularProducts';
import Testimonials from './Testimonials';
import './Home.css';
import show3 from "../assets/Show3.mp4";  // Video import

function Home() {
  return (
    <div className="home-page">
      <Banner />
      <CategoryCards />

      {/* Video Section */}
      <div className="video-banner">
        <video autoPlay muted loop playsInline>
          <source src={show3} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay">
          {/* <h2 className="video-title">Latest Collection</h2> */}
          <p className="video-subtitle">Elevate your style with our newest arrivals</p>
          
          {/* <Link to="/exclusive">
            <button className="video-btn">Check Exclusive Collection</button>
          </Link> */}
        </div>
      </div>

      <PopularProducts />
      <Testimonials />
    </div>
  );
}

export default Home;
