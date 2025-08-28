import React, { useState } from "react";
import "./Girls.css";

// Image imports
import Shoes1 from "../../assets/Shoes1.jpg";
import Shoesmen1 from "../../assets/Shoesmen1.jpg";
import Shoesmen2 from "../../assets/ShoesMen2.jpg";
import Nike from "../../assets/Nike.jpg";
import NikeAirforce from "../../assets/Nike_Airforce_AMG_Legendary.jpg";
import LouisVuitton from "../../assets/Louis_Vuitton_Glitter_Shoes.jpg";
import Jordan from "../../assets/JORDAN.jpg";
import Gucci from "../../assets/Gucci_princetown.jpg";
import Adapt from "../../assets/Adapt_Automax_Full_Black_Shoes.jpg";
import Adidas from "../../assets/ADIDAS.jpg";
import Adida from "../../assets/adida.jpg";

// Products list
const girlsProducts = [
  { id: 1, img: Shoes1, name: "Shoes 1", price: "₹2500", rating: "★★★★☆" },
  { id: 2, img: Shoesmen1, name: "Shoes Men 1", price: "₹2800", rating: "★★★☆☆" },
  { id: 3, img: Shoesmen2, name: "Shoes Men 2", price: "₹3000", rating: "★★★★★" },
  { id: 4, img: Nike, name: "Nike", price: "₹3500", rating: "★★★★☆" },
  { id: 5, img: NikeAirforce, name: "Nike Airforce AMG", price: "₹4000", rating: "★★★★☆" },
  { id: 6, img: LouisVuitton, name: "Louis Vuitton Glitter", price: "₹5000", rating: "★★★★★" },
  { id: 7, img: Jordan, name: "Jordan", price: "₹4500", rating: "★★★★☆" },
  { id: 8, img: Gucci, name: "Gucci Princetown", price: "₹5500", rating: "★★★★☆" },
  { id: 9, img: Adapt, name: "Adapt Automax Black", price: "₹6000", rating: "★★★★★" },
  { id: 10, img: Adidas, name: "Adidas", price: "₹3200", rating: "★★★★☆" },
  { id: 11, img: Adida, name: "Adida", price: "₹3100", rating: "★★★☆☆" },
];

const Girls = () => {
  const [wishlist, setWishlist] = useState([]);

  const toggleWishlist = (id) => {
    if (wishlist.includes(id)) {
      setWishlist(wishlist.filter((itemId) => itemId !== id));
    } else {
      setWishlist([...wishlist, id]);
    }
  };

  return (
    <div className="girls-page">
      <h1 className="girls-title">Girls Shoes</h1>

      <div className="girls-grid">
        {girlsProducts.map((item) => (
          <div key={item.id} className="girls-card">
            {/* ❤️ Wishlist Icon */}
            <span
              className={`wishlist-icon heart ${wishlist.includes(item.id) ? "active" : ""}`}
              onClick={() => toggleWishlist(item.id)}
            >
              ♥
            </span>

            <img src={item.img} alt={item.name} className="girls-img" />
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

export default Girls;
