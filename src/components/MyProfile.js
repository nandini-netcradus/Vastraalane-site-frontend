import React, { useState } from "react";
import "./MyProfile.css";
import ShippingAddress from "../Pages/ShippingAddress";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const MyProfile = () => {
  const [activeSection, setActiveSection] = useState("orders");
  const userId = Cookies.get("userId");
  // console.log(userId, "UserId");

  const navigate = useNavigate();

  const handleLogout = () => {
    Cookies.remove("token");
    Cookies.remove("userId");

    alert("✅ Logged out successfully!");
    navigate("/auth");
  };

  const handleLogin = () => {
    navigate("/auth");
  };

  return (
    <div className="user-profile-container flex flex-col md:flex-row min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="profile-sidebar md:w-64 bg-white shadow-md p-4">
        <div className="avatar-section mb-6 text-center"></div>

        <ul className="sidebar-menu space-y-3">
          <li
            className={`cursor-pointer p-2 rounded-md ${
              activeSection === "orders"
                ? "bg-blue-500 text-white"
                : "hover:bg-gray-200"
            }`}
            onClick={() => setActiveSection("orders")}
          >
            🛒 My Orders
          </li>
          <li
            className={`cursor-pointer p-2 rounded-md ${
              activeSection === "wishlist"
                ? "bg-blue-500 text-white"
                : "hover:bg-gray-200"
            }`}
            onClick={() => setActiveSection("wishlist")}
          >
            <Link to="/wishlist">❤️ Wishlist</Link>
          </li>
          <li
            className={`cursor-pointer p-2 rounded-md ${
              activeSection === "address"
                ? "bg-blue-500 text-white"
                : "hover:bg-gray-200"
            }`}
            onClick={() => setActiveSection("address")}
          >
            📦 Shipping Address
          </li>

          {/* ✅ Login Option */}
          <li
            className="cursor-pointer p-2 rounded-md hover:bg-green-200"
            onClick={handleLogin}
          >
            🔑 Login
          </li>

          <li
            className="cursor-pointer p-2 rounded-md hover:bg-gray-200"
            onClick={handleLogout}
          >
            🚪 Logout
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="profile-main flex-1 p-6 space-y-6">
        {/* Orders Section */}
        {activeSection === "orders" && (
          <section className="profile-section bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">🛒 My Orders</h3>
            <p>You haven’t placed any orders yet.</p>
          </section>
        )}

        {/* Wishlist Section */}
        {activeSection === "wishlist" && (
          <section className="profile-section bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">❤️ Wishlist</h3>
            <p>Your wishlist is empty.</p>
          </section>
        )}

        {/* Shipping Address Section */}
        {activeSection === "address" && (
          <section className="profile-section bg-white shadow-md rounded-lg p-6">
            <ShippingAddress userId={userId} />
          </section>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
