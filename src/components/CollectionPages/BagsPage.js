// src/components/CollectionPages/BagsPage.js
import React, { useState } from "react";
import "../CollectionPages.css";
import { useWishlist } from "../../WishlistContext"; 
import { FaHeart } from "react-icons/fa"; // Heart icon import

// Images
import Handbag1 from "../../assets/Handbag1.jpg";
import Handbag2 from "../../assets/Handbag2.jpg";
import Handbag3 from "../../assets/Handbag3.jpg";
import Menpurse1 from "../../assets/Menpurse1.jpg";
import Menpurse2 from "../../assets/Menpurse2.jpg";
import Menpurse3 from "../../assets/Menpurse3.jpg";
import Menpurse4 from "../../assets/Menpurse4.jpg";
import Menpurse5 from "../../assets/Menpurse5.jpg";

const BagsPage = () => {
  const { addToWishlist } = useWishlist();
  const [wishlistIds, setWishlistIds] = useState([]); // Track wishlist items

  const bags = [
    { id: 1, name: "GUCCI_GG", image: Handbag1, price: "₹1800", rating: 4 },
    { id: 2, name: "DOLCE_D", image: Handbag2, price: "₹1900", rating: 5 },
    { id: 3, name: "LOUIS VUITTON", image: Handbag3, price: "₹1700", rating: 4 },
    { id: 4, name: "DIOR", image: Menpurse1, price: "₹1200", rating: 4 },
    { id: 5, name: "CHICCERRY", image: Menpurse2, price: "₹1300", rating: 5 },
    { id: 6, name: "Chanel", image: Menpurse3, price: "₹1100", rating: 3 },
    { id: 7, name: "TRENDY", image: Menpurse4, price: "₹1400", rating: 4 },
    { id: 8, name: "LUXE TOTE", image: Menpurse5, price: "₹1500", rating: 5 },
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

  // ✅ Wishlist toggle function
  const handleWishlistToggle = (item) => {
    if (wishlistIds.includes(item.id)) {
      // Remove from wishlist
      setWishlistIds(wishlistIds.filter((id) => id !== item.id));
    } else {
      // Add to wishlist
      setWishlistIds([...wishlistIds, item.id]);
      addToWishlist({
        id: item.id,
        name: item.name,
        price: item.price,
        rating: item.rating,
        image: item.image,
      });
    }
  };

  return (
    <div className="clothing-page">
      <h1>Bags & Purses</h1>
      <div className="clothing-grid">
        {bags.map((item) => (
          <div key={item.id} className="clothing-card">
            
            {/* ❤️ Wishlist icon */}
            <div
              className="wishlist-icon"
              onClick={() => handleWishlistToggle(item)}
            >
              <FaHeart
                className={`heart ${wishlistIds.includes(item.id) ? "active" : ""}`}
              />
            </div>

            <img src={item.image} alt={item.name} />
            <h2>{item.name}</h2>
            <p className="price">{item.price}</p>
            <p className="rating">{renderStars(item.rating)}</p>
            <div className="button-group">
              <button className="btn buy-btn" onClick={() => handleBuyNow(item)}>
                Buy Now
              </button>
              <button className="btn cart-btn" onClick={() => handleAddToCart(item)}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BagsPage;
