import { all, fork } from "redux-saga/effects";
import { postSagaCallbacks } from "./postsSaga";
import { userSagaCallbacks } from "./userSaga";

export function* sagaaCallbacks() {
  yield all([fork(postSagaCallbacks), fork(userSagaCallbacks)]);
}
