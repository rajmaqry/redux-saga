import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../../_redux_apis/selectors";
import { useActions } from "../../_redux_apis/actions/callActions";

const Analytics = () => {
  const { loading, posts, error } = useSelector(getAllPosts);
  const { fetchPostRequest } = useActions();

  useEffect(() => {
    fetchPostRequest();
  }, []);
  return (
    <div className="App">
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error</div>
      ) : (
        posts?.map((todo, index) => (
          <div key={todo.id}>
            {++index}. {todo.title}
          </div>
        ))
      )}
    </div>
  );
};
export default Analytics;
