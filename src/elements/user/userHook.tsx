import { useState } from "react";

export default function useUser() {
  const getToken = () => {
    const userString = sessionStorage.getItem("user");
    const user = JSON.parse(userString);
    //console.log(user);
    return user?.token;
  };
  const getUser = () => {
    const userString = sessionStorage.getItem("user");
    const user = JSON.parse(userString);
    console.log(user);
    return user;
  };

  const [token, setToken] = useState(getToken());
  const [user, setUser] = useState(getUser());

  const saveUser = (user) => {
    //console.log(JSON.stringify(user));
    sessionStorage.setItem("user", JSON.stringify(user));
    sessionStorage.setItem("token", JSON.stringify(user.token));
    setToken(user.token);
    setUser(user);
  };

  return {
    setUser: saveUser,
    token,
    user
  };
}
