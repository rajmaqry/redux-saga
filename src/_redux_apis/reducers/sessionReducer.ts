import { State, defaultState } from "./state";
import { UserActions } from "../actions/userAction";
import { AssertAction } from "../models/common";
import { IUser } from "../models/user";
import { WsActions } from "../actions/workspaceAction";
import { IWorkSpaceMap } from "../models/user";
const release_inprogress = (state: State, actionType: string): string[] => {
  const set = new Set<string>(state.inprogress);
  set.delete(actionType);
  return Array.from(set);
};

export default (state: State = defaultState, action: AssertAction): State => {
  console.debug(`[ACT] ${action.type}`, action);
  let requestChanged = false;
  if (action.requestId) {
    const ts = Date.now();
    state.requests[action.requestId] = {
      ...state.requests[action.requestId],
      [action.type]: { ...action.payload, ts },
      _last_update: ts
    };
    requestChanged = true;
  }
  //console.log(state);
  switch (action.type) {
    case UserActions.FETCH_USER_SUCCESS:
      const user: IUser = action.payload;
      return {
        ...state,
        loading: false,
        user: Object.assign(user),
        error: null,
        isLoggedIn: true,
        inprogress: release_inprogress(state, UserActions.FETCH_USER_REQUEST)
      };
    case UserActions.FETCH_USER_FAILURE:
      return {
        ...state,
        loading: false,
        isLoggedIn: false,
        error: action.payload.error
      };
    case WsActions.CREATE_WS_REQUEST:
      //state.user.workspace_map.push(ws);
      console.log(state);
      return {
        ...state,
        loading: true,
        error: null,
        inprogress: release_inprogress(state, WsActions.CREATE_WS_REQUEST)
      };
    case WsActions.CREATE_WS_SUCCESS:
      const ws: IWorkSpaceMap = action.payload;
      state.user.workspace_map.push(ws);
      console.log(state);
      return {
        ...state,
        loading: false,
        error: null,
        inprogress: release_inprogress(state, WsActions.CREATE_WS_REQUEST)
      };
    case WsActions.CREATE_WS_FAILURE:
      return {
        ...state,
        loading: false,
        isLoggedIn: false,
        error: action.payload.error
      };
    default:
      return requestChanged ? { ...state } : state;
  }
};
