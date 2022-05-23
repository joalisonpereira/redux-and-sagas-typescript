import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TodosState, Todo } from "../types";

const initialState: TodosState = {
  todos: [],
  selectedTodo: null,
  loading: false,
};

export const slice = createSlice({
  name: "peoples",
  initialState,
  reducers: {
    fetchTodos: (state) => {
      state.loading = true;
    },
    fetchTodosSuccess: (state, { payload }: PayloadAction<Todo[]>) => {
      state.loading = false;
      state.todos = payload;
    },
    fetchTodo: (state, {}: PayloadAction<number>) => {
      state.loading = true;
    },
    fetchTodoSuccess: (state, { payload }: PayloadAction<Todo>) => {
      state.loading = false;
      state.selectedTodo = payload;
    },
  },
});

export const TodoActions = slice.actions;

export default slice.reducer;
