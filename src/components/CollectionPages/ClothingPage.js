// src/components/CollectionPages/ClothingPage.js
import React, { useState } from "react";
import "../CollectionPages.css";
import { useWishlist } from "../../WishlistContext"; 
import { FaHeart } from "react-icons/fa";

// Images
import Shirt1 from "../../assets/shirt1.jpg";
import Shirt2 from "../../assets/shirt2.jpg";
import Shirt3 from "../../assets/shirt3.jpg";
import Shirts5 from "../../assets/shirts5.png";
import Tshirt1 from "../../assets/tshirt1.png";
import Tshirt2 from "../../assets/tshirt2.jpg";
import Hoodie from "../../assets/Hoodie.png";
import Hoodie1 from "../../assets/Hoodie1.jpg";
import Mensuit from "../../assets/Mensuit.jpg";
import Girlswatch from "../../assets/girlswatch.png";

const ClothingPage = () => {
  const { addToWishlist } = useWishlist();
  const [wishlistIds, setWishlistIds] = useState([]);

  const clothes = [
    { id: 1, name: "H&M", image: Shirt1, price: "₹999", rating: 4 },
    { id: 2, name: "United Colors of Benetton", image: Shirt2, price: "₹1199", rating: 5 },
    { id: 3, name: "Louis Philippe", image: Shirt3, price: "₹899", rating: 3 },
    { id: 4, name: "Sollo", image: Shirts5, price: "₹1299", rating: 4 },
    { id: 5, name: "Peter England", image: Tshirt1, price: "₹699", rating: 4 },
    { id: 6, name: "Levi's", image: Tshirt2, price: "₹799", rating: 5 },
    { id: 7, name: "Denim Medium", image: Hoodie, price: "₹1499", rating: 5 },
    { id: 8, name: "Levi's Hoodie", image: Hoodie1, price: "₹1399", rating: 4 },
    { id: 9, name: "Raymond Suit", image: Mensuit, price: "₹4999", rating: 5 },
    { id: 10, name: "Watch", image: Girlswatch, price: "₹1599", rating: 4 },
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

  // ✅ Wishlist toggle
  const handleWishlistToggle = (item) => {
    if (wishlistIds.includes(item.id)) {
      setWishlistIds(wishlistIds.filter((id) => id !== item.id));
    } else {
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
      <h1>Clothing</h1>
      <div className="clothing-grid">
        {clothes.map((item) => (
          <div key={item.id} className="clothing-card">
            
            {/* ❤️ Wishlist Icon */}
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

export default ClothingPage;
