import React from "react";
import Sidebar from "../Menus/Sidebar";
import View from "../View/index";
import "../../styles/styles.sass";

// Global styles and component-specific styles.

const Layout = ({ user, loading = false, children }) => (
  <div
    className="main-view is-flex"
    style={{
      backgroundColor: "#1841D3",
      height: "100vh",
      width: "100%",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center"
    }}
  >
    <div className="columns" style={{ height: "100%", width: "100%" }}>
      <div className="column is-3">
        <Sidebar user={user} loading={loading} className="is-flex" />
      </div>
      <div className="column is-9" style={{ padding: "1.75em" }}>
        <View>{children}</View>
      </div>
    </div>
  </div>
);

export default Layout;
