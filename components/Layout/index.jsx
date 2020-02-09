import React from "react";
import Header from "../Header";

// Global styles and component-specific styles.

const Layout = ({ children }) => (
  <div>
    <Header />
    <main>{children}</main>
  </div>
);

export default Layout;
