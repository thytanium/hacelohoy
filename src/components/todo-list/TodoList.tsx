import classNames from "classnames";
import { CheckCircle, Circle } from "react-feather";
import { Todo, TodoCreateCallback } from "../../models/Todo";
import TodoCreate from "./TodoCreate";

interface TodoListProps {
  items: Todo[];
  onTodoUpdate: TodoCreateCallback;
  onTodoCreate: TodoCreateCallback;
}

export default function TodoList({
  items,
  onTodoUpdate,
  onTodoCreate,
}: TodoListProps) {
  return (
    <section>
      <h1>To-do list</h1>
      <TodoCreate onTodoCreate={onTodoCreate} />
      {items.map((todo) => (
        <article key={todo.id} className="flex items-baseline justify-between">
          <div className="flex space-x-4 items-center">
            {todo.done ? (
              <CheckCircle className="text-green-500" />
            ) : (
              <Circle className="text-gray-200" />
            )}
            <span
              className={classNames("text-2xl font-light", {
                "line-through": todo.done,
              })}
            >
              {todo.text}
            </span>
          </div>
          <button
            type="button"
            onClick={() => onTodoUpdate({ ...todo, done: true })}
          >
            Done
          </button>
        </article>
      ))}
    </section>
  );
}
