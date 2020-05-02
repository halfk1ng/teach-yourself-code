import React, { useEffect } from "react";
import Sidebar from "../Menus/Sidebar";
import BottomBar from "../Menus/BottomBar";
import View from "../View/index";
import { useFetchUser } from "../../lib/user";
import { useDispatch } from "react-redux";
import { useQuery } from "@apollo/react-hooks";
import { updateCurrentUser, updatedUserId } from "../../store/store";
import { fetchUser } from "../../lib/queries";
import "../../styles/app.scss";

// Global styles and component-specific styles.

function Layout({ children }) {
  const { user, loading, error } = useFetchUser();
  const { data, loading: loadingId, error: idError } = useQuery(fetchUser, {
    variables: {
      sub: user ? user.sub : null,
    },
  });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateCurrentUser(user));
    if (data) {
      dispatch(updatedUserId(data.users[0].id));
    }
  });

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
        <View style={{ position: "relative" }}>{children}</View>
        <BottomBar user={user} loading={loading} className="is-hidden-tablet" />
      </div>
    </div>
  );
}

export default Layout;
