import "./App.css";
import Body from "./components/Body";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <div className="App">
        <h1>React useContext hook demo</h1>
        <Body />
      </div>
    </UserContextProvider>
  );
}

export default App;
