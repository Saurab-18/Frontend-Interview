import "./App.css";
import { useGetAllTodosQuery } from "./store/apiSlice";
import { useDeleteTodoMutation } from "./store/deleteApiSlice";

function App() {
  const { data, error } = useGetAllTodosQuery();
  const [deleteTodo] = useDeleteTodoMutation();

  const handleDeleteTodo = (id) => {
    deleteTodo(id);
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
