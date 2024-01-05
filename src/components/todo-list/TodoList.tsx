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
        <article key={todo.id} className="flex items-baseline">
          <div className="flex-1 flex space-x-4 items-center">
            {todo.done ? (
              <CheckCircle className="text-green-500" />
            ) : (
              <Circle className="text-gray-200" />
            )}
            <div className="text-2xl font-light flex-1 px-1">
              {todo.done ? (
                <span className="line-through">{todo.text}</span>
              ) : (
                <input
                  className="w-full"
                  onChange={(event) =>
                    onTodoUpdate({ ...todo, text: event.target.value })
                  }
                  value={todo.text}
                />
              )}
            </div>
          </div>
          {!todo.done && (
            <button
              type="button"
              onClick={() => onTodoUpdate({ ...todo, done: true })}
            >
              Done
            </button>
          )}
        </article>
      ))}
    </section>
  );
}
