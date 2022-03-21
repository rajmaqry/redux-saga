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
