import { all, fork } from "redux-saga/effects";
import { postSagaCallbacks } from "./postsSaga";
import { userSagaCallbacks } from "./userSaga";
import { wsSagaCallbacks } from "./wsSagas";

export function* sagaaCallbacks() {
  yield all([
    fork(postSagaCallbacks),
    fork(userSagaCallbacks),
    fork(wsSagaCallbacks)
  ]);
}
