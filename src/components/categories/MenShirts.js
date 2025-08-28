import React, { useState } from 'react';
import './MenShirts.css';

// Existing shirts
import Shirt1 from '../../assets/shirt1.jpg';
import Shirt2 from '../../assets/shirt2.jpg';
import Shirt3 from '../../assets/shirt3.jpg';
import Shirt4 from '../../assets/shirts5.png';

// Tommy Hilfiger shirts
// import TommyMens from '../../assets/TOMMY_HILFIGER MENS.jpg';
import TommyNavyPolo from '../../assets/Tommy_Hilfiger Navy Polo.jpg';
import TommyOffWhite from '../../assets/Tommy_Hilfiger Off-white.jpg';
import TommyTealPolo from '../../assets/Tommy_Hilfiger Teal Polo.jpg';

const menShirtsProducts = [
  { id: 1, img: Shirt1, name: 'TOMMY HILFIGER', price: '₹1400', rating: '★★★★☆' },
  { id: 2, img: Shirt2, name: 'Tommy Hilfiger Teal', price: '₹1400', rating: '★★★★☆' },
  { id: 3, img: Shirt3, name: 'Tommy Hilfiger Brown', price: '₹1400', rating: '★★★★☆' },
  { id: 4, img: Shirt4, name: 'Tommy Hilfiger Teal Black', price: '₹1400', rating: '★★★★☆' },
  { id: 5, img: TommyNavyPolo, name: 'Tommy Hilfiger Navy Polo', price: '₹2200', rating: '★★★★☆' },
  { id: 6, img: TommyOffWhite, name: 'Tommy Hilfiger Off-white', price: '₹2500', rating: '★★★★☆' },
  { id: 7, img: TommyTealPolo, name: 'Tommy Hilfiger Teal Polo', price: '₹2400', rating: '★★★★☆' },
];

const MenShirts = () => {
  const [wishlist, setWishlist] = useState([]);

  const toggleWishlist = (id) => {
    if (wishlist.includes(id)) {
      setWishlist(wishlist.filter((itemId) => itemId !== id));
    } else {
      setWishlist([...wishlist, id]);
    }
  };

  return (
    <div className="men-shirts-page">
      <h1 className="men-shirts-title">Men Shirts</h1>

      <div className="men-shirts-grid">
        {menShirtsProducts.map((item) => (
          <div key={item.id} className="men-shirts-card">
            {/* ❤️ Wishlist Icon */}
            <span
              className={`wishlist-icon heart ${wishlist.includes(item.id) ? 'active' : ''}`}
              onClick={() => toggleWishlist(item.id)}
            >
              ♥
            </span>

            <img src={item.img} alt={item.name} className="men-shirts-img" />
            <h3>{item.name}</h3>
            <p className="price">{item.price}</p>
            <div className="rating">{item.rating}</div>
            <div className="btn-group">
              <button className="buy-btn">Buy Now</button>
              <button className="cart-btn">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenShirts;
