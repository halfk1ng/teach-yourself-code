import Layout from "../components/Layout";
import { useFetchUser } from "../lib/user";
// import { createAction } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import { connect } from "react-redux";

const useCurrentUser = () => {
  const currentUser = useSelector(state => state.currentUser);
  const dispatch = useDispatch();
  // const increment = () => dispatch(createAction('INCREMENT')())
  // const decrement = () => dispatch(createAction('DECREMENT')())
  // const reset = () => dispatch(createAction('RESET')())

  return { currentUser };
};

const Profile = () => {
  const { user, loading } = useFetchUser({ required: true });
  const { currentUser } = useCurrentUser();

  return (
    <Layout user={user} loading={loading}>
      <h1>{currentUser}</h1>
      {user ? <div>Hello, {user.nickname}</div> : "Error retreiving user!"}
    </Layout>
  );
};

export default connect(state => state)(Profile);
