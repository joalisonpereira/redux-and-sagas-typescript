import { Store } from "redux";
import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";

import slices from "./slices";
import sagas from "./sagas";

const middlewares = [];

const sagaMiddleware = createSagaMiddleware();

middlewares.push(sagaMiddleware);

export type RootState = ReturnType<typeof slices>;

const store: Store<RootState> = configureStore({
  reducer: slices,
  middleware: middlewares,
});

sagaMiddleware.run(sagas);

export default store;
