import { IPost } from "../models/IPost";
import { AssertAction } from "../models/common";

export const PostActions = {
  FETCH_POST_REQUEST: "FETCH_POST_REQUEST",
  FETCH_POST_SUCCESS: "FETCH_POST_SUCCESS",
  FETCH_POST_FAILURE: "FETCH_POST_FAILURE"
};
export interface FetchPostsSuccessPayload {
  posts: IPost[];
}

export const fetchPostRequest = (): AssertAction => ({
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
