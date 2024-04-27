import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header } from ".";
import { NavbarWithMegaMenu } from "./Nav";

const Layout = () => {
  return (
    <div>
      {/* <Header /> */}
      <NavbarWithMegaMenu />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
