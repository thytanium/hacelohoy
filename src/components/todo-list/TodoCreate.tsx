import { v4 as uuidv4 } from "uuid";
import { Todo } from "../../models/Todo";
import {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

interface TodoCreateProps {
  onTodoCreate: (todo: Todo) => void;
}

export default function TodoCreate({ onTodoCreate }: TodoCreateProps) {
  const [todoText, setTodoText] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setTodoText(e.target.value),
    []
  );

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      onTodoCreate({ id: uuidv4(), text: todoText, done: false });
      setTodoText("");
    },
    [onTodoCreate, todoText]
  );

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef]);

  return (
    <form onSubmit={onSubmit}>
      <input
        className="px-2 py-1 bg-gray-100 rounded w-full"
        onChange={onChange}
        ref={inputRef}
        type="text"
        value={todoText}
      />
    </form>
  );
}
