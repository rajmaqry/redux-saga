import { combineReducers } from "redux";
import postReducer from "./post_reducers/postReducer";
const combReducer = combineReducers({
  posts: postReducer
});

export default combReducer;
