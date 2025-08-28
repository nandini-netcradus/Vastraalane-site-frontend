import { useEffect, useState } from "react";

function Account() {
  const [account, setAccount] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/account")
      .then((res) => res.json())
      .then((data) => setAccount(data.account));
  }, []);

  return (
    <div>
      <h2>Account Settings</h2>
      {!account ? (
        <p>Loading account details...</p>
      ) : (
        <div>
          <p><strong>Name:</strong> {account.name}</p>
          <p><strong>Email:</strong> {account.email}</p>
          <p><strong>Phone:</strong> {account.phone}</p>
        </div>
      )}
    </div>
  );
}

export default Account;
