import React from "react";
import { Navigate } from "react-router-dom";
// import { useAuth } from './AuthContext';

const PrivateRoute = ({ children }) => {
  const isAuthenticated = sessionStorage.getItem("logined");

  return isAuthenticated === "true" ? children : <Navigate to="/auth/login" />;
};

export default PrivateRoute;
