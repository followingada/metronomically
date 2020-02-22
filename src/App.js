import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import "./App.css";
import LoginPage from "./features/main/Login";

const App = props => {
  const [hashSaved, saveHash] = useState(
    localStorage.getItem("accessToken") || ""
  );

  let loggedIn = hashSaved ? true : false;
  const hash = props.location.hash;

  if (hash && !loggedIn) {
    saveHash(hashSaved);
    localStorage.setItem("accessToken", hash.split("#access_token=")[1]);
  }

  return (
    <>
      {loggedIn && <Redirect to="/select" />}
      {!loggedIn && <LoginPage />}
    </>
  );
};

export default App;
