import React, { useState } from "react";
import "./ExclusivePage.css";
import { useWishlist } from "../WishlistContext"; 
import { FaHeart } from "react-icons/fa"; // Heart icon

// Import images
import MENSHOES78 from "../assets/MENSHOES78.jpg";
import WOMENSHOES78 from "../assets/WOMENSHOES78.jpg";
import LUXURYWATCH78 from "../assets/LUXURYWATCH78.jpg";
import MENWATCH78 from "../assets/MENWATCH78.jpg";
import WOMENWATCH78 from "../assets/WOMENWATCH78.jpg";
import MENTROUSER78 from "../assets/MENTROUSER78.jpg";
import WALLETHAMPER78 from "../assets/WALLETHAMPER78.jpg";
import SUNGLASSESS78 from "../assets/SUNGLASSESS78.jpg";
import JACKET78 from "../assets/JACKET78.jpg";
import HANDBAG78 from "../assets/HANDBAG78.jpg";
import DENVER78 from "../assets/DENVER78.jpg";
import ENGAGE78 from "../assets/ENGAGE78.jpg";
import HOODIE78 from "../assets/HOODIE78.jpg";
import JEANS78 from "../assets/JEANS78.jpg";

// Array of products
const products = [
  { id: 1, img: MENSHOES78, name: "Nike Air Max Shoes", price: "$120", rating: 4.5 },
  { id: 2, img: WOMENSHOES78, name: "Adidas Ultraboost Shoes", price: "$110", rating: 4.7 },
  { id: 3, img: LUXURYWATCH78, name: "Rolex Submariner Watch", price: "$450", rating: 4.8 },
  { id: 4, img: MENWATCH78, name: "Tag Heuer Carrera Watch", price: "$350", rating: 4.6 },
  { id: 5, img: WOMENWATCH78, name: "Fossil Jacqueline Watch", price: "$300", rating: 4.5 },
  { id: 6, img: MENTROUSER78, name: "Levi's Slim Fit Trouser", price: "$80", rating: 4.2 },
  { id: 7, img: WALLETHAMPER78, name: "Tommy Hilfiger Wallet", price: "$50", rating: 4.4 },
  { id: 8, img: SUNGLASSESS78, name: "Ray-Ban Aviator Sunglasses", price: "$70", rating: 4.3 },
  { id: 9, img: JACKET78, name: "Zara Leather Jacket", price: "$150", rating: 4.6 },
  { id: 10, img: HANDBAG78, name: "Louis Vuitton Handbag", price: "$200", rating: 4.7 },
  { id: 11, img: DENVER78, name: "Denver Perfume", price: "$90", rating: 4.2 },
  { id: 12, img: ENGAGE78, name: "Engage Body Spray", price: "$130", rating: 4.5 },
  { id: 13, img: HOODIE78, name: "H&M Casual Hoodie", price: "$100", rating: 4.4 },
  { id: 14, img: JEANS78, name: "Wrangler Denim Jeans", price: "$110", rating: 4.3 },
];

function ExclusivePage() {
  const { addToWishlist } = useWishlist();
  const [wishlistIds, setWishlistIds] = useState([]);

  const handleWishlistToggle = (product) => {
    if (wishlistIds.includes(product.id)) {
      setWishlistIds(wishlistIds.filter((id) => id !== product.id));
      console.log("Removed from wishlist:", product);
    } else {
      setWishlistIds([...wishlistIds, product.id]);
      addToWishlist({
        id: product.id,
        name: product.name,
        price: product.price,
        rating: product.rating,
        image: product.img
      });
      console.log("Added to wishlist:", product);
    }
  };

  return (
    <div className="exclusive-page">
      <h2 className="exclusive-title">Exclusive Collection</h2>
      <div className="exclusive-grid">
        {products.map((product) => (
          <div key={product.id} className="exclusive-card">
            {/* Wishlist Heart Icon */}
            <div
              className="wishlist-icon"
              onClick={() => handleWishlistToggle(product)}
            >
              <FaHeart
                className={`heart ${wishlistIds.includes(product.id) ? "active" : ""}`}
              />
            </div>

            <img src={product.img} alt={product.name} className="exclusive-img" />
            <h3>{product.name}</h3>
            <p className="price">{product.price}</p>
            <p className="rating">⭐ {product.rating}</p>
            <div className="btn-group">
              <button className="buy-btn">Buy Now</button>
              <button className="cart-btn">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExclusivePage;
