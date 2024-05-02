import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ logined, redirectPath = "/", children }) => {
  if (logined !== "true") {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};

export default ProtectedRoute;
