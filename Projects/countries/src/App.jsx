import CountryNav from "./components/CountryNav";
import CountryList from "./components/CountryList";
import "./App.css";
import { useContext, useEffect } from "react";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <>
      <CountryNav />

      <main>
        <CountryList />
      </main>
    </>
  );
}

export default App;
