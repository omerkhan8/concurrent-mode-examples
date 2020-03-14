import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home } from "./views/Home";
import SuspenseExample1 from "./views/SuspenseExample1";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/suspense-example1" component={SuspenseExample1} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
