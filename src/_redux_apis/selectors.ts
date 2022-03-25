import { IPost } from "./models/IPost";
import { IUser } from "./models/user";
import { State } from "./reducers/state";

export const getAllState = (state: State): State => state;

export const getAllPosts = (state: State): string[] => state.posts;

export const getUser = (state: State): IUser | undefined =>
  state.user ? state.user : null;
