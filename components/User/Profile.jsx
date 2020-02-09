import React from "react";

const Profile = ({ user }) => {
  console.log(user);
  return <div>Hello, {user.first_name}</div>;
};

export default Profile;
