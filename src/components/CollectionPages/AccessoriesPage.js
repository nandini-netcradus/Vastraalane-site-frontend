import React, { useState } from "react";
import "../CollectionPages.css";

import Necklace from "../../assets/Necklace.jpg";
import Bracelet from "../../assets/Bracelet.jpg";
import Anklet from "../../assets/Anklet.jpg";
import BoysWatch from "../../assets/Boyswatch.jpg";
import GirlsWatch from "../../assets/girlswatch.png";

const AccessoriesPage = () => {
  const [wishlist, setWishlist] = useState([]);

  const accessories = [
    { id: 1, name: "Necklace", image: Necklace, price: "₹800", rating: 4 },
    { id: 2, name: "Bracelet", image: Bracelet, price: "₹500", rating: 5 },
    { id: 3, name: "Anklet", image: Anklet, price: "₹4500", rating: 5 },
    { id: 4, name: "Boys Watch", image: BoysWatch, price: "₹1200", rating: 5 },
    { id: 5, name: "Girls Watch", image: GirlsWatch, price: "₹1500", rating: 4 },
  ];

  const renderStars = (rating) => {
    let stars = "";
    for (let i = 1; i <= 5; i++) {
      stars += i <= rating ? "★" : "☆";
    }
    return stars;
  };

  const handleBuyNow = (item) => {
    alert(`Buying ${item.name} for ${item.price}`);
  };

  const handleAddToCart = (item) => {
    alert(`${item.name} added to cart!`);
  };

  const toggleWishlist = (item) => {
    if (wishlist.includes(item.id)) {
      setWishlist(wishlist.filter((id) => id !== item.id));
    } else {
      setWishlist([...wishlist, item.id]);
    }
  };

  return (
    <div className="accessories-page">
      <h1>Accessories</h1>
      <div className="accessories-grid">
        {accessories.map((item) => (
          <div key={item.id} className="accessories-card">
            {/* ❤️ Wishlist Icon */}
            <span
              className={`wishlist-icon heart ${
                wishlist.includes(item.id) ? "active" : ""
              }`}
              onClick={() => toggleWishlist(item)}
            >
              ♥
            </span>

            <img src={item.image} alt={item.name} />
            <h2>{item.name}</h2>
            <p className="price">{item.price}</p>
            <p className="rating">{renderStars(item.rating)}</p>

            <div className="button-group">
              <button
                className="btn buy-btn"
                onClick={() => handleBuyNow(item)}
              >
                Buy Now
              </button>
              <button
                className="btn cart-btn"
                onClick={() => handleAddToCart(item)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccessoriesPage;
