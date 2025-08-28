import { useEffect, useState } from "react";

function Address() {
  const [address, setAddress] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/address")
      .then((res) => res.json())
      .then((data) => setAddress(data.address));
  }, []);

  return (
    <div>
      <h2>Saved Address</h2>
      {!address ? (
        <p>No address saved yet.</p>
      ) : (
        <div>
          <p><strong>Street:</strong> {address.street}</p>
          <p><strong>City:</strong> {address.city}</p>
          <p><strong>Pin Code:</strong> {address.pincode}</p>
        </div>
      )}
    </div>
  );
}

export default Address;
