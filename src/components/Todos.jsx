const Todos = () => {
  const todos_list = [
    { id: 101, text: "Buy groceries" },
    { id: 102, text: "Finish React lesson" },
    { id: 103, text: "Walk the dog" },
  ];

  return (
    <div>
      <h2>Todos</h2>
      <ul>
        {todos_list.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
