import { useEffect, useState } from "react";
import ShippingAddressForm from "../components/ShippingAddressForm.js";
import { useNavigate } from "react-router-dom";

function ShippingAddress({ userId }) {
  const [address, setAddress] = useState(null);
  const navigate = useNavigate(); 

  // ✅ Fetch saved address
  useEffect(() => {
    fetch(`http://localhost:5000/api/users/${userId}/address`) // ✅ Corrected URL
      .then((res) => res.json())
      .then((data) => {
        if (data.shippingAddress) {
          setAddress(data.shippingAddress); // backend returns { shippingAddress: ... }
        } else {
          setAddress(null); // agar address nahi hai
        }
      })
      .catch(() => console.log("No address found"));
  }, [userId]);

  return (
    <div className="p-6">
      {/* ✅ Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-4 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-600"
      >
        ⬅ Back
      </button>
      <h1 className="text-2xl font-bold mb-6 text-white">📦 Shipping Address</h1>

      {/* ✅ 2 Column Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* LEFT = Saved Address */}
        <div className="p-6 border rounded-lg bg-white shadow-lg">
          <h2 className="text-lg font-semibold mb-4">Saved Address</h2>
          {address ? (
            <>
              <p className="font-medium">{address.fullName}</p>
              <p>{address.street}, {address.city}</p>
              <p>{address.state} - {address.pincode}</p>
              <p>📞 {address.phone}</p>
            </>
          ) : (
            <p className="text-gray-500">No shipping address saved.</p>
          )}
        </div>

        {/* RIGHT = Add/Edit Form */}
        <div className="p-6 border rounded-lg bg-white shadow-lg">
          <ShippingAddressForm userId={userId} onSave={setAddress} />
        </div>
      </div>
    </div>
  );
}

export default ShippingAddress;
