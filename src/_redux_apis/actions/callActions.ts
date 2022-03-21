import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchPostRequest } from "./postAction";

const postCreator = {
  fetchPostRequest
};

export const useActions = () => {
  const dispatch = useDispatch();
  return useMemo(() => {
    return bindActionCreators(postCreator, dispatch);
  }, [dispatch]);
};
