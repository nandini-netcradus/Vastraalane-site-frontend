import { useEffect, useState } from "react";
import config from "../config";
function Address() {
  const [address, setAddress] = useState(null);
  const api = config.API_URL; 
  
  useEffect(() => {
    fetch(`${api}/api/address`)
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
