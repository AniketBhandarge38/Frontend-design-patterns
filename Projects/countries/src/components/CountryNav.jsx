import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const CountryNav = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <nav>
      <h1>Where in the world?</h1>

      <div className="mode">
        <button onClick={() => {
          theme === 'dark' ? setTheme('light') : setTheme('dark')
        } }>
          {theme === "light" ? (
            <span>🌙Dark Mode</span>
          ) : (
            <span>☀️Light Mode</span>
          )}
        </button>
      </div>
    </nav>
  );
};

export default CountryNav;
