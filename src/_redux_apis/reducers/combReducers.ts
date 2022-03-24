import { combineReducers } from "redux";
import postReducer from "./post_reducers/postReducer";
import userReducer from "./user_reducers/userReducer";

const combReducer = combineReducers({
  posts: postReducer,
  user: userReducer
});

export default combReducer;
