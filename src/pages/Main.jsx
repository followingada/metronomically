import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import LoginPage from "./login/Login";

const App = (props) => {
  const [hash, saveHash] = useState(localStorage.getItem("accessToken") || "");
  let loggedIn = hash ? true : false;
  const hashProp = props.location.hash;

  if (hashProp && !loggedIn) {
    saveHash(hash);
    localStorage.setItem("accessToken", hashProp.split("#access_token=")[1]);
  }

  return (
    <>
      {loggedIn && <Redirect to="/select" />}
      {!loggedIn && <LoginPage />}
    </>
  );
};

export default App;
