import "./App.css";
import { useState, useEffect, } from "react";

function App() {
  const [todo, setTodo] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    console.log("before");
    const data = await fetch("https://jsonplaceholder.typicode.com/todos/2");

    const jsonResponse = await data.json();
    console.log("jsonResponse", jsonResponse.title);
    setTodo(jsonResponse.title);
    setIsLoading(false);
  };

  useEffect(() => {
    // fetchData();
    console.log("Hello Smarth");
  });

  if (isLoading) {
    return <p>Loading data</p>;
  }

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <p>This is my todo for today: {todo}</p>
        <button onClick={() => setIsLoading(!isLoading)}></button>
      </div>
    </>
  );
}

export default App;
