import React, { useState, useContext } from "react";
import UserContext from "../context/userContext";

function Login() {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");

  // Destructure setUser from UserContext
  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ Username, Password });
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        onChange={(e) => setUsername(e.target.value)}
        value={Username}
        type="text"
        placeholder="username"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={Password}
        type="password"
        placeholder="password"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;
