import React, { useState } from "react";
import UserContext from "./userContext"; // Correct the import here to match casing

const UserContextProvider = ({ children }) => {
  const [User, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ User, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
