import {
  fetchUserFailure,
  fetchUserSuccess,
  UserActions
} from "../actions/userAction";
import axios from "axios";
import { API_ENDPONT } from "./common";
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
import reduxSaga, { runSaga, SagaIterator } from "redux-saga";
import { AssertAction } from "../models/common";
import { IUserRequest } from "../models/user";
const dumUser =
  '"data" : { "user_id": "demo","view_page_permissions": ["*"], "role_mappings":["*"], "password": "string", "password_last_changed": "24031022010123","first_name": "demo","last_name": "user","workspace_map": [{"workspace_id":"aa877s00-009nnuuw-12yby7q6hbu-0982113buss","workspace_name":"DemoWorkspace"}]}';
function* fetchUserSaga(action: AssertAction) {
  try {
    const userReq = action.payload;
    console.log(userReq);
    const response = JSON.parse(dumUser); //yield call(axios.get, `${API_ENDPONT}/todos`);
    console.log(response.data);
    const user = response.data;
    console.log(user);
    yield put(fetchUserSuccess(response.data));
  } catch (err) {
    yield put(fetchUserFailure(err.message));
  }
}

export function* userSagaCallbacks(): SagaIterator {
  yield all([takeLatest(UserActions.FETCH_USER_REQUEST, fetchUserSaga)]);
}
