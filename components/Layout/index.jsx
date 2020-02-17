import React from "react";
import Sidebar from "../Menus/Sidebar";
import View from "../View/index";
import "../../styles/styles.sass";

// Global styles and component-specific styles.

const Layout = ({ children }) => (
  <div className="columns">
    <div className="column is-2">
      <Sidebar />
    </div>
    <div className="column is-10">
      <View>{children}</View>
    </div>
  </div>
);

export default Layout;
