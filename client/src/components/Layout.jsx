import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Alert from "./Alert";

const Layout = ({ children }) => {
 return (
  <div className="min-h-screen flex flex-col justify-between">
   <div>
    <Alert />
    <Header />
    <div className="container mx-auto">{children}</div>
   </div>
   <div className="">
    <Footer />
   </div>
  </div>
 );
};

export default Layout;
