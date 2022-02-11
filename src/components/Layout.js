import React from "react";
import Appbar from "./Appbar";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className="w-full bg-gray-50">
      <Appbar />

      <main>{children}</main>

      <Footer />
    </div>
  );
}

export default Layout;
