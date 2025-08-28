import { useEffect, useState } from "react";
import Cookies from "js-cookie";
function MyOrders() {
  const [orders, setOrders] = useState([]);
  const userId = Cookies.get("userId");

  useEffect(() => {
    if (!userId) return;

    fetchOrders();
  }, [userId]);

  const fetchOrders = () => {
    fetch(`http://localhost:5000/api/orders/user/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data || []);
      })
      .catch((err) => console.error(err));
  };

  const cancelOrder = (orderId) => {
    if (!window.confirm("Are you sure you want to cancel this order?")) return;

    fetch(`http://localhost:5000/api/orders/${orderId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message || "Order cancelled successfully");
        // Remove cancelled order from state
        setOrders((prevOrders) => prevOrders.filter((o) => o._id !== orderId));
      })
      .catch((err) => {
        console.error(err);
        alert("Failed to cancel order");
      });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>My Orders</h2>
      {orders.length === 0 ? (
        <p>You haven’t placed any orders yet.</p>
      ) : (
        <ul>
          {orders.map((order) => (
            <li
              key={order._id}
              style={{
                marginBottom: "20px",
                border: "1px solid #ccc",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              <p>
                <strong>Order ID:</strong> {order._id}
              </p>
              <p>
                <strong>Status:</strong> {order.status}
              </p>
              <p>
                <strong>Total Price:</strong> ₹{order.totalPrice}
              </p>
              <p>
                <strong>Items:</strong>
              </p>
              <ul>
                {order.items.map((item) => (
                  <li key={item.productId}>
                    {item.name} - ₹{item.price} x {item.quantity}
                  </li>
                ))}
              </ul>

              {order.status === "Pending" && (
                <button
                  onClick={() => cancelOrder(order._id)}
                  style={{
                    marginTop: "10px",
                    padding: "6px 12px",
                    backgroundColor: "#ff4d4f",
                    color: "#fff",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  Cancel Order
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MyOrders;
