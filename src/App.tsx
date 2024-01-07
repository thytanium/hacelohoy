import { useCallback } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";
import "./App.css";
import TodoList from "./components/todo-list/TodoList";
import { Todo, TodoCreateCallback } from "./models/Todo";

function App() {
  const [todoList, setTodoList] = useLocalStorage<Todo[]>("todos", []);

  const onTodoCreate = useCallback<TodoCreateCallback>(
    (todo: Todo) => setTodoList((currentTodos) => [...currentTodos, todo]),
    [setTodoList]
  );

  const onTodoUpdate = useCallback<TodoCreateCallback>(
    (todo: Todo) =>
      setTodoList((currentTodos) =>
        currentTodos.map((currentTodo) =>
          currentTodo.id === todo.id ? { ...currentTodo, ...todo } : currentTodo
        )
      ),
    [setTodoList]
  );

  const onTodoDelete = useCallback(
    (todo: Todo) =>
      setTodoList((currentTodos) =>
        currentTodos.filter(({ id }) => id !== todo.id)
      ),
    [setTodoList]
  );

  return (
    <div className="container mx-auto p-16">
      <TodoList
        items={todoList}
        onTodoCreate={onTodoCreate}
        onTodoUpdate={onTodoUpdate}
        onTodoDelete={onTodoDelete}
      />
    </div>
  );
}

export default App;
