import React from "react";
import { Navigate } from "react-router-dom";
// import { useAuth } from "./AuthContext";

const PublicRoute = ({ component }) => {
    const isAuthenticated = sessionStorage.getItem("logined");

  return isAuthenticated ? <Navigate to="/" /> : component;
};

export default PublicRoute;
