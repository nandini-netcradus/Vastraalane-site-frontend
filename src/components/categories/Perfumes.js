import React, { useState } from 'react';
import './Perfumes.css';

// Old imports
import Perfume1 from '../../assets/Perfume1.jpg';
import Perfume2 from '../../assets/Perfume2.jpg';
import Perfume3 from '../../assets/Perfume3.jpg';
import Perfume4 from '../../assets/Perfume4.jpg';
import Perfume5 from '../../assets/GIO_GIORGIO_ARMAN.jpg';      
import Perfume6 from '../../assets/Dolce_&_Gabbana_A_KING PERFUME.jpg';
// import Perfume7 from '../../assets/Dolce_&_Gabbana_D&G.jpg';

// ✅ New imports
import Perfume8 from '../../assets/ACQUA_DI_GIO_GIOR perfume.jpg';
import Perfume9 from '../../assets/AZZARO_WANTED BY PERFUME.jpg';
import Perfume10 from '../../assets/CALVIN PERFUME.jpg';

// Perfumes list
const perfumes = [
  { id: 1, img: Perfume1, name: 'DIOR', price: '₹1200', rating: '⭐⭐⭐⭐☆' },
  { id: 2, img: Perfume2, name: 'USTRA_AFTERDARK', price: '₹1200', rating: '⭐⭐⭐⭐☆' },
  { id: 3, img: Perfume3, name: 'BELLAVITA', price: '₹1200', rating: '⭐⭐⭐⭐☆' },
  { id: 4, img: Perfume4, name: 'WATTERGIRL', price: '₹1200', rating: '⭐⭐⭐⭐☆' },
  { id: 5, img: Perfume5, name: 'GIO_GIORGIO_ARMAN', price: '₹1200', rating: '⭐⭐⭐⭐☆' },
  { id: 6, img: Perfume6, name: 'Dolce_&_Gabbana_A_KING PERFUME', price: '₹1200', rating: '⭐⭐⭐⭐☆' },
  // { id: 7, img: Perfume7, name: 'DOLCE_&_GABBANA_D&G', price: '₹1200', rating: '⭐⭐⭐⭐☆' },
  { id: 8, img: Perfume8, name: 'ACQUA_DI_GIO_GIOR', price: '₹1200', rating: '⭐⭐⭐⭐☆' },
  { id: 9, img: Perfume9, name: 'AZZARO_WANTED', price: '₹1200', rating: '⭐⭐⭐⭐☆' },
  { id: 10, img: Perfume10, name: 'CALVIN', price: '₹1200', rating: '⭐⭐⭐⭐☆' },
];

const Perfumes = () => {
  const [wishlist, setWishlist] = useState([]);

  const toggleWishlist = (id) => {
    if (wishlist.includes(id)) {
      setWishlist(wishlist.filter((itemId) => itemId !== id));
    } else {
      setWishlist([...wishlist, id]);
    }
  };

  return (
    <div className="perfumes-page">
      <h1 className="perfumes-title">Perfumes</h1>

      <div className="perfumes-grid">
        {perfumes.map((perfume) => (
          <div key={perfume.id} className="perfume-card">
            {/* ❤️ Wishlist icon */}
            <span
              className={`wishlist-icon heart ${wishlist.includes(perfume.id) ? 'active' : ''}`}
              onClick={() => toggleWishlist(perfume.id)}
            >
              ♥
            </span>

            <img src={perfume.img} alt={perfume.name} className="perfume-img" />
            <h3>{perfume.name}</h3>
            <p className="price">{perfume.price}</p>
            <div className="rating">{perfume.rating}</div>
            <div className="btn-group">
              <button className="cart-btn">Add to Cart 🛒</button>
              <button className="buy-btn">Buy Now ⚡</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Perfumes;
