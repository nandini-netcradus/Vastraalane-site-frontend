import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './CategoryCards.css';

import menPurseImg from '../assets/WALLET.jpg';
import menShirtImg from '../assets/SHIRT45.jpg';
import girlImg from '../assets/SSHOES90000.jpg';
import handbagImg from '../assets/HANDBAG34.jpg';
import perfumeImg from '../assets/Perfumes0.jpg';
import sunglassesImg from '../assets/Sunglasses0.jpg';

const categories = [
  { title: "Wallet", image: menPurseImg, path: "/collections/Purses" },
  { title: "Shirts", image: menShirtImg, path: "/collections/men-shirts" }, // fixed
  { title: "SHOES", image: girlImg, path: "/collections/girls" },
  { title: "Hand Bags", image: handbagImg, path: "/collections/hand-bags" }, // fixed
  { title: "Perfumes", image: perfumeImg, path: "/collections/perfumes" },
  { title: "Sunglasses", image: sunglassesImg, path: "/collections/sunglasses" },
];

const CategoryCards = () => {
  const containerRef = useRef(null);

  const scroll = (direction) => {
    if (containerRef.current) {
      const scrollAmount = 280; // card width + gap
      if (direction === 'left') {
        containerRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        containerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="category-section">
      <h2 className="category-heading">Shop by Category</h2>
      <div className="category-slider-wrapper">
        <button className="slide-btn left" onClick={() => scroll('left')}>&lt;</button>
        <div className="category-container" ref={containerRef}>
          {categories.map((category, index) => (
            <Link 
              to={category.path} 
              key={index} 
              className="category-card"
            >
              <img src={category.image} alt={category.title} className="category-image" />
              <h3 className="category-title">{category.title}</h3>
            </Link>
          ))}
        </div>
        <button className="slide-btn right" onClick={() => scroll('right')}>&gt;</button>
      </div>
    </div>
  );
};

export default CategoryCards;
