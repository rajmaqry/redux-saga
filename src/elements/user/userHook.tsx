import { useState } from "react";
import { useSelector } from "react-redux";
import { getUser, getIsloggedIn } from "../../_redux_apis/selectors";

function useUser() {
  const getToken = () => {
    const userString = sessionStorage.getItem("user");
    const user = JSON.parse(userString);
    //console.log(user);
    return user?.token;
  };

  const [token, setToken] = useState(getToken());
  const { user: currentUser } = useSelector(getUser);
  const { isLoggedIn } = useSelector(getIsloggedIn);

  const logOut = () => {
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("token");
    //
  };

  const saveUser = () => {
    //console.log("HOOK::::" + JSON.stringify(currentUser));
    sessionStorage.setItem("user", JSON.stringify(currentUser));
    sessionStorage.setItem("token", JSON.stringify(currentUser?.token));
    setToken(currentUser?.token);
  };

  return {
    setUser: saveUser,
    token,
    currentUser,
    isLoggedIn
  };
}

export default useUser;
