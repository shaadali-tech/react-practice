import { useState } from "react";

const Togglemessage = () => {
  const message = "This is a toggle message!";

  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>Toggle Message</button>
      {isVisible && <p>{message}</p>}
    </div>
  );
};

export default Togglemessage;
