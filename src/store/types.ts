export interface Todo {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

export interface TodosState {
  todos: Todo[];
  selectedTodo: Todo | null;
  loading: boolean;
}
