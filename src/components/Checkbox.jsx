import { useState } from "react";

const Checkbox = () => {
  const [agreed, setAgreed] = useState(false);

  return (
    <div>
      <h2>Checkbox</h2>
      <input
        type="checkbox"
        checked={agreed}
        onChange={(e) => setAgreed(e.target.checked)}
      />
      <p>agreed: {agreed ? "Yes" : "No"}</p>
    </div>
  );
};

export default Checkbox;
