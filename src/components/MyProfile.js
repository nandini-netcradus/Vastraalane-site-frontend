
import React, { useState } from "react";
import "./MyProfile.css";
import ShippingAddress from "../Pages/ShippingAddress";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";


const MyProfile = () => {
  const [activeSection, setActiveSection] = useState("orders");
  const userId = Cookies.get("userId");
  console.log(userId,"UserId")
  // Profile state
  const [profileData, setProfileData] = useState({
    email: "nandini@example.com",
    phone: "+91-9876543210",
  });

  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove cookies
    Cookies.remove("token");
    Cookies.remove("userId");

    // Optionally show a message
    alert("✅ Logged out successfully!");

    // Redirect to login page
    navigate("/auth");
  };

  return (
    <div className="user-profile-container flex flex-col md:flex-row min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="profile-sidebar md:w-64 bg-white shadow-md p-4">
        <div className="avatar-section mb-6 text-center">
          {/* <h2 className="text-xl font-bold"></h2> */}
        </div>

        <ul className="sidebar-menu space-y-3">
          <li
            className={`cursor-pointer p-2 rounded-md ${
              activeSection === "orders" ? "bg-blue-500 text-white" : "hover:bg-gray-200"
            }`}
            onClick={() => setActiveSection("orders")}
          >
            🛒 My Orders
          </li>
          <li
            className={`cursor-pointer p-2 rounded-md ${
              activeSection === "wishlist" ? "bg-blue-500 text-white" : "hover:bg-gray-200"
            }`}
            onClick={() => setActiveSection("wishlist")}
          >
            
            <Link to="/wishlist">❤️ Wishlist</Link>
          </li>
          <li
            className={`cursor-pointer p-2 rounded-md ${
              activeSection === "address" ? "bg-blue-500 text-white" : "hover:bg-gray-200"
            }`}
            onClick={() => setActiveSection("address")}
          >
            📦 Shipping Address
          </li>
          <li
            className={`cursor-pointer p-2 rounded-md ${
              activeSection === "settings" ? "bg-blue-500 text-white" : "hover:bg-gray-200"
            }`}
            onClick={() => setActiveSection("settings")}
          >
            ⚙️ Account Settings
          </li>
          <li
            className="cursor-pointer p-2 rounded-md hover:bg-gray-200"
            onClick={() => handleLogout()}
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
            <ShippingAddress userId={userId} /> {/* Replace with real userId */}
          </section>
        )}

        {/* Account Settings Section */}
        {activeSection === "settings" && (
  <section className="profile-section bg-gradient-to-r from-purple-700 via-indigo-700 to-purple-900 shadow-xl rounded-2xl p-8 max-w-lg text-white relative overflow-hidden">
    {/* Heading */}
    <h3 className="text-2xl font-bold mb-8 flex items-center gap-2 border-b border-white/20 pb-3">
      <span className="animate-spin-slow">⚙️</span> Account Settings
</h3>

    {/* Form */}
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log("Profile updated:", profileData);
        alert("✅ Profile updated successfully!");
        // Backend API call here
      }}
      className="space-y-6"
    >
      {/* Email Field */}
      <div className="flex flex-col">
        <label className="font-semibold mb-2 text-yellow-300">Email</label>
        <input
          type="email"
          name="email"
          value={profileData.email}
          onChange={(e) =>
            setProfileData({ ...profileData, email: e.target.value })
          }
          placeholder="Enter your email"
          className="p-3 rounded-lg border border-white/30 bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
        />
      </div>

      {/* Phone Field */}
      <div className="flex flex-col">
        <label className="font-semibold mb-2 text-yellow-300">Phone</label>
        <input
          type="text"
          name="phone"
          value={profileData.phone}
          onChange={(e) =>
            setProfileData({ ...profileData, phone: e.target.value })
          }
          placeholder="+91-9876543210"
          className="p-3 rounded-lg border border-white/30 bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
        />
      </div>

      {/* Save Button */}
      <button
        type="submit"
        className="w-full py-3 rounded-lg bg-yellow-400 text-black font-bold hover:bg-yellow-500 transition-all shadow-lg"
      >
        💾 Save Changes
      </button>
    </form>
  </section>
        )}
      </div>
    </div>
  );
};

export default MyProfile;