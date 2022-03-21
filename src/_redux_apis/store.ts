import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware, { SagaMiddleware } from "redux-saga";
import logger from "redux-logger";
import combReducer from "./reducers";

const assertMiddleware: SagaMiddleware = createSagaMiddleware();

export const configureStore = () => {
  const store: any = createStore(
    combReducer,
    applyMiddleware(assertMiddleware)
  );
  registerSagas([sagaCallbacks]);
  return store;
};
