export interface Todo {
  id: string;
  text: string;
  done: boolean;
}
export type TodoCreateCallback = (todo: Todo) => void;
