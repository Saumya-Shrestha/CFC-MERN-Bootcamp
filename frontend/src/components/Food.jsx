import React, { useEffect, useState } from "react";

const Food = ({ name, description }) => {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const data = await response.json();
      // console.log(data);
      setTodos(data);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      <h1>{name}</h1>
      <p>{description}</p>
      <div>
        {todos.map((todo) => (
          <ul key={todo.id}>
            <li>{todo.title}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Food;
