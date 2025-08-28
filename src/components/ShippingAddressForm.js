import { useState } from "react";
import config from "../config";
function ShippingAddressForm({ userId, onSave }) {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    pincode: "",
    country: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const api = config.API_URL; 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${api}/api/users/${userId}/address`, {
        method: "POST",   // ✅ Correct method
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),  // ✅ userId body me bhejna zaruri nahi
      });

      const data = await res.json();
      if (data.shippingAddress) {
        onSave(data.shippingAddress);
        alert("✅ Address Saved Successfully");
      } else {
        alert("⚠ Failed to save address");
      }
    } catch (err) {
      alert("❌ Error saving address: " + err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="address-form">
      <h2>Add / Edit Shipping Address</h2>

      <label>Full Name</label>
      <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Enter full name" required />

      <label>Phone</label>
      <input type="number" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" required />

      <label>Street</label>
      <input type="text" name="street" value={formData.street} onChange={handleChange} placeholder="Street / House No." required />

      <div className="row">
        <div>
          <label>City</label>
          <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City" required />
        </div>
        <div>
          <label>State</label>
          <input type="text" name="state" value={formData.state} onChange={handleChange} placeholder="State" required />
        </div>
      </div>

      <div className="row">
        <div>
          <label>Pincode</label>
          <input type="number" name="pincode" value={formData.pincode} onChange={handleChange} placeholder="Pincode" required />
        </div>
        <div>
          <label>Country</label>
          <input type="text" name="country" value={formData.country} onChange={handleChange} placeholder="Country" required />
        </div>
      </div>

      <button type="submit">Save Address</button>
    </form>
  );
}

export default ShippingAddressForm;
