import { Router, Route, Switch, Redirect } from "react-router-dom";

import auth from "../authentification/auth.jsx";
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      auth.isAuthenticated === true ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);
export default PrivateRoute;
