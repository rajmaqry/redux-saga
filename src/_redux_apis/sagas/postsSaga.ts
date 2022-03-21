import {
  fetchPostFailure,
  fetchPostSuccess,
  PostActions
} from "../actions/postAction";
import axios from "axios";
import {
  all,
  call,
  put,
  take,
  takeEvery,
  select,
  takeLatest,
  delay
} from "redux-saga/effects";
import { httpRequest } from "../util/http_util";
import reduxSaga, { runSaga, SagaIterator } from "redux-saga";

const API_ENDPONT = "https://jsonplaceholder.typicode.com";

function* fetchPostsSaga() {
  try {
    const response = yield call(axios.get, `${API_ENDPONT}/todos`);
    console.log(response.data);
    const post = response.data;
    console.log(post);
    yield put(fetchPostSuccess(response.data));
  } catch (err) {
    yield put(fetchPostFailure(err.message));
  }
}

export function* postSagaCallbacks(): SagaIterator {
  yield all([takeLatest(PostActions.FETCH_POST_REQUEST, fetchPostsSaga)]);
}
