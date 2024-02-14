import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    setUser({ username });
  };
  return (
    <div>
      <input
        type="text"
        placeholder="username"
        onChange={(e) => setUserName(e.target.value)}
      />{" "}
      <input
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Login;
