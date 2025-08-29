import { useState, useEffect } from "react";
import config from "../config";

function ShippingAddressForm({ userId, existingAddress, onSave, onClose }) {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    pincode: "",
    country: "",
  });

  const api = config.API_URL;

  // ✅ Pre-fill form if editing
  useEffect(() => {
    if (existingAddress) {
      setFormData(existingAddress);
    } else {
      setFormData({
        fullName: "",
        phone: "",
        street: "",
        city: "",
        state: "",
        pincode: "",
        country: "",
      });
    }
  }, [existingAddress]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(existingAddress,"existing address");
    try {
      const method = existingAddress ? "PUT" : "POST";
      const url = existingAddress
        ? `${api}/api/users/${userId}/address/edit`
        : `${api}/api/users/${userId}/address`;
      // console.log(formData);
      // console.log(url,"url");
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.shippingAddress || data.address) {
        onSave(data.shippingAddress || data.address);

        alert(`✅ Address ${existingAddress ? "Updated" : "Saved"} Successfully`);

        // ✅ Reset form if adding new
        if (!existingAddress) {
          setFormData({
            fullName: "",
            phone: "",
            street: "",
            city: "",
            state: "",
            pincode: "",
            country: "",
          });
        }

        // ✅ Close dialog after save
        if (onClose) onClose();
      } else {
        alert("⚠ Failed to save address");
      }
    } catch (err) {
      alert("❌ Error saving address: " + err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="address-form space-y-3">
      <h2 className="text-lg font-semibold mb-2 text-white">
        {existingAddress ? "Edit Address" : "Add Address"}
      </h2>

      <label className="block text-sm text-gray-300">Full Name</label>
      <input
        type="text"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        placeholder="Enter full name"
        required
        className="w-full p-2 rounded bg-gray-800 text-white border border-gray-600"
      />

      <label className="block text-sm text-gray-300">Phone</label>
      <input
        type="text"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone Number"
        pattern="[0-9]{10}"
        title="Enter a valid 10-digit phone number"
        required
        className="w-full p-2 rounded bg-gray-800 text-white border border-gray-600"
      />

      <label className="block text-sm text-gray-300">Street</label>
      <input
        type="text"
        name="street"
        value={formData.street}
        onChange={handleChange}
        placeholder="Street / House No."
        required
        className="w-full p-2 rounded bg-gray-800 text-white border border-gray-600"
      />

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-sm text-gray-300">City</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="City"
            required
            className="w-full p-2 rounded bg-gray-800 text-white border border-gray-600"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-300">State</label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            placeholder="State"
            required
            className="w-full p-2 rounded bg-gray-800 text-white border border-gray-600"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-sm text-gray-300">Pincode</label>
          <input
            type="text"
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
            placeholder="Pincode"
            pattern="[0-9]{6}"
            title="Enter a valid 6-digit pincode"
            required
            className="w-full p-2 rounded bg-gray-800 text-white border border-gray-600"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-300">Country</label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            placeholder="Country"
            required
            className="w-full p-2 rounded bg-gray-800 text-white border border-gray-600"
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-3 px-4 py-2 bg-green-600 hover:bg-green-700 rounded text-white"
      >
        {existingAddress ? "Update Address" : "Save Address"}
      </button>
    </form>
  );
}

export default ShippingAddressForm;
