import React, { useContext } from "react";
import ThemeContext from "../store/THeme-Store";

function Child() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div>
      <h1>Current Theme: {theme}</h1>
      <button onClick={() => setTheme("dark")}>Change to Dark</button>
    </div>
  );
}

export default Child;
