import { useContext, useState } from "react";
import FormReducer from "./components/FormReducer";
import ThemeContext from "./store/THeme-Store";
import Child from "./components/Child";

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div>
        <Child />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
