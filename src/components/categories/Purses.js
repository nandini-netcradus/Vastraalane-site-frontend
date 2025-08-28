import React from 'react';
import './Purses.css';

import boysPurse1 from '../../assets/Menpurse1.jpg';
import boysPurse2 from '../../assets/Menpurse2.jpg';
import girlsPurse1 from '../../assets/girlspurse1.jpg';
import girlsPurse2 from '../../assets/girlspurse2.jpg';

// 🔥 New imports
import GucciBeltWallet from '../../assets/GUCCI_GG_BELT AND WALLET.jpg';
import ArmaniBeltWallet from '../../assets/ARMANI_Premium_Belt_&_wallet.jpg';
import LouisBeltWallet from '../../assets/LOUIS_VUITIONBELTAND WALLET.jpg';
import MontBlancPremium from '../../assets/MONT_BLANCPREMIUM.jpg';

const pursesProducts = [
  { img: boysPurse1, name: 'GOYARD SAINT PREMium', price: '₹1400', rating: '★★★★☆' },
  { img: boysPurse2, name: 'LOUIS', price: '₹1400', rating: '★★★★☆' },
  { img: girlsPurse1, name: 'GUCCI_GG', price: '₹1400', rating: '★★★★☆' },
  { img: girlsPurse2, name: 'Ray-Band', price: '₹1400', rating: '★★★★☆' },

  // 🔥 New Products
  { img: GucciBeltWallet, name: 'GUCCI GG Belt & Wallet', price: '₹2500', rating: '★★★★★' },
  { img: ArmaniBeltWallet, name: 'Armani Premium Belt & Wallet', price: '₹2300', rating: '★★★★☆' },
  { img: LouisBeltWallet, name: 'Louis Vuitton Belt & Wallet', price: '₹2700', rating: '★★★★★' },
  { img: MontBlancPremium, name: 'Mont Blanc Premium Set', price: '₹2600', rating: '★★★★☆' },
];

const Purses = () => {
  return (
    <div className="purses-page">
      <h1 className="purses-title">Purses Collection</h1>

      <div className="purses-grid">
        {pursesProducts.map((item, index) => (
          <div key={index} className="purses-card">
            <img src={item.img} alt={item.name} className="purses-img" />
            <h3>{item.name}</h3>
            <p className="price">{item.price}</p>
            <div className="rating">{item.rating}</div>
            <div className="btn-group">
              <button className="buy-btn">Buy Now</button>
              <button className="cart-btn">Add to Cart</button>
              <button className="wishlist-btn">Wishlist</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Purses;
