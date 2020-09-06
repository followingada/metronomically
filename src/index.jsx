import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import { GlobalStyle } from "./assets";
import App from "./pages/Main";

ReactDOM.render(
  <BrowserRouter>
    <GlobalStyle />
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/*" component={App} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
