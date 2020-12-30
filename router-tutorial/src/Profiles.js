import React from "react";
import { Link, Route } from "react-router-dom";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import Profile from "./Profile";

const Profiles = () => {
  const activeStyle = {
    background: "black",
    color: "white",
  };
  return (
    <div>
      <h3>User list</h3>
      <ul>
        <li>
          <NavLink activeStyle={activeStyle} to="/profiles/joie" active>
            joie
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={activeStyle} to="/profiles/gildong">
            gildong
          </NavLink>
        </li>
      </ul>

      <Route path="/profiles" exact render={() => <div>Select user</div>} />
      <Route path="/profiles/:username" component={Profile} />
    </div>
    // component 대신 render라는 props를 넣어줬음
    // 컴포넌트 자체를 전달하는 것이 아니라, 보여 주고 싶은 JSX를 넣어 줄 수 있다.
  );
};

export default Profiles;
