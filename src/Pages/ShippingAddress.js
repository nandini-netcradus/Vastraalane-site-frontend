import { useEffect, useState, useRef } from "react";
import ShippingAddressForm from "../components/ShippingAddressForm.js";
import { useNavigate } from "react-router-dom";
import config from "../config";

function ShippingAddress({ userId }) {
  const [address, setAddress] = useState(null);
  const [selected, setSelected] = useState(null);
  const [editingAddress, setEditingAddress] = useState(null);

  const dialogRef = useRef(null);       // View dialog
  const addDialogRef = useRef(null);    // Add dialog
  const editDialogRef = useRef(null);   // Edit dialog

  const navigate = useNavigate();
  const api = config.API_URL;

  // ✅ Fetch saved address
  useEffect(() => {
    fetch(`${api}/api/users/${userId}/address`)
      .then((res) => res.json())
      .then((data) => {
        if (data.shippingAddress) {
          setAddress(data.shippingAddress);
        } else {
          setAddress(null);
        }
      })
      .catch(() => console.log("No address found"));
  }, [userId]);

  // ✅ Handle View click
  const handleView = (addr) => {
    setSelected(addr);
    dialogRef.current?.showModal();
  };

  // ✅ Close View dialog
  const handleCloseView = () => {
    dialogRef.current?.close();
    setSelected(null);
  };


  // ✅ Handle Add click
  const handleAdd = () => {
    addDialogRef.current?.showModal();
  };

  // ✅ Close Add dialog
  const handleCloseAdd = () => {
    addDialogRef.current?.close();
  };

  // ✅ Open Edit Dialog
  const handleEdit = (addr) => {
    setEditingAddress(addr);
    editDialogRef.current?.showModal();
  };

  // ✅ Close Edit Dialog
  const handleCloseEdit = () => {
    editDialogRef.current?.close();
    setEditingAddress(null);
  };

  // ✅ Delete Address
  const handleDelete = async (addrId) => {
    if (!window.confirm("Are you sure you want to delete this address?")) return;

    try {
      const res = await fetch(`${api}/api/users/${userId}/address`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (data.success) {
        alert("✅ Address Deleted Successfully");
        // Refresh address list
        setAddress((prev) =>
          Array.isArray(prev) ? prev.filter((a) => a._id !== addrId) : null
        );
      } else {
        alert("⚠ Failed to delete address");
      }
    } catch (err) {
      alert("❌ Error deleting address: " + err.message);
    }
  };

  return (
    <>
      {/* ✅ Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-4 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-600"
      >
        ⬅ Back
      </button>
      <h1 className="text-2xl font-bold mb-6 text-white">📦 Shipping Address</h1>

      {/* ✅ Add Button */}
      <button
        className="px-3 py-1 rounded bg-yellow-500 text-black hover:bg-yellow-600"
        onClick={handleAdd}
      >
        Add
      </button>

      {/* ✅ 2 Column Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* LEFT = Saved Address Table */}
        <div className="p-6 border rounded-lg bg-gray-900 shadow-lg">
          <h2 className="text-lg font-semibold mb-4 text-white">Saved Address</h2>

          {((Array.isArray(address) && address.length > 0) || (!Array.isArray(address) && address)) ? (
            <div className="overflow-x-auto">
              <table className="w-full table-fixed border-collapse border border-gray-700 text-white">
                <thead className="bg-gray-800">
                  <tr>
                    <th className="border border-gray-700 px-3 py-2 text-left">Sr. No</th>
                    <th className="border border-gray-700 px-3 py-2 text-left">Full Name</th>
                    <th className="border border-gray-700 px-3 py-2 text-left">Phone</th>
                    <th className="border border-gray-700 px-3 py-2 text-left">Street</th>
                    <th className="border border-gray-700 px-3 py-2 text-left">Operations</th>
                  </tr>
                </thead>

                <tbody>
                  {(Array.isArray(address) ? address : [address]).map((addr, i) => (
                    <tr key={addr?._id || i} className="hover:bg-gray-800">
                      <td className="border border-gray-700 px-3 py-2">{i + 1}</td>
                      <td className="border border-gray-700 px-3 py-2">{addr.fullName}</td>
                      <td className="border border-gray-700 px-3 py-2">{addr.phone}</td>
                      <td className="border border-gray-700 px-3 py-2 break-words">
                        {addr.street}, {addr.city}, {addr.state} - {addr.pincode}, {addr.country}
                      </td>
                      <td className="border border-gray-700 px-3 py-2">
                        <div className="flex flex-wrap gap-2">
                          <button
                            className="px-3 py-1 rounded bg-blue-600 hover:bg-blue-700"
                            onClick={() => handleView(addr)}
                          >
                            View
                          </button>
                          <button
                            className="px-3 py-1 rounded bg-yellow-500 text-black hover:bg-yellow-600"
                            onClick={() => handleEdit(addr)}
                          >
                            Edit
                          </button>
                          <button
                            className="px-3 py-1 rounded bg-red-600 hover:bg-red-700"
                            onClick={() => handleDelete(addr._id)}
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-gray-400">No shipping address saved.</p>
          )}

        </div>
      </div>

      {/* ✅ Dialog for Viewing Address */}
      <dialog ref={dialogRef} className="dialog-box">
        {selected && (
          <>
            <h3 className="text-xl font-bold mb-4">📋 Address Details</h3>
            <p><strong>Full Name:</strong> {selected.fullName}</p>
            <p><strong>Phone:</strong> {selected.phone}</p>
            <p><strong>Street:</strong> {selected.street}</p>
            <p><strong>City:</strong> {selected.city}</p>
            <p><strong>State:</strong> {selected.state}</p>
            <p><strong>Pincode:</strong> {selected.pincode}</p>
            <p><strong>Country:</strong> {selected.country}</p>

            <div className="mt-4 flex justify-end">
              <button
                className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded"
                onClick={handleCloseView}
              >
                Close
              </button>
            </div>
          </>
        )}
      </dialog>

      {/* ✅ Dialog for Adding Address */}
      <dialog ref={addDialogRef} className="dialog-box">
        <h2 className="text-lg font-semibold mb-4">➕ Add Shipping Address</h2>
        <ShippingAddressForm
          userId={userId}
          onSave={setAddress}
          onClose={handleCloseAdd}
        />
        <div className="mt-4 flex justify-end">
          <button
            className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded"
            onClick={handleCloseView}
          >
            Close
          </button>
        </div>
      </dialog>

      {/* ✅ Dialog for Editing Address */}
      <dialog ref={editDialogRef} className="dialog-box">
        <h2 className="text-lg font-semibold mb-4">✏ Edit Shipping Address</h2>
        {editingAddress && (
          <ShippingAddressForm
            userId={userId}
            existingAddress={editingAddress}
            onSave={setAddress}
            onClose={handleCloseEdit}
          />
        )}
        <div className="mt-4 flex justify-end">
          <button
            className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded"
            onClick={handleCloseEdit}
          >
            Close
          </button>
        </div>
      </dialog>
    </>
  );
}

export default ShippingAddress;
