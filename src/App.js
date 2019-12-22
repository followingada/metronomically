import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import "./App.css";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false); //eslint-disable-line
  const [urlParts, setUrlParts] = useState([]);

  useEffect(() => {
    const url = window.location.href;
    if (url.includes("#access_token=")) {
      console.log("im here", url);
      const urlParts = url.split("#access_token=");
      setLoggedIn(true);
      setUrlParts(urlParts);
    }
  }, []);

  const PrivateRoute = () =>
    loggedIn ? (
      <Redirect to="/404" props={urlParts} />
    ) : (
      <Redirect to="/login" />
    );

  return PrivateRoute();
};

export default App;
