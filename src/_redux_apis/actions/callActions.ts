import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchPostRequest } from "./postAction";
import { fetchUserRequest } from "./userAction";

const actionCreator = {
  fetchPostRequest,
  fetchUserRequest
};

export const useActions = () => {
  const dispatch = useDispatch();
  return useMemo(() => {
    return bindActionCreators(actionCreator, dispatch);
  }, [dispatch]);
};
