import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div>
      <Toaster />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
