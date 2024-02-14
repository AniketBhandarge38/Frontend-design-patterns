import React, { useContext } from "react";
import UserContext from "../context/UserContext";

const Header = () => {
  const { user } = useContext(UserContext);
  if (!user.username) return <h4>User is not logged in</h4>;
  return (
    <header className="header">
      <h4>User: {user.username}</h4>
    </header>
  );
};

export default Header;
