import React from "react";
import { Link } from "react-router-dom";

const Home = props => {
  return (
    <div>
      <h1>Concurrent Mode Examples.</h1>
      <ol>
        <li>
          <Link to="/suspense-example1">suspense for data fetching</Link>
        </li>
        <li>
          <Link to="/suspense-example2">
            Fetch on render (without suspense)
          </Link>
        </li>
        <li>
          <Link to="/suspense-example3">Race Condition (without suspense)</Link>
        </li>
        <li>
          <Link to="/suspense-example4">
            Solving Race condition with suspense
          </Link>
        </li>
        <li>
          <Link to="/suspense-example5">suspense with transition</Link>
        </li>
      </ol>
    </div>
  );
};

export default Home;
