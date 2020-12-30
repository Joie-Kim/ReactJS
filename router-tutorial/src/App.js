import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Profiles from "./Profiles";
import HistorySample from "./HistorySample";

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/profiles">User profile</Link>
        </li>
        <li>
          <Link to="/history">History example</Link>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path={["/about", "/info"]} component={About} />
        <Route path="/profiles" component={Profiles} />
        <Route path="/history" component={HistorySample} />
        <Route
          // path를 따로 정의하지 않으면 모든 상황에 렌더링 됨
          render={({ location }) => (
            <div>
              <h2>Not Found!!</h2>
              <p>{location.pathname}</p>
            </div>
          )}
        />
      </Switch>
    </div>
    // 여러 개의 path에 같은 컴포넌트를 보여 주고 싶다면 path props를 비열로 설정해주면 된다.
  );
};

export default App;
