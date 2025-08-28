import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 
// import { FaHeart } from "react-icons/fa";


function Wishlist() {
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Fetch wishlist items from backend
  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/wishlist");
        const data = await res.json();
        console.log(data, "wishlist data");

        // If backend sends { wishlist: [...] }
        setWishlist(data.wishlist || data);
      } catch (err) {
        console.error("Error fetching wishlist:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchWishlist();
  }, []);

  // Remove product from wishlist
  const removeFromWishlist = async (id) => {
    const confirmDelete = window.confirm("Remove this item from wishlist?");
    if (!confirmDelete) return;
    try {
      await fetch(`http://localhost:5000/api/wishlist/${id}`, {
        method: "DELETE",
      });
      setWishlist((prev) => prev.filter((item) => item._id !== id));
    } catch (err) {
      console.error("Error removing item:", err);
    }
  };

  if (loading) {
    return <p style={{ padding: "20px" }}>Loading wishlist...</p>;
  }

  return (

    <div style={{ padding: "20px" }}>
        <button
        onClick={() => navigate(-1)}
        style={{
          background: "#8f1583ff",
          color: "white",
          border: "none",
          padding: "8px 15px",
          cursor: "pointer",
          borderRadius: "5px",
          marginBottom: "15px",
        }}
      >
        ⬅ Back
      </button>

      <h2 style={{ marginBottom: "20px" }}>My Wishlist ❤️</h2>

      {wishlist.length === 0 ? (
        <p>No items in wishlist.</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: "20px",
          }}
        >
          {wishlist.map((item) => (
            <div
              key={item._id}
              style={{
                border: "1px solid #ccc",
                padding: "15px",
                borderRadius: "10px",
                textAlign: "center",
                background: "#fafafa",
              }}
            >
              <img
                src={item.image || "https://via.placeholder.com/150"}
                alt={item.name}
                width={150}
                height={150}
                style={{ objectFit: "cover", borderRadius: "8px" }}
              />
              <h3 style={{ margin: "10px 0" }}>{item.name}</h3>
              <p style={{ fontWeight: "bold", color: "#333" }}>{item.price}</p>
              <button
                onClick={() => removeFromWishlist(item._id)}
                style={{
                  background: "#e63946",
                  color: "white",
                  border: "none",
                  padding: "8px 12px",
                  cursor: "pointer",
                  borderRadius: "5px",
                  marginTop: "10px",
                }}
              >
                Remove ❌
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Wishlist;
