import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TodoActions } from "./store/slices/todos";
import { Todo } from "./store/types";

function App() {
  const dispatch = useDispatch();

  const { todos, selectedTodo, loading } = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(TodoActions.fetchTodos());
  }, [dispatch]);

  function selectItem(item: Todo) {
    dispatch(TodoActions.fetchTodo({ id: item.id }));
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="App">
      <ul>
        {selectedTodo ? (
          <>
            <p>
              <b>Id</b> {selectedTodo.id}
            </p>
            <p>
              <b>Name</b> {selectedTodo.title}
            </p>
            <p>
              <b>Completed</b> {selectedTodo.completed}
            </p>
            <p>
              <b>User Id</b> {selectedTodo.userId}
            </p>
          </>
        ) : (
          todos.map((item) => (
            <li key={item.id}>
              {item.title}{" "}
              <button type="button" onClick={() => selectItem(item)}>
                Selecionar
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default App;
