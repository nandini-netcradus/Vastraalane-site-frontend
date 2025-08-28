import { useState } from "react";
import config from "../config";

function ProductCard({ product }) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const api = config.API_URL;
  const toggleWishlist = async () => {
    try {
      if (!isWishlisted) {
        // Add to wishlist
        await fetch(`${api}/api/wishlist`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(product),
        });
        setIsWishlisted(true);
      } else {
        // Remove from wishlist
        await fetch(`${api}/api/wishlist/${product._id}`, {
          method: "DELETE",
        });
        setIsWishlisted(false);
      }
    } catch (err) {
      console.error("Error updating wishlist:", err);
    }
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} width={150} />
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>

      {/* Heart icon */}
      <span
        onClick={toggleWishlist}
        style={{
          cursor: "pointer",
          fontSize: "22px",
          color: isWishlisted ? "red" : "gray",
        }}
      >
        ♥
      </span>
    </div>
  );
}

export default ProductCard;
