import React, { useContext } from "react";
import UserContext from "../context/userContext";

export const Profile = () => {
  const { User } = useContext(UserContext); // Correct the naming here

  if (!User) return <div>Please login</div>; // Corrected case sensitivity

  return <div>Welcome: {User.Username}</div>;
};

export default Profile;
