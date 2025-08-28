import React, { useState } from 'react';
import './HandBags.css';

import Handbag1 from '../../assets/Handbag1.jpg';
import Handbag2 from '../../assets/Handbag2.jpg';
import Handbag3 from '../../assets/Handbag3.jpg';
// import Handbag4 from '../../assets/Tommy_Hilfiger Navy Polo.jpg';

const handBagsProducts = [
  { id: 1, img: Handbag1, name: 'Dango.', price: '₹1500', rating: '★★★★☆' },
  { id: 2, img: Handbag2, name: 'DOLCE', price: '₹1500', rating: '★★★★☆' },
  { id: 3, img: Handbag3, name: 'LOUISPHILIP', price: '₹1500', rating: '★★★★☆' },
  // { id: 4, img: Handbag4, name: 'Handbag 4', price: '₹2500', rating: '★★★★☆' },
];

const HandBags = () => {
  const [wishlist, setWishlist] = useState([]);

  const toggleWishlist = (id) => {
    if (wishlist.includes(id)) {
      setWishlist(wishlist.filter((itemId) => itemId !== id));
    } else {
      setWishlist([...wishlist, id]);
    }
  };

  return (
    <div className="handbags-page">
      <h1 className="handbags-title">Hand Bags</h1>

      <div className="handbags-grid">
        {handBagsProducts.map((item) => (
          <div key={item.id} className="handbags-card">
            {/* ❤️ Wishlist Icon */}
            <span
              className={`wishlist-icon heart ${wishlist.includes(item.id) ? 'active' : ''}`}
              onClick={() => toggleWishlist(item.id)}
            >
              ♥
            </span>

            <img src={item.img} alt={item.name} className="handbags-img" />
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

export default HandBags;
