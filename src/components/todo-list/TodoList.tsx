import { CheckCircle, Circle, Trash2 } from "react-feather";
import { Todo, TodoCreateCallback } from "../../models/Todo";
import TodoCreate from "./TodoCreate";
import { useTranslation } from "react-i18next";

interface TodoListProps {
  items: Todo[];
  onTodoUpdate: TodoCreateCallback;
  onTodoCreate: TodoCreateCallback;
  onTodoDelete: TodoCreateCallback;
}

export default function TodoList({
  items,
  onTodoUpdate,
  onTodoCreate,
  onTodoDelete,
}: TodoListProps) {
  const { t } = useTranslation();
  return (
    <section>
      <h1>{t("To-do list")}</h1>
      <TodoCreate onTodoCreate={onTodoCreate} />
      {items.map((todo) => (
        <article key={todo.id} className="flex items-baseline">
          <div className="flex-1 flex space-x-4 items-center">
            {todo.done ? (
              <CheckCircle className="text-green-500" />
            ) : (
              <Circle className="text-gray-200" />
            )}
            <div className="text-2xl font-light flex-1">
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

          <button
            type="button"
            onClick={() => onTodoUpdate({ ...todo, done: !todo.done })}
          >
            {t(todo.done ? "Undo" : "Done")}
          </button>

          <button type="button" onClick={() => onTodoDelete(todo)}>
            <Trash2 className="text-pink-500" />
          </button>
        </article>
      ))}
    </section>
  );
}
