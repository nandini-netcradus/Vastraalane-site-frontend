import React from 'react';
import { Link } from 'react-router-dom';
import './Baanner.css';
import Show22 from '../assets/Show22.mp4';   // ✅ sahi import (src/assets me file hai)

const Banner = () => {
  return (
    <div className="banner">
      <video
        src={Show22}   // ✅ imported file use karo
        autoPlay
        muted
        loop
        playsInline
        className="banner-video"
      />
      <div className="banner-overlay" />
      <div className="banner-content">
        <h1>Welcome to Vastraalane</h1>
        <p>The Perfect Blend of Trend & Elegance</p>
        <Link to="/collections/shop" className="banner-btn">
          The Collection Awaits
        </Link>
      </div>
    </div>
  );
};

export default Banner;
