import { all } from "redux-saga/effects";
import todos from "./todos";

export default function* rootSaga() {
  yield all([todos].flat());
}
