// src/components/CollectionPages/FootwearPage.js
import React, { useState } from "react";
import "../CollectionPages.css";
import { useWishlist } from "../../WishlistContext"; 
import { FaHeart } from "react-icons/fa";

// Images
import GirlsShoes from "../../assets/Girlshoes.png";
import Shoes1 from "../../assets/Shoes1.jpg";
import Jutti from "../../assets/Jutti.png";
import AdaptAutomaxBlack from "../../assets/Adapt_Automax_Full_Black_Shoes.jpg";
import Adidas1 from "../../assets/adida.jpg";
import Adidas2 from "../../assets/ADIDAS.jpg";
import BalenciagaCargo from "../../assets/Balencia gaa Cargo Sneakers.jpg";
import CoachSneaker from "../../assets/Coach_CitySole_Sneaker.jpg";
import DolceGabbana from "../../assets/Dolce_&_Gabbana_D&G.jpg";
import GucciGG from "../../assets/GUCCI_GG.jpg";
import GucciPrincetown from "../../assets/Gucci_princetown.jpg";
import Jordan from "../../assets/JORDAN.jpg";
import LouisShoes from "../../assets/Louis_Vuitton_Glitter_Shoes.jpg";
import LouisBeltWallet from "../../assets/LOUIS_VUITIONBELTAND WALLET.jpg";
import NikeAirforce from "../../assets/Nike_Airforce_AMG_Legendary.jpg";
import Nike from "../../assets/Nike.jpg";
import PatekPhilippe from "../../assets/PatekPHILIP_E_AUTO.jpg";

const FootwearPage = () => {
  const { addToWishlist } = useWishlist();
  const [wishlistIds, setWishlistIds] = useState([]);

  const footwear = [
    { id: 1, name: "Campus Shoes", image: GirlsShoes, price: "₹1200", rating: 4 },
    { id: 2, name: "Adidas Shoes", image: Shoes1, price: "₹1500", rating: 5 },
    { id: 3, name: "Punjabi Jutti", image: Jutti, price: "₹900", rating: 3 },
    { id: 4, name: "Adapt Automax Full Black", image: AdaptAutomaxBlack, price: "₹2200", rating: 5 },
    { id: 5, name: "Adidas Casual", image: Adidas1, price: "₹2000", rating: 4 },
    { id: 6, name: "Adidas Sports", image: Adidas2, price: "₹2500", rating: 5 },
    { id: 7, name: "Balenciaga Cargo Sneakers", image: BalenciagaCargo, price: "₹3000", rating: 5 },
    { id: 8, name: "Coach CitySole Sneaker", image: CoachSneaker, price: "₹2700", rating: 4 },
    { id: 9, name: "Dolce & Gabbana", image: DolceGabbana, price: "₹3200", rating: 5 },
    { id: 10, name: "Gucci GG", image: GucciGG, price: "₹2800", rating: 4 },
    { id: 11, name: "Gucci Princetown", image: GucciPrincetown, price: "₹2600", rating: 4 },
    { id: 12, name: "Air Jordan", image: Jordan, price: "₹3500", rating: 5 },
    { id: 13, name: "Louis Vuitton Glitter Shoes", image: LouisShoes, price: "₹5000", rating: 5 },
    { id: 14, name: "Louis Vuitton Belt & Wallet (Shoes Combo)", image: LouisBeltWallet, price: "₹4500", rating: 4 },
    { id: 15, name: "Nike Airforce AMG", image: NikeAirforce, price: "₹2800", rating: 5 },
    { id: 16, name: "Nike Casual", image: Nike, price: "₹2300", rating: 4 },
    { id: 17, name: "Patek Philippe E-Auto", image: PatekPhilippe, price: "₹6000", rating: 5 },
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
    <div className="footwear-page">
      <h1>Footwear</h1>
      <div className="footwear-grid">
        {footwear.map((item) => (
          <div key={item.id} className="footwear-card">

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

export default FootwearPage;
