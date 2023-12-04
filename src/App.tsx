import { useCallback, useState } from "react";
import "./App.css";
import TodoList from "./components/todo-list/TodoList";
import { Todo, TodoCreateCallback } from "./models/Todo";

function App() {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const onTodoCreate = useCallback<TodoCreateCallback>(
    (todo: Todo) => setTodoList((currentTodos) => [...currentTodos, todo]),
    []
  );

  const onTodoUpdate = useCallback<TodoCreateCallback>(
    (todo: Todo) =>
      setTodoList((currentTodos) =>
        currentTodos.map((currentTodo) =>
          currentTodo.id === todo.id ? { ...currentTodo, ...todo } : currentTodo
        )
      ),
    []
  );

  return (
    <div className="container mx-auto p-16">
      <TodoList
        items={todoList}
        onTodoCreate={onTodoCreate}
        onTodoUpdate={onTodoUpdate}
      />
    </div>
  );
}

export default App;
