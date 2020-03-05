import React from "react";
import { useRouter } from "next/router";
import Sidebar from "../Menus/Sidebar";
import View from "../View/index";
import "../../styles/app.scss";
import { motion, AnimatePresence } from "framer-motion";

// Global styles and component-specific styles.

function Layout({ user, loading = false, children }) {
  const config = {
    type: "spring",
    y: 0,
    opacity: 1
  };
  const router = useRouter();
  return (
    <div className="main-view is-flex">
      <div className="columns is-2" style={{ width: "100%" }}>
        <div
          className="column is-flex is-hidden-mobile"
          style={{ justifyContent: "center" }}
        >
          <Sidebar user={user} loading={loading} className="is-flex" />
        </div>
        <div className="column is-10" style={{ padding: "1.75em" }}>
          <motion.div
            transition={{ ease: "linear", duration: 0.4 }}
            key={router.pathname}
            initial={{ y: 300, opacity: 1 }}
            animate={config}
            exit={{ y: -200, opacity: 1 }}
            id="page-transition-container"
          >
            <View>{children}</View>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
