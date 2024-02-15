import "./App.css";
import ShowTodos from "./components/ShowTodos";
import { withFetchData } from "./components/withFetchData";
function App() {
  const fetchTodos = async () => {
    const data = await fetch(
      `https://jsonplaceholder.typicode.com/users/1/todos`
    );
    const res = await data.json();
    return res;
  };

  const ShowTodoData = withFetchData(ShowTodos, fetchTodos);
  return (
    <div className="App">
      <h1>Higher order component demo</h1>
      <ShowTodoData />
    </div>
  );
}

export default App;
