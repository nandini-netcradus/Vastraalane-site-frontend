import { useState } from "react";
import "./AuthForm.css"; 
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import config from "../config";

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const api = config.API_URL; 
    const url = isLogin
      ? `${api}/api/auth/login`
      : `${api}/api/auth/register`;
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    console.log("👉 Response:", data);

    if (isLogin) {
      if (data.token) {
        Cookies.set("token", data.token, { expires: 7 }); // expires in 7 days
        Cookies.set("userId", data.user.id, { expires: 7 });
        // alert("✅ Login successful");
        navigate('/');
      } else {
        alert("⚠ Login failed: " + (data.error || "Unknown error"));
      }
    } else {
      if (data.message) {
        alert("✅ Registered successfully, now login!");
        setIsLogin(true);
      } else {
        alert("⚠ Registration failed: " + (data.error || "Unknown error"));
      }
    }
  };

  return (
    <div className="auth-form max-w-md mx-auto p-6 border rounded-lg shadow-lg bg-white">
      <h2 className="text-2xl font-bold mb-4">
        {isLogin ? "Login" : "Register"}
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {!isLogin && (
          <div>
            <label className="block font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />
          </div>
        )}

        <div>
          <label className="block font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block font-medium">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          {isLogin ? "Login" : "Register"}
        </button>
      </form>

      <p className="mt-4 text-sm text-center">
        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
        <span
          onClick={() => setIsLogin(!isLogin)}
          className="text-blue-600 cursor-pointer hover:underline"
        >
          {isLogin ? "Register" : "Login"}
        </span>
      </p>
    </div>
  );
}

export default AuthForm;
