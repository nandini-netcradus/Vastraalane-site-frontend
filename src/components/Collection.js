// src/pages/CollectionsPages/Collection.js
import React from "react";
import { Link } from "react-router-dom";
import "./Collection.css";

// Import images from src/assets
import ClothingImg from "../assets/Clothing.jpg";
import FootwearImg from "../assets/footwear.jpg";
import AccessoriesImg from "../assets/Accessories.jpg";
import BagsImg from "../assets/Bags.jpg";

const Collection = () => {
  return (
    <div className="collection-container">
      <h1 className="collection-heading">Our Collections</h1>
      <div className="collection-grid">
        
        {/* Clothing Section */}
        <Link to="/collections/clothing" className="collection-card">
          <img 
            src={ClothingImg} 
            alt="Clothing Collection" 
            className="collection-img"
          />
          <div className="collection-overlay">
            <h2>Clothing</h2>
          </div>
        </Link>

        {/* Footwear Section */}
        <Link to="/collections/footwear" className="collection-card">
          <img 
            src={FootwearImg} 
            alt="Footwear Collection" 
            className="collection-img"
          />
          <div className="collection-overlay">
            <h2>Footwear</h2>
          </div>
        </Link>

        {/* Accessories Section */}
        <Link to="/collections/accessories" className="collection-card">
          <img 
            src={AccessoriesImg} 
            alt="Accessories Collection" 
            className="collection-img"
          />
          <div className="collection-overlay">
            <h2>Accessories</h2>
          </div>
        </Link>

        {/* Bags Section */}
        <Link to="/collections/bags" className="collection-card">
          <img 
            src={BagsImg} 
            alt="Bags Collection" 
            className="collection-img"
          />
          <div className="collection-overlay">
            <h2>Bags</h2>
          </div>
        </Link>

      </div>
    </div>
  );
};

export default Collection;
