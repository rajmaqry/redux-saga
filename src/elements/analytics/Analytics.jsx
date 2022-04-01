import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../../_redux_apis/selectors";
import { useActions } from "../../_redux_apis/actions/callActions";
import { withOktaAuth } from "@okta/okta-react";
import { useOktaAuth } from "@okta/okta-react";
import { toRelativeUrl } from "@okta/okta-auth-js";
const Analytics = () => {
  const { oktaAuth, authState } = useOktaAuth();
  const login = async () => {
    await oktaAuth.signInWithRedirect();
  };
  const logout = async () => {
    await oktaAuth.signOut();
  };
  if (!authState || !authState?.isAuthenticated) {
    window.alert(authState);
    const originalUri = toRelativeUrl(
      window.location.href,
      window.location.origin
    );
    console.log(originalUri);
    oktaAuth.setOriginalUri(originalUri);
    oktaAuth.signInWithRedirect();
    return <h3 id="loading-icon">Loading...</h3>;
  }

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
