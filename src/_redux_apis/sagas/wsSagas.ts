import {
  createWsSuccess,
  createWsFailure,
  WsActions
} from "../actions/workspaceAction";
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
import { IWorkSpaceMap } from "../models/user";

function* createWsSaga(action: AssertAction) {
  try {
    const req = JSON.stringify(action.payload);
    const new_workSpace: IWorkSpaceMap = {
      workspace_id: action.payload.name,
      workspace_name: action.payload.name,
      create_by: action.payload.user,
      created_at: "new"
    };
    console.log(req);
    const response = JSON.stringify(new_workSpace); //yield call(axios.get, `${API_ENDPONT}/todos`);
    console.log("FROM WS SAGA" + response);
    //const user = response.data;
    // console.log( response.data);
    yield put(createWsSuccess(new_workSpace));
  } catch (err) {
    yield put(createWsFailure(err.message));
  }
}

export function* wsSagaCallbacks(): SagaIterator {
  yield all([takeLatest(WsActions.CREATE_WS_REQUEST, createWsSaga)]);
}
