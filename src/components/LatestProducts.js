import React, { useState } from "react";
import "./LatestProducts.css";

import SneakersImg from "../assets/Sneakers.jpg";
import BoySneakersImg from "../assets/Boysneakers.jpg";
import HEperfumeImg from "../assets/HEperfume.jpg";
import PurseImg from "../assets/NewPurse.jpg";
import JacketImg from "../assets/NewJacket.jpg";
import GoogleImg from "../assets/Google1.jpg";

const products = [
  { id: 1, name: "Sneakers", image: SneakersImg, price: "₹2999", rating: 4 },
  { id: 2, name: "Boy Sneakers", image: BoySneakersImg, price: "₹3499", rating: 5 },
  { id: 3, name: "HE Perfume", image: HEperfumeImg, price: "₹999", rating: 4 },
  { id: 4, name: "New Purse", image: PurseImg, price: "₹1499", rating: 5 },
  { id: 5, name: "Jacket", image: JacketImg, price: "₹2499", rating: 4 },
  { id: 6, name: "PRADAGlass", image: GoogleImg, price: "₹7999", rating: 5 },
];

const LatestProducts = () => {
  const [wishlist, setWishlist] = useState([]);

  const toggleWishlist = (id) => {
    if (wishlist.includes(id)) {
      setWishlist(wishlist.filter((itemId) => itemId !== id));
    } else {
      setWishlist([...wishlist, id]);
    }
  };

  return (
    <div className="latest-container">
      <h2 className="latest-title">✨ Latest Fresh Picks for You ✨</h2>
      <div className="latest-grid">
        {products.map((product) => (
          <div className="latest-card" key={product.id}>
            {/* ❤️ Wishlist icon */}
            <span
              className={`wishlist-icon heart ${wishlist.includes(product.id) ? "active" : ""}`}
              onClick={() => toggleWishlist(product.id)}
            >
              ♥
            </span>

            <img src={product.image} alt={product.name} className="latest-img" />
            <h3>{product.name}</h3>
            <p className="price">{product.price}</p>
            <p className="rating">
              {"⭐".repeat(product.rating)}{"☆".repeat(5 - product.rating)}
            </p>
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

export default LatestProducts;
