import { IPost } from "../models/IPost";

export interface PostAction {
  type: string;
  payload?: any;
  requestId?: string;
  retries?: number;
  retry_interval?: number;
}

export const PostActions = {
  FETCH_POST_REQUEST: "FETCH_POST_REQUEST",
  FETCH_POST_SUCCESS: "FETCH_POST_SUCCESS",
  FETCH_POST_FAILURE: "FETCH_POST_FAILURE"
};
export interface FetchPostsSuccessPayload {
  posts: IPost[];
}

export const fetchPostRequest = (): PostAction => ({
  type: PostActions.FETCH_POST_REQUEST
});

export const fetchPostSuccess = (post: IPost) => ({
  type: PostActions.FETCH_POST_SUCCESS,
  payload: post
});

export const fetchPostFailure = (message) => ({
  type: PostActions.FETCH_POST_FAILURE,
  payload: { message }
});
