import { AssertAction } from "../models/common";

export const WsActions = {
  CREATE_WS_REQUEST: "CREATE_WS_REQUEST",
  CREATE_WS_SUCCESS: "CREATE_WS_SUCCESS",
  CREATE_WS_FAILURE: "CREATE_WS_FAILURE"
};

export const createWsRequest = (user: string, name: string): AssertAction => ({
  type: WsActions.CREATE_WS_REQUEST,
  payload: { user, name }
});

export const createWsSuccess = (ws) => ({
  type: WsActions.CREATE_WS_SUCCESS,
  payload: ws
});

export const createWsFailure = (message) => ({
  type: WsActions.CREATE_WS_FAILURE,
  payload: { message }
});
