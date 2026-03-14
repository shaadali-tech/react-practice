import { useState } from "react";

const Controlledinput = () => {
  const [name, setname] = useState("");

  return (
    <div>
      <h2>Controlled Input</h2>
      <input
        type="text"
        onChange={(e) => {
          setname(e.target.value);
          console.log(e);
        }}
      />
      <p>your name is: {name}</p>
    </div>
  );
};

export default Controlledinput;
