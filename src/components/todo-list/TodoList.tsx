import { CheckCircle, Circle, Trash2 } from "react-feather";
import { Todo, TodoCreateCallback } from "../../models/Todo";
import TodoCreate from "./TodoCreate";
import { useTranslation } from "react-i18next";
import ProgressBar from "../progress-bar/ProgressBar";
import { useMemo } from "react";
import TodoDatePicker from "../todo-date-picker/TodoDatePicker";

interface TodoListProps {
  date: Date;
  items: Todo[];
  onTodoUpdate: TodoCreateCallback;
  onTodoCreate: TodoCreateCallback;
  onTodoDelete: TodoCreateCallback;
}

export default function TodoList({
  date,
  items,
  onTodoUpdate,
  onTodoCreate,
  onTodoDelete,
}: TodoListProps) {
  const { t } = useTranslation();

  const completed = useMemo(() => items.filter((todo) => todo.done), [items]);

  const progressRatio = useMemo(
    () => (items.length > 0 ? completed.length / items.length : 0),
    [completed, items],
  );

  return (
    <section>
      <TodoDatePicker date={date} />
      <ProgressBar value={Math.round(progressRatio * 100)} />
      {items.map((todo) => (
        <article key={todo.id} className="flex items-baseline space-x-2 py-1">
          <div className="flex flex-1 items-center space-x-2">
            <button
              type="button"
              aria-label={t(todo.done ? "Undo" : "Done")}
              onClick={() => onTodoUpdate({ ...todo, done: !todo.done })}
            >
              {todo.done ? (
                <CheckCircle className="text-green-500" />
              ) : (
                <Circle className="text-gray-200" />
              )}
            </button>
            <div className="flex-1 text-2xl font-light">
              {todo.done ? (
                <span className="line-through">{todo.text}</span>
              ) : (
                <input
                  className="w-full bg-transparent"
                  onChange={(event) =>
                    onTodoUpdate({ ...todo, text: event.target.value })
                  }
                  value={todo.text}
                />
              )}
            </div>
          </div>

          {/* delete button */}
          <button
            type="button"
            className="rounded p-1 hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => onTodoDelete(todo)}
          >
            <Trash2 className="text-pink-500" />
          </button>
        </article>
      ))}
      <TodoCreate onTodoCreate={onTodoCreate} />
    </section>
  );
}
