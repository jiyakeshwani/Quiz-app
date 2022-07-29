import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import App from "./components/App";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import Quiz from "./components/Quiz";
import Results from "./components/Results";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
   <App />
     
     
      <Route path="/quiz/results" exact>
        <Results />
      </Route>
    </BrowserRouter>
  </React.StrictMode>
);
