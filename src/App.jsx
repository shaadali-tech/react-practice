import { useState } from "react";
import "./App.css";
import Name from "./components/Name.jsx";
import Togglemessage from "./components/Togglemessage.jsx";
import AlertMessage from "./components/AlertMessage.jsx";
import Todos from "./components/Todos.jsx";

function App() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button className="btn btn-success" onClick={increment}>
        Click me
      </button>
      <Togglemessage></Togglemessage>
      <AlertMessage type="success" />
      <AlertMessage type="error" />
      <Todos></Todos>
      <Name />
    </div>
  );
}

export default App;
