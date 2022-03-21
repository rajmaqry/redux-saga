import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware, { SagaMiddleware } from "redux-saga";
import logger from "redux-logger";
import combReducer from "./reducers/combReducers";
import { sagaaCallbacks } from "./sagas/combSagas";
const assertMiddleware: SagaMiddleware = createSagaMiddleware();

const registerSagas = (callbacks: any[]) => {
  callbacks.forEach((callback) => assertMiddleware.run(callback));
};

export const configureStore = () => {
  const store: any = createStore(
    combReducer,
    applyMiddleware(assertMiddleware, logger)
  );
  registerSagas([sagaaCallbacks]);
  return store;
};
