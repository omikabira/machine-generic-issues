import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import {createStore} from 'redux';
import {Provider} from 'react-redux';

import * as serviceWorker from "./serviceWorker";
import Login from "./components/login/Login";
import Logout from "./components/Logout/Logout";
import Machine from "./components/machine/Machine";
import reducer from "./reducers/reducer";

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/login" component={Login} />
      <Route path="/machine" component={Machine} />
      <Route path="/logout" component={Logout} />
    </Switch>
  </BrowserRouter>
  </Provider>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
