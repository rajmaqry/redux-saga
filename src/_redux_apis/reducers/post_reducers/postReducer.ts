import { State, defaultState } from "../state";
import { PostAction, PostActions } from "../../actions/postAction";
const release_inprogress = (state: State, actionType: string): string[] => {
  const set = new Set<string>(state.inprogress);
  set.delete(actionType);
  return Array.from(set);
};

export default (state: State = defaultState, action: PostAction): State => {
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
    case PostActions.FETCH_POST_REQUEST:
      const inprogress = [...state.inprogress, PostActions.FETCH_POST_REQUEST];
      return {
        ...state,
        loading: true,
        inprogress: inprogress
      };
    case PostActions.FETCH_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload,
        error: null,
        inprogress: release_inprogress(state, PostActions.FETCH_POST_REQUEST)
      };
    case PostActions.FETCH_POST_FAILURE:
      return {
        ...state,
        loading: false,
        posts: [],
        error: action.payload.error
      };
    default:
      return requestChanged ? { ...state } : state;
  }
};
