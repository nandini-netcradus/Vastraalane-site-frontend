import React, { useState } from "react";
import "./PopularProducts.css";
import { useWishlist } from "../WishlistContext"; 
import { FaHeart } from "react-icons/fa"; // Heart icon import

// Existing Images
import watch from "../assets/girlswatch.png";
import menshoes from "../assets/Shoes1.jpg";
import menpurse from "../assets/Menpurse1.jpg";
import handbag from "../assets/Handbag1.jpg";
import menshirt from "../assets/shirt1.jpg";
import mentshirt from "../assets/tshirt1.png";
import ShoesMen2 from "../assets/ShoesMen2.jpg";
import Shoesmen1 from "../assets/Shoesmen1.jpg";

// 🔥 New Images
import Adidas from "../assets/ADIDAS.jpg";
import GucciGG from "../assets/GUCCI_GG.jpg";
import MarcJacobs from "../assets/MARC JACOBS BLACK.jpg";
import FossilLadies from "../assets/Fossil_Ladies_gold_watch.jpg";
import LouisShoes from "../assets/Louis_Vuitton_Glitter_Shoes.jpg";
import TommyNavyPolo from "../assets/Tommy_Hilfiger Navy Polo.jpg";
import TommyOffWhite from "../assets/Tommy_Hilfiger Off-white.jpg";
import TommyTealPolo from "../assets/Tommy_Hilfiger Teal Polo.jpg";

const PopularProducts = () => {
  const { addToWishlist } = useWishlist(); 
  const [wishlistIds, setWishlistIds] = useState([]); // track which items are wishlisted

  const products = [
    // 👇 Original products (don’t remove)
    { id: 1, name: "BOLTWATCH_GIRLS", image: watch, price: "₹1500", rating: "⭐⭐⭐⭐" },
    { id: 2, name: "FORMALSHOES", image: menshoes, price: "₹2500", rating: "⭐⭐⭐⭐⭐" },
    { id: 3, name: "LOUIS_WALLET", image: menpurse, price: "₹1200", rating: "⭐⭐⭐" },
    { id: 4, name: "GUCCI_HANDBAG", image: handbag, price: "₹2000", rating: "⭐⭐⭐⭐" },
    { id: 5, name: "TOMMY_HILFIGER", image: menshirt, price: "₹1800", rating: "⭐⭐⭐" },
    { id: 6, name: "CONQUER", image: mentshirt, price: "₹1000", rating: "⭐⭐⭐⭐" },
    { id: 7, name: "NIKE", image: Shoesmen1, price: "₹3000", rating: "⭐⭐⭐⭐" },
    { id: 8, name: "PUMA_P", image: ShoesMen2, price: "₹1500", rating: "⭐⭐⭐⭐" },

    // 👇 New selected products
    { id: 9, name: "ADIDAS ORIGINAL", image: Adidas, price: "₹3200", rating: "⭐⭐⭐⭐⭐" },
    { id: 10, name: "GUCCI_GG SNEAKERS", image: GucciGG, price: "₹4500", rating: "⭐⭐⭐⭐" },
    { id: 11, name: "MARC JACOBS BLACK", image: MarcJacobs, price: "₹5000", rating: "⭐⭐⭐⭐⭐" },
    { id: 12, name: "FOSSIL GOLD LADIES WATCH", image: FossilLadies, price: "₹4200", rating: "⭐⭐⭐⭐" },
    { id: 13, name: "LOUIS VUITTON SHOES", image: LouisShoes, price: "₹7000", rating: "⭐⭐⭐⭐⭐" },
    { id: 14, name: "TOMMY NAVY POLO", image: TommyNavyPolo, price: "₹2200", rating: "⭐⭐⭐⭐" },
    { id: 15, name: "TOMMY OFF-WHITE", image: TommyOffWhite, price: "₹2100", rating: "⭐⭐⭐" },
    { id: 16, name: "TOMMY TEAL POLO", image: TommyTealPolo, price: "₹2300", rating: "⭐⭐⭐⭐" },
  ];

  const handleWishlistToggle = (product) => {
    if (wishlistIds.includes(product.id)) {
      // already in wishlist → remove
      setWishlistIds(wishlistIds.filter((id) => id !== product.id));
      console.log("Removed from wishlist:", product);
    } else {
      // not in wishlist → add
      setWishlistIds([...wishlistIds, product.id]);
      addToWishlist({
        id: product.id,
        name: product.name,
        price: product.price,
        rating: product.rating,
        image: product.image
      });
      console.log("Added to wishlist:", product);
    }
  };

  return (
    <section className="popular-products-section">
      <h2 className="popular-products-heading">Popular Products</h2>
      <div className="popular-products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="wishlist-icon" onClick={() => handleWishlistToggle(product)}>
              <FaHeart 
                className={`heart ${wishlistIds.includes(product.id) ? "active" : ""}`} 
              />
            </div>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="price">{product.price}</p>
            <p className="rating">{product.rating}</p>
            <div className="button-group">
              <button className="btn buy-btn">Buy Now</button>
              <button className="btn cart-btn">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
