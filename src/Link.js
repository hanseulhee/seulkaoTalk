import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Main from "./Main";
import About from "./About";
import Chatlist from "./Chatlist";
import Login from "./Login";
import Chatwindow from "./Chatwindow";
import App from "./App";

function Link() {
    return (
      <HashRouter>
        <Route path="/" exact={true} component={Login} />
        <Route path="/chatwindow" component={Chatwindow} />
        <Route path="/chatlist" component={Chatlist} />
        <Route path="/about" component={About} />
        <Route path="/main" component={Main} />
        <Route path="/app" component={App} />
      </HashRouter>
    );
  }
  
  export default Link;