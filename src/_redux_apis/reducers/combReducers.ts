import { combineReducers } from "redux";
import postReducer from "./post_reducers/postReducer";
import sessionReducer from "./sessionReducer";

const combReducer = combineReducers({
  posts: postReducer,
  user: sessionReducer
});

export default combReducer;
