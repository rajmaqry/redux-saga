export interface State {
  loading: boolean;
  inprogress: string[];
  error?: string;
  posts?: string[];
  requests: { [requestId: string]: { [actionType: string]: any } };
}
export const defaultState: Readonly<State> = Object.freeze({
  loading: false,
  inprogress: [],
  requests: {}
});
