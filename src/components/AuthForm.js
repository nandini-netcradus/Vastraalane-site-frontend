import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import config from "../config";
import Vastraalane from "../assets/Vastraalane.jpg"; 
import "./AuthForm.css";

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
    const url = isLogin ? `${api}/api/auth/login` : `${api}/api/auth/register`;

    const headers = { "Content-Type": "application/json" };
    const token = Cookies.get("token");
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    const res = await fetch(url, {
      method: "POST",
      headers,
      credentials: "include",
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    console.log("👉 Response:", data);

    if (isLogin) {
      if (data.token) {
        Cookies.set("token", data.token, { expires: 7 });
        Cookies.set("userId", data.user.id, { expires: 7 });
        navigate("/");
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
    <div
      className="auth-page"
      style={{
        backgroundImage: `url(${Vastraalane})`,
      }}
    >
      <div className="auth-box">
        <h2>{isLogin ? "Login" : "Register"}</h2>

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div>
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          )}

          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit">{isLogin ? "Login" : "Register"}</button>
        </form>

        <p>
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <span onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Register" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
}

export default AuthForm;
