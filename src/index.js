import React from 'react';
import ReactDOM from 'react-dom';
import { render } from "react-dom";

import App from "./App";
import { BrowserRouter, Route, Switch,HashRouter,browserHistory } from 'react-router-dom';

ReactDOM.render(
  <HashRouter  history={browserHistory}> 
    <App />
 </HashRouter>,
  document.getElementById('app')
);


//module.hot.accept();

