import React from "react";
import Sidebar from "../Menus/Sidebar";
import View from "../View/index";
import "../../styles/app.scss";

// Global styles and component-specific styles.

const Layout = ({ user, loading = false, children }) => (
  <div className="main-view is-flex">
    <div className="columns is-2" style={{ width: "100%" }}>
      <div
        className="column is-flex is-hidden-mobile"
        style={{ justifyContent: "center" }}
      >
        <Sidebar user={user} loading={loading} className="is-flex" />
      </div>
      <div className="column is-10" style={{ padding: "1.75em" }}>
        <View>{children}</View>
      </div>
    </div>
  </div>
);

export default Layout;
