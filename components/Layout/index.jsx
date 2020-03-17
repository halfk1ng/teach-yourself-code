import React from "react";
import Sidebar from "../Menus/Sidebar";
import BottomBar from "../Menus/BottomBar";
import View from "../View/index";
import "../../styles/app.scss";

// Global styles and component-specific styles.

function Layout({ user, loading = false, children }) {
  return (
    <div>
      <div className="main-view is-flex is-hidden-touch">
        <div className="columns" style={{ width: "100%" }}>
          <div
            className="column is-2 is-hidden-mobile is-flex"
            style={{ justifyContent: "center" }}
          >
            <Sidebar user={user} loading={loading} className="is-flex" />
          </div>
          <div className="column view-column is-10">
            <View>{children}</View>
          </div>
        </div>
      </div>
      <div className="mobile-view is-hidden-desktop">
        <View style={{ position: "relative" }}>
          {children}
          <BottomBar
            user={user}
            loading={loading}
            className="is-hidden-tablet"
          />
        </View>
      </div>
    </div>
  );
}

export default Layout;
