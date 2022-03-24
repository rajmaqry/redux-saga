import { State, defaultState } from "../state";
import { UserActions } from "../../actions/userAction";
import { AssertAction } from "../../models/common";
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
  console.log(state);
  switch (action.type) {
    case UserActions.FETCH_USER_REQUEST:
      const inprogress = [...state.inprogress, UserActions.FETCH_USER_REQUEST];
      return {
        ...state,
        loading: true,
        inprogress: inprogress
      };
    case UserActions.FETCH_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        error: null,
        inprogress: release_inprogress(state, UserActions.FETCH_USER_REQUEST)
      };
    case UserActions.FETCH_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    default:
      return requestChanged ? { ...state } : state;
  }
};
