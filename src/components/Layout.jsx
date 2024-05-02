import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from ".";
import { NavbarWithMegaMenu } from "./Nav";

const Layout = () => {
  return (
    <div>
      <NavbarWithMegaMenu />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
