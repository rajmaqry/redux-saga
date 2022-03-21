import { IPost } from "./models/IPost";
import { State } from "./reducers/state";

export const getAllState = (state: State): State => state;

export const getAllPosts = (state: State): string[] => state.posts;
