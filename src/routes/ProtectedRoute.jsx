import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ logined, redirectPath = "/", children }) => {
  if (!logined) {
    return <Navigate to={redirectPath} replace />;
  }else{
    return <Navigate to={"/dashboard"} replace />;
  }

  return children;
};

export default ProtectedRoute;
