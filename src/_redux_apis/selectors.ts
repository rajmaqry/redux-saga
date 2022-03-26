import { Satellite } from "@mui/icons-material";
import { IPost } from "./models/IPost";
import { IUser } from "./models/user";
import { State } from "./reducers/state";

export const getAllState = (state: State): State => state;

export const getAllPosts = (state: State): string[] => state.posts;

export const getUser = (state: State): IUser => state.user;

export const loading = (state: State): boolean | undefined => state.loading;

export const getIsloggedIn = (state: State): boolean => state.isLoggedIn;
export const getMessage = (state: State): string | undefined =>
  state.error ? state.error : "";
