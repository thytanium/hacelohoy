import { useCallback, useMemo } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";
import TodoList from "./components/todo-list/TodoList";
import type { Todo, TodoCreateCallback, TodoDb } from "./models/Todo";
import LngSwitch from "./components/lng-switch/LngSwitch";
import { serializeDate } from "./utils/serializeDate";
import DarkModeToggle from "./components/dark-mode-toggle/DarkModeToggle";

function App() {
  const currentDate = useMemo(() => new Date(), []);
  const currentDateKey = useMemo(
    () => serializeDate(currentDate),
    [currentDate],
  );
  const [todoList, setTodoList] = useLocalStorage<TodoDb>("todo-list", {});

  const onTodoCreate = useCallback<TodoCreateCallback>(
    (todo: Todo) =>
      setTodoList((currentTodos) => ({
        ...currentTodos,
        [currentDateKey]: [...(currentTodos[currentDateKey] ?? []), todo],
      })),
    [currentDateKey, setTodoList],
  );

  const onTodoUpdate = useCallback<TodoCreateCallback>(
    (todo: Todo) =>
      setTodoList((currentTodos) => ({
        ...currentTodos,
        [currentDateKey]:
          currentTodos[currentDateKey]?.map((currentTodo) =>
            currentTodo.id === todo.id
              ? { ...currentTodo, ...todo }
              : currentTodo,
          ) ?? [],
      })),
    [currentDateKey, setTodoList],
  );

  const onTodoDelete = useCallback(
    (todo: Todo) =>
      setTodoList((currentTodos) => ({
        ...currentTodos,
        [currentDateKey]:
          currentTodos[currentDateKey]?.filter(({ id }) => id !== todo.id) ??
          [],
      })),
    [currentDateKey, setTodoList],
  );

  return (
    <>
      <DarkModeToggle />
      <div className="container mx-auto p-4">
        <TodoList
          date={currentDate}
          items={todoList[currentDateKey] ?? []}
          onTodoCreate={onTodoCreate}
          onTodoUpdate={onTodoUpdate}
          onTodoDelete={onTodoDelete}
        />
      </div>
      <LngSwitch />
    </>
  );
}

export default App;
