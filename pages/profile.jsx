import Layout from "../components/Layout";
import { useFetchUser } from "../lib/user";
// import { createAction } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import { connect } from "react-redux";

const Profile = () => {
  const { user, loading } = useFetchUser({ required: true });
  const currentUser = useSelector(state => state.user.currentUser);

  return (
    <Layout user={user} loading={loading}>
      <h1>{currentUser}</h1>
      {user ? <div>Hello, {user.nickname}</div> : "Error retrieving user!"}
    </Layout>
  );
};

export default connect(state => state)(Profile);
