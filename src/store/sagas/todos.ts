import { AxiosResponse } from "axios";
import { takeLatest, call, put } from "redux-saga/effects";
import api from "../../services/api";
import { TodoActions } from "../slices/todos";
import { Todo } from "../types";

function* fetchTodos() {
  const { data }: AxiosResponse<Todo[]> = yield call(api.get, `/`);

  yield put(TodoActions.fetchTodosSuccess(data));
}

function* fetchTodo({ payload }: ReturnType<typeof TodoActions.fetchTodo>) {
  const { data }: AxiosResponse<Todo> = yield call(api.get, `/${payload}`);

  yield put(TodoActions.fetchTodoSuccess(data));
}

export default [
  takeLatest(TodoActions.fetchTodos.type, fetchTodos),
  takeLatest(TodoActions.fetchTodo.type, fetchTodo),
];
