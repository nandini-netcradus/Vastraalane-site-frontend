import React, { createContext, useState, useContext, useEffect } from "react";
import config from "./config";
export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const api = config.API_URL; 
  // ✅ Fetch wishlist from backend on mount
  useEffect(() => {
    const fetchWishlist = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${api}/api/wishlist`);
        if (!res.ok) throw new Error("Failed to fetch wishlist");

        const data = await res.json();
        setWishlist(data.wishlist || []);
      } catch (err) {
        console.error("Error fetching wishlist:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWishlist();
  }, []);

  // ✅ Add item to wishlist
  const addToWishlist = async (item) => {
    try {
      const res = await fetch(`${api}/api/wishlist`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item),
      });

      if (!res.ok) throw new Error("Server returned an error");
      const data = await res.json();
      setWishlist(data.wishlist || []);
    } catch (err) {
      console.error("Error adding to wishlist:", err);
      setError(err.message);
    }
  };

  // ✅ Remove item from wishlist
  const removeFromWishlist = async (id) => {
    try {
      const res = await fetch(`${api}/api/wishlist/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Server returned an error");
      const data = await res.json();
      setWishlist(data.wishlist || []);
    } catch (err) {
      console.error("Error removing from wishlist:", err);
      setError(err.message);
    }
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        loading,
        error,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

// ✅ Easy hook for using wishlist
export const useWishlist = () => useContext(WishlistContext);
