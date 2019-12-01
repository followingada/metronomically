import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import "./App.css";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false); //eslint-disable-line

  const PrivateRoute = ({ isLoggedIn, ...props }) =>
    isLoggedIn ? <div>hello</div> : <Redirect to="/login" />;

  return PrivateRoute({ loggedIn });
};

export default App;
