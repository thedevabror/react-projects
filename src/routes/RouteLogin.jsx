import React from "react";
import { Navigate } from "react-router-dom";

const RouteLogin = ({ logined, redirectPath = "/", children }) => {
  if (logined == "true") {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};

export default RouteLogin;
