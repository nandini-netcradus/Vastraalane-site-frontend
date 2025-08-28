import React from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function ProtectedRoute({ children }) {
  const token = Cookies.get("token"); // check if user is logged in
  if (!token) {
    return <Navigate to="/auth" replace />;
  }
  return children;
}
