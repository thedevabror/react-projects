import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header } from ".";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
