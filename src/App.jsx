import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import "./App.css";
import AdsPage from "./componets/adspage/AdsPage";
import FormPage from "./componets/forms/FormPage";
import Four0Four from "./componets/error/Four0Four";
import Adpage from "./componets/ads/Adpage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={AdsPage} />
        <Route path="/login" exact component={FormPage} />
        <Route path="/ads" exact component={FormPage} />
        <Route path="/ads/:id" exact component={Adpage} />
        <Route path="/404" exact component={Four0Four} />
        <Route>
          <Redirect to="/404" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
