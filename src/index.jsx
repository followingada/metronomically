import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import App from "./pages/Main";
import NotFound from "./pages/404/NotFound";
import TempoSelect from "./pages/tempos/TempoSelect";
import LoginPage from "./pages/login/Login";
import { GlobalStyle } from "./assets";

ReactDOM.render(
  <BrowserRouter>
    <GlobalStyle />
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/login" component={LoginPage} />
      <Route path="/select" component={TempoSelect} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
