import { AssertAction } from "../models/common";
import { IUser } from "../models/user";

export const UserActions = {
  FETCH_USER_REQUEST: "FETCH_USER_REQUEST",
  FETCH_USER_SUCCESS: "FETCH_USER_SUCCESS",
  FETCH_USER_FAILURE: "FETCH_USER_FAILURE"
};
export interface FetchUserSuccessPayload {
  user: IUser;
}

export const fetchUserRequest = (
  userId: string,
  password: string
): AssertAction => ({
  type: UserActions.FETCH_USER_REQUEST,
  payload: { userId, password }
});

export const fetchUserSuccess = (user) => ({
  type: UserActions.FETCH_USER_SUCCESS,
  payload: user
});

export const fetchUserFailure = (message) => ({
  type: UserActions.FETCH_USER_FAILURE,
  payload: { message }
});
