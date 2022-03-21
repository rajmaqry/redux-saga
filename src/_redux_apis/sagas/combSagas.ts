import { all, fork } from "redux-saga/effects";
import { postSagaCallbacks } from "./postsSaga";

export function* sagaaCallbacks() {
  yield all([fork(postSagaCallbacks)]);
}
