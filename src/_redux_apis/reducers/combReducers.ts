import { combineReducers } from "redux";

const combReducer = combineReducers({
  posts: postReducer
});

export default combReducer;
