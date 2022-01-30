import React from "react";
import Footer from "./Footer";
import Header from "./Header";

function Layout({ children }) {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Header />
      <main className="mb-auto">{children}</main>
      {/* <Footer /> */}
    </div>
  );
}

export default Layout;

// this layout is added to the _app.js and used to wrap aroud the app.
