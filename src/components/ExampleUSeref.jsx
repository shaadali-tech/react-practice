const ExampleUSeref = () => {
  return (
    <div>
      <h1>Example of useRef</h1>
      <p>
        The useRef hook in React is used to create a mutable reference that can
        hold a value across renders without causing re-renders when the value
        changes. It is commonly used to access and manipulate DOM elements
        directly, store mutable values, or keep track of previous values.
      </p>
      <p>
        Here’s a simple example of how to use the useRef hook to focus an input
        field when a button is clicked:
      </p>
      <div>
        <input
          type="text"
          ref={inputRef}
          placeholder="Click the button to focus me"
        />
        <button onClick={() => inputRef.current.focus()}>Focus Input</button>
      </div>
    </div>
  );
};

export default ExampleUSeref;
