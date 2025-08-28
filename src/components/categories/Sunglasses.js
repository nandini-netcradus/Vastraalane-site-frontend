import React, { useState } from 'react';
import './Sunglasses.css';

import Sunglass1 from '../../assets/Sunglasses1.jpg';
import Sunglass2 from '../../assets/Sunglasses2.jpg';
import Sunglass3 from '../../assets/Sunglasses3.jpg';
import Sunglass4 from '../../assets/Sunglasses4.jpg';

// New imports
import MarcJacobsBlack from '../../assets/MARC JACOBS BLACK.jpg';
import ArmaniExchange from '../../assets/Arman_i_ Exchange watch.jpg';
import AudemarsPiguet from '../../assets/AUDEMAR.S PIGUET.jpg';
import CartierGoldBlack from '../../assets/Cartier_gold_black_3072.jpg';
import DavidBeckhamBlack from '../../assets/David Beckham black 220.jpg';
import RolexYachtMaster from '../../assets/ROLE_X_YACHTMASRER.jpg';
import RolexDateJust from '../../assets/ROLLEX DATE JUST DIAL.jpg';

const sunglassesProducts = [
  { id: 1, img: Sunglass1, name: 'Ray-Ban', price: '₹1300', rating: '★★★★☆' },
  { id: 2, img: Sunglass2, name: 'Prada', price: '₹1300', rating: '★★★★☆' },
  { id: 3, img: Sunglass3, name: 'CHROME HEART GOLD B', price: '₹1300', rating: '★★★★☆' },
  { id: 4, img: Sunglass4, name: 'Sunglass 4', price: '₹1300', rating: '★★★★☆' },
  { id: 5, img: MarcJacobsBlack, name: 'MARC JACOBS BLACK', price: '₹2500', rating: '★★★★☆' },
  { id: 6, img: ArmaniExchange, name: 'Armani Exchange Watch', price: '₹3000', rating: '★★★★☆' },
  { id: 7, img: AudemarsPiguet, name: 'AUDEMARS PIGUET', price: '₹5000', rating: '★★★★★' },
  { id: 8, img: CartierGoldBlack, name: 'Cartier Gold Black', price: '₹4500', rating: '★★★★☆' },
  { id: 9, img: DavidBeckhamBlack, name: 'David Beckham Black', price: '₹2199', rating: '★★★★☆' },
  { id: 10, img: RolexYachtMaster, name: 'Rolex Yacht-Master', price: '₹8000', rating: '★★★★★' },
  { id: 11, img: RolexDateJust, name: 'Rolex DateJust Dial', price: '₹7500', rating: '★★★★★' },
];

const Sunglasses = () => {
  const [wishlist, setWishlist] = useState([]);

  const toggleWishlist = (id) => {
    if (wishlist.includes(id)) {
      setWishlist(wishlist.filter((itemId) => itemId !== id));
    } else {
      setWishlist([...wishlist, id]);
    }
  };

  return (
    <div className="sunglasses-page">
      <h1 className="sunglasses-title">Sunglasses Collection</h1>

      <div className="sunglasses-grid">
        {sunglassesProducts.map((item) => (
          <div key={item.id} className="sunglasses-card">
            {/* ❤️ Wishlist icon */}
            <span
              className={`wishlist-icon heart ${wishlist.includes(item.id) ? 'active' : ''}`}
              onClick={() => toggleWishlist(item.id)}
            >
              ♥
            </span>

            <img src={item.img} alt={item.name} className="sunglasses-img" />
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

export default Sunglasses;
