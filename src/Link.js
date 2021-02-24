import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Main from "./Main";
import News from "./News";
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
        <Route path="/news" component={News} />
        <Route path="/main" component={Main} />
        <Route path="/app" component={App} />
      </HashRouter>
    );
  }
  
  export default Link;