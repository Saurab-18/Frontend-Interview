import "./App.css";
import { useState } from "react";
import { useAddTodoMutation, useGetAllTodosQuery } from "./store/apiSlice";
import { useDeleteTodoMutation } from "./store/deleteApiSlice";

function App() {
  const [todo, setTodo] = useState("");

  const { data, error, refetch } = useGetAllTodosQuery();
  const [deleteTodo] = useDeleteTodoMutation();
  const [addTodo] = useAddTodoMutation();

  const handleDeleteTodo = (id) => {
    deleteTodo(id);
  };

  const handleAddTodo = () => {
    setTodo("");
    addTodo({
      completed: false,
      userId: 1111,
      todo: todo,
    }).then(() => {
      refetch();
    });
  };

  if (error) {
    return (
      <>
        <h1>Error Aaaya he</h1>
      </>
    );
  }

  return (
    <>
      <h1>Learning RTK Query</h1>
      <input
        type="text"
        placeholder="Add Todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      {data &&
        data.map((todo) => {
          return (
            <div
              style={{ display: "flex", gap: "20px", alignItems: "center" }}
              key={todo?.id}
            >
              <h3>{todo?.todo}</h3>
              <button
                style={{
                  height: "40px",
                  width: "100px",
                }}
              >
                Show More
              </button>
              <button
                style={{
                  height: "40px",
                  width: "100px",
                }}
                onClick={() => handleDeleteTodo(todo?.id)}
              >
                Delete Todo
              </button>
            </div>
          );
        })}
    </>
  );
}

export default App;
