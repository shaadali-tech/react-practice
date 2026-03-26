import { useReducer, useState } from "react";
import "./FormReducer.css";

// reducer
function formReducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        [action.field]: action.value,
      };
    default:
      return state;
  }
}

function FormReducer() {
  const [form, dispatch] = useReducer(formReducer, {
    name: "",
    email: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  function handleChange(e) {
    dispatch({
      type: "UPDATE_FIELD",
      field: e.target.name,
      value: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form Data:", form);

    setSubmittedData(form);
  }

  return (
    <div className="form-reducer-container">
      <h2>Form using useReducer</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={form.email}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>

      {submittedData && (
        <div className="submitted-data">
          <h3>Submitted Data:</h3>
          <p>Name: {submittedData.name}</p>
          <p>Email: {submittedData.email}</p>
        </div>
      )}
    </div>
  );
}

export default FormReducer;
