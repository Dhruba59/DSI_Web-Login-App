import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../Context/authContext";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const {currUser} = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={routeProps =>
        !!currUser ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={"/signin"} />
        )
      }
    />
  );
};


export default PrivateRoute;