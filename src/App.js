import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import { Home } from "./views/Home";
import SuspenseExample1 from "./views/SuspenseExample1";
import SuspenseExample2 from "./views/SuspenseExample2";
import SuspenseExample3 from "./views/SuspenseExample3";
import SuspenseExample4 from "./views/SuspenseExample4";
import SuspenseExample5 from "./views/SuspenseExample5";

function App() {
  return (
    <div className="app">
      <header>
        <Link to="/">Home</Link>
      </header>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/suspense-example1" component={SuspenseExample1} />
        <Route path="/suspense-example2" component={SuspenseExample2} />
        <Route path="/suspense-example3" component={SuspenseExample3} />
        <Route path="/suspense-example4" component={SuspenseExample4} />
        <Route path="/suspense-example5" component={SuspenseExample5} />
      </Switch>
    </div>
  );
}

export default App;
