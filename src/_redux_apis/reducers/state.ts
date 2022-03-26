import { IUser } from "../models/user";

export interface State {
  loading: boolean;
  inprogress: string[];
  error?: string;
  posts?: string[] | null;
  user?: IUser | null;
  isLoggedIn?: boolean;
  requests: { [requestId: string]: { [actionType: string]: any } };
}
export const defaultState: Readonly<State> = Object.freeze({
  loading: false,
  inprogress: [],
  requests: {}
});
