import {State, defaultState} from "../state"

const release_inprogress = (state: State, actionType: string): string[] => {
  const set = new Set<string>(state.inprogress)
  set.delete(actionType)
  return Array.from(set)
}

export default (state: State = defaultState, action: PostAction): State => {
  console.debug(`[ACT] ${action.type}`, action)
  let requestChanged = false
  if (action.requestId) {
      const ts = Date.now()
      state.requests[action.requestId] = {
          ...state.requests[action.requestId],
          [action.type]: { ...action.payload, ts },
          _last_update: ts,
      }
      requestChanged = true
  }

  switch (action.type){
    case PostAction.FETCH_POST_REQUEST:
      const inprogress = [...state.inprogress, PostAction.FETCH_POST_REQUEST]
      return {
        ...state,
        loading: true,
        inprogress: inprogress
      };
    case PostAction.FETCH_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload.posts,
        error: null,
        inprogress : release_inprogress(state, PostAction.FETCH_POST_REQUEST)
      };
    case PostAction.FETCH_POST_FAILURE:
      return {
        ...state,
        loading : false,
        posts: [],
        error: action.payload.error
      };
    default:
      return requestChanged ? { ...state } : state;

  }
