import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ logined, redirectPath = "/dashboard", children }) => {
  if (!logined) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};

export default ProtectedRoute;
