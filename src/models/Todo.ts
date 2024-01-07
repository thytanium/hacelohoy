export interface Todo {
  id: string;
  text: string;
  done: boolean;
}

export type TodoDb = Record<string, Todo[]>;

export type TodoCreateCallback = (todo: Todo) => void;
